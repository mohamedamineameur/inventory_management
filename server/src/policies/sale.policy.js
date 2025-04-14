import { requireRole } from "./policy.js";

export const salePolicy = {
    create: () => requireRole("all"),
    get: () => requireRole("management"),
    update: () => requireRole("management"),
    deleteUser: () => requireRole("management")
  };
  