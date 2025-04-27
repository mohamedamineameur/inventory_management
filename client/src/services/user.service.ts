import api from "./main.service";

export interface User {
    id: string;
  username: string;
  password: string;
  role: ["admin" | "user" | "management"];
}

export function userService() {
  const getAllUsers = async () => {
    return await api.get("/users");
  };

  const createUser = async (user: Omit<User,"id">) => {
    return await api.post("/users", user);
  };

  const updateUser = async (
    id: string,
    user: Omit<User, "password" | "username" | "role"| "id">
  ) => {
    return await api.patch(`/users/${id}`, user);
  };

  const deleteUser = async (id: string) => {
    return await api.delete(`/users/${id}`);
  };

  const login = async (username: string, password: string) => {
    return await api.post("/users/login", { username, password });
  };
  const logout = async () => {
    return await api.post("/users/logout");
  };
  const me = async () => {
    return await api.get("/users/me");
  };

  return {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    login,
    logout,
    me,
  };
}
