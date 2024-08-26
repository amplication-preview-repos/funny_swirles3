import { Production } from "../production/base/Production";
import { registerEnumType } from "@nestjs/graphql";

export enum UserRole {
    Merchandising = "MERCHANDISING",
    Financial = "FINANCIAL",
    Production = "PRODUCTION"
}

registerEnumType(UserRole, {
    name: "UserRole",
  });