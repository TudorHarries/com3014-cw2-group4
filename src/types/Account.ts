import { Permission } from "./Permission";

export type Account = {
  givenName: string;
  surname: string;
  hashedPassword: string;
  permissions: Array<Permission>;
};
