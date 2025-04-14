import { requireRole } from "./policy";

export const saleItemPolicy = {
    create: () => requireRole("all"),
    get: () => requireRole("management"),
    update: () => requireRole("management"),
    deleteUser: () => requireRole("management")
  };
  