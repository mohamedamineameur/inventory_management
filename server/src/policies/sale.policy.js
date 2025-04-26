import { requireRole } from "./policy.js";

export const salePolicy = {
    create: () => requireRole("all"),
    get: () => requireRole("all"),
    update: () => requireRole("management"),
    deleteUser: () => requireRole("management")
  };
  