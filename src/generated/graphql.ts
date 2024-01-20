import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  Upload: any;
};

export type RootSchema = {
  __typename?: "RootSchema";
  status?: Maybe<Scalars["Boolean"]>;
};

export type Query = {
  __typename?: "Query";
  getStatus?: Maybe<Array<Maybe<RootSchema>>>;
  appVersion?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<Maybe<User>>>;
  userByID?: Maybe<User>;
  userByEmail?: Maybe<User>;
  concerts?: Maybe<Array<Maybe<Concert>>>;
  concertByID?: Maybe<Concert>;
  tickets?: Maybe<Array<Maybe<ConcertTicket>>>;
};

export type QueryAppVersionArgs = {
  app: Scalars["String"];
};

export type QueryUserByIdArgs = {
  _id: Scalars["ID"];
};

export type QueryUserByEmailArgs = {
  email: Scalars["String"];
};

export type QueryConcertByIdArgs = {
  _id: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  changeStatus?: Maybe<RootSchema>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  createConcert?: Maybe<Concert>;
  purchaseTicket?: Maybe<ConcertTicket>;
  updateAttendance?: Maybe<ConcertTicket>;
  createConcertTicket?: Maybe<ConcertTicket>;
  updateConcertTicket?: Maybe<ConcertTicket>;
};

export type MutationCreateUserArgs = {
  user: CreateUserInput;
};

export type MutationUpdateUserArgs = {
  _id: Scalars["ID"];
  user: UserInput;
};

export type MutationCreateConcertArgs = {
  concert?: InputMaybe<CreateConcertInput>;
};

export type MutationPurchaseTicketArgs = {
  ticketInfo?: InputMaybe<CreateTicketInput>;
};

export type MutationUpdateAttendanceArgs = {
  ticketInfo?: InputMaybe<UpdateTicketInput>;
};

export type MutationCreateConcertTicketArgs = {
  ticket?: InputMaybe<CreateTicketInput>;
};

export type MutationUpdateConcertTicketArgs = {
  ticket?: InputMaybe<UpdateTicketInput>;
};

export enum UserStatus {
  Inactive = "inactive",
  Active = "active",
}

