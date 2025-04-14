import { requireRole } from "./policy.js";

export const categoryPolicy = {
    create: () => requireRole("management"),
    get: () => requireRole("management"),
    update: () => requireRole("management"),
    deleteUser: () => requireRole("management")
  };
  