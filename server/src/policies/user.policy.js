import { requireRole } from "./policy.js";

export const userPolicy = {
    create: () => requireRole("admin"),
    get: () => requireRole("admin"),
    update: () => requireRole("admin"),
    deleteUser: () => requireRole("admin")
  };
  