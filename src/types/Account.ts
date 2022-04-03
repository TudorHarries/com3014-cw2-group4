import { Permission } from "./Permission";

export type Account = {
  givenName: string;
  surname: string;
  email: string;
  hashedPassword: string;
  permissions: Array<Permission>;
};
