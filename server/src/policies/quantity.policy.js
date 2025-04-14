import { requireRole } from "./policy";

export const quantityPolicy = {
    create: () => requireRole("management"),
    get: () => requireRole("management"),
    update: () => requireRole("management"),
    deleteUser: () => requireRole("management")
  };
  