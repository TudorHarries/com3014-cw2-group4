import { Permission } from "./Permission";

export type Account = {
  givenName: string;
  surname: string;
  email: string;
  password: string;
  permissions: Array<Permission>;
};
