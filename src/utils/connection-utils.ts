import { GraphQLResolveInfo } from 'graphql';
import mongoose, { FilterQuery, Types } from 'mongoose';

import { Maybe, PageInfo } from '../generated/graphql';

type ConnectionDefaultsOptions<T> = {
  after?: Maybe<string>;
  before?: Maybe<string>;
  filter?: Maybe<T>;
  first?: Maybe<number>;
};

type ConnectionDefaultsResponse<T> = Omit<ConnectionDefaultsOptions<T>, 'first'> & {
  first: number;
};

export function getConnectionDefault<T>(args: ConnectionDefaultsOptions<T>): ConnectionDefaultsResponse<T> {
  return {
    after: args.after ?? null,
    before: args.before ?? null,
    first: args.first ?? 50,
    filter: args.filter ?? null,
  };
}

type ConnectionRequestInformation = {
  hasRequestedCount: boolean;
  hasRequestedNodes: boolean;
};

export function getConnectionRequestInformation(resolverInfo: GraphQLResolveInfo): ConnectionRequestInformation {
  return {
    hasRequestedCount: resolverInfo.fieldNodes.some(node => {
      return node.selectionSet?.selections.some((selection: any) => selection.name.value === 'totalCount') ?? false;
    }),
    hasRequestedNodes: resolverInfo.fieldNodes.some(node => {
      return node.selectionSet?.selections.some((selection: any) => selection.name.value === 'nodes') ?? false;
    }),
  };
}

type ConnectionResponse<T> = {
  totalCount: number;
  pageInfo: PageInfo;
  nodes: (T & { _id: string })[];
};

type ConnectionPayload<T> = {
  nodes: readonly (T & { _id: string })[];
  first: number;
  totalCount: number;
  after?: Maybe<string>;
  before?: Maybe<string>;
};

const DEFAULT_PAGE_INFO: PageInfo = {
  startCursor: null,
  endCursor: null,
  hasNextPage: false,
  hasPreviousPage: false,
};

export function mapConnectionResponse<T>({ nodes, totalCount, after, before, first }: ConnectionPayload<T>): ConnectionResponse<T> {
  if (!nodes.length && totalCount === 0) {
    return {
      nodes: [],
      pageInfo: DEFAULT_PAGE_INFO,
      totalCount: 0,
    };
  }

  const slicedNodes = nodes.slice(0, first);

  return {
    nodes: before ? slicedNodes.reverse() : slicedNodes,
    totalCount,
    pageInfo: {
      startCursor: slicedNodes[0]?._id ?? null,
      endCursor: slicedNodes[slicedNodes.length - 1]?._id ?? null,
      hasNextPage: !!before || nodes.length > first,
      hasPreviousPage: !!after || (!!before && nodes.length >= first + 1), // Plus one because this is the fetch limit
    },
  };
}

type ConnectionRequestPayload<T> = {
  model: mongoose.Model<T>;
  requestInformation: ConnectionRequestInformation;
  first: number;
  before?: Maybe<string>;
  after?: Maybe<string>;
  baseFilter?: FilterQuery<any>;
};

type DocumentResponse<T> = T extends mongoose.Document<any, any, any> ? mongoose.LeanDocument<T>[] : mongoose.LeanDocument<mongoose.Require_id<T>>[];

export async function handleConnectionRequest<T>({
  after,
  first,
  model,
  before,
  baseFilter,
  requestInformation,
}: ConnectionRequestPayload<T>): Promise<{ nodes: DocumentResponse<T>; totalCount: number }> {
  const mergedFilters = {
    ...baseFilter,
    ...(after ? { _id: { $lt: new Types.ObjectId(after) } } : null),
    ...(before ? { _id: { $gt: new Types.ObjectId(before) } } : null),
  };

  const totalCountPromise = requestInformation.hasRequestedCount ? model.find<T>(baseFilter ?? {}).count() : Promise.resolve(0);
  const userPromise = requestInformation.hasRequestedNodes
    ? await model
        .find<T>(mergedFilters)
        .sort({ _id: before ? 1 : -1 })
        .limit(first + 1) // We want to fetch 1 more for pagination reasons
        .lean()
    : Promise.resolve([] as unknown as DocumentResponse<T>);

  const [totalCount, nodes] = await Promise.all([totalCountPromise, userPromise]);

  return {
    nodes,
    totalCount,
  };
}
