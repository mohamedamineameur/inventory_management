import { requireRole } from "./policy";

export const itemPolicy = {
    create: () => requireRole("management"),
    get: () => requireRole("management"),
    update: () => requireRole("management"),
    deleteUser: () => requireRole("management")
  };
  