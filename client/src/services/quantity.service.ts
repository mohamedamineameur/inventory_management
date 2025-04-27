import api from "./main.service";

export interface Quantity {
  id: string;
  itemId: string;
  quantity: number;
}

export function quantityService() {
  const getAllQuantities = async () => {
    return await api.get("/quantities");
  };

  const createQuantity = async (quantity: Omit<Quantity, "id">) => {
    return await api.post("/quantities", quantity);
  };

  const updateQuantity = async (
    id: string,
    quantity: Omit<Quantity, "id">
  ) => {
    return await api.patch(`/quantities/${id}`, quantity);
  };

  const deleteQuantity = async (id: string) => {
    return await api.delete(`/quantities/${id}`);
  };

  return {
    getAllQuantities,
    createQuantity,
    updateQuantity,
    deleteQuantity,
  };
}