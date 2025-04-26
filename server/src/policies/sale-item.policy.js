import { requireRole } from "./policy.js";

export const saleItemPolicy = {
    create: () => requireRole("all"),
    get: () => requireRole("all"),
    update: () => requireRole("management"),
    deleteUser: () => requireRole("management")
  };
  