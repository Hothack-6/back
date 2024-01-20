import jwt from "jsonwebtoken";

import { Maybe, User, UserRoles } from "../generated/graphql";
import config from "../lib/config";

type SignTokenPayload = {
  roles: Maybe<UserRoles>[];
  userID: string;
  scopes?: User["type"];
  _default_team_id?: string;
};

export function signToken({
  roles,
  userID,
  _default_team_id,
  scopes,
}: SignTokenPayload): string {
  return jwt.sign(
    {
      roles,
      user_id: userID,
      _default_team_id,
      scopes,
    },
    config.ACCESS_TOKEN_SECRET
  );
}

export function parseToken(token: Maybe<string> = null): jwt.JwtPayload | null {
  // This should be fixed on the client side, the token should never really be sent as a string null
  if (!token || token === "null") {
    return null;
  }

  try {
    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET!);

    if (!decoded) {
      throw new Error("getUserIdFromAuthToken: invalid token");
    }

    return decoded as jwt.JwtPayload;
  } catch (error: any) {
    // console.error(`getUserIdFromAuthToken: ${err.message}`);
  }
  return null;
}