export type User = {
  __typename?: "User";
  _id: Scalars["ID"];
  email: Scalars["String"];
  wallet_address?: Maybe<Scalars["String"]>;
  first_name?: Maybe<Scalars["String"]>;
  last_name?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  traits?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type UserInput = {
  email?: InputMaybe<Scalars["String"]>;
  wallet_address?: InputMaybe<Scalars["String"]>;
  first_name?: InputMaybe<Scalars["String"]>;
  last_name?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  traits?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CreateUserInput = {
  email: Scalars["String"];
  first_name?: InputMaybe<Scalars["String"]>;
  last_name?: InputMaybe<Scalars["String"]>;
};

export type Concert = {
  __typename?: "Concert";
  _id: Scalars["ID"];
  name: Scalars["String"];
  start?: Maybe<Scalars["Float"]>;
  end?: Maybe<Scalars["Float"]>;
  artist: Scalars["String"];
  description: Scalars["String"];
  price: Scalars["Float"];
  base_image: Scalars["String"];
  available_tickets: Scalars["Int"];
  token_id: Scalars["Int"];
};

export type CreateConcertInput = {
  name: Scalars["String"];
  start?: InputMaybe<Scalars["Float"]>;
  end?: InputMaybe<Scalars["Float"]>;
  artist: Scalars["String"];
  description: Scalars["String"];
  price: Scalars["Float"];
  base_image: Scalars["String"];
  available_tickets: Scalars["Int"];
  token_id: Scalars["Int"];
};

export type UpdateConcertInput = {
  name?: InputMaybe<Scalars["String"]>;
  start?: InputMaybe<Scalars["Float"]>;
  end?: InputMaybe<Scalars["Float"]>;
  artist?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Float"]>;
  base_image?: InputMaybe<Scalars["String"]>;
  available_tickets?: InputMaybe<Scalars["Int"]>;
  token_id?: InputMaybe<Scalars["Int"]>;
};

export type ConcertTicket = {
  __typename?: "ConcertTicket";
  _id: Scalars["ID"];
  user_id?: Maybe<Scalars["ID"]>;
  concert_id?: Maybe<Scalars["ID"]>;
  attended: Scalars["Boolean"];
};

export type CreateTicketInput = {
  user_id: Scalars["ID"];
  concert_id: Scalars["ID"];
};

export type UpdateTicketInput = {
  user_id: Scalars["ID"];
  concert_id: Scalars["ID"];
  attended: Scalars["Boolean"];
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  RootSchema: ResolverTypeWrapper<RootSchema>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Mutation: ResolverTypeWrapper<{}>;
  JSON: ResolverTypeWrapper<Scalars["JSON"]>;
  UserStatus: UserStatus;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  UserInput: UserInput;
  CreateUserInput: CreateUserInput;
  Concert: ResolverTypeWrapper<Concert>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  CreateConcertInput: CreateConcertInput;
  UpdateConcertInput: UpdateConcertInput;
  ConcertTicket: ResolverTypeWrapper<ConcertTicket>;
  CreateTicketInput: CreateTicketInput;
  UpdateTicketInput: UpdateTicketInput;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars["Upload"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  RootSchema: RootSchema;
  Boolean: Scalars["Boolean"];
  Query: {};
  String: Scalars["String"];
  Mutation: {};
  JSON: Scalars["JSON"];
  User: User;
  ID: Scalars["ID"];
  UserInput: UserInput;
  CreateUserInput: CreateUserInput;
  Concert: Concert;
  Float: Scalars["Float"];
  Int: Scalars["Int"];
  CreateConcertInput: CreateConcertInput;
  UpdateConcertInput: UpdateConcertInput;
  ConcertTicket: ConcertTicket;
  CreateTicketInput: CreateTicketInput;
  UpdateTicketInput: UpdateTicketInput;
  Upload: Scalars["Upload"];
};

export type CacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars["Int"]>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = CacheControlDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RootSchemaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RootSchema"] = ResolversParentTypes["RootSchema"]
> = {
  status?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  getStatus?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["RootSchema"]>>>,
    ParentType,
    ContextType
  >;
  appVersion?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAppVersionArgs, "app">
  >;
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
  userByID?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByIdArgs, "_id">
  >;
  userByEmail?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByEmailArgs, "email">
  >;
  concerts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Concert"]>>>,
    ParentType,
    ContextType
  >;
  concertByID?: Resolver<
    Maybe<ResolversTypes["Concert"]>,
    ParentType,
    ContextType,
    RequireFields<QueryConcertByIdArgs, "_id">
  >;
  tickets?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ConcertTicket"]>>>,
    ParentType,
    ContextType
  >;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  changeStatus?: Resolver<
    Maybe<ResolversTypes["RootSchema"]>,
    ParentType,
    ContextType
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "user">
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, "_id" | "user">
  >;
  createConcert?: Resolver<
    Maybe<ResolversTypes["Concert"]>,
    ParentType,
    ContextType,
    Partial<MutationCreateConcertArgs>
  >;
  purchaseTicket?: Resolver<
    Maybe<ResolversTypes["ConcertTicket"]>,
    ParentType,
    ContextType,
    Partial<MutationPurchaseTicketArgs>
  >;
  updateAttendance?: Resolver<
    Maybe<ResolversTypes["ConcertTicket"]>,
    ParentType,
    ContextType,
    Partial<MutationUpdateAttendanceArgs>
  >;
  createConcertTicket?: Resolver<
    Maybe<ResolversTypes["ConcertTicket"]>,
    ParentType,
    ContextType,
    Partial<MutationCreateConcertTicketArgs>
  >;
  updateConcertTicket?: Resolver<
    Maybe<ResolversTypes["ConcertTicket"]>,
    ParentType,
    ContextType,
    Partial<MutationUpdateConcertTicketArgs>
  >;
};

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["JSON"], any> {
  name: "JSON";
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  wallet_address?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  first_name?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  last_name?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  bio?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  traits?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConcertResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Concert"] = ResolversParentTypes["Concert"]
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  artist?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  base_image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  available_tickets?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  token_id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConcertTicketResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ConcertTicket"] = ResolversParentTypes["ConcertTicket"]
> = {
  _id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  concert_id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  attended?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Upload"], any> {
  name: "Upload";
}

export type Resolvers<ContextType = any> = {
  RootSchema?: RootSchemaResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  Concert?: ConcertResolvers<ContextType>;
  ConcertTicket?: ConcertTicketResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
