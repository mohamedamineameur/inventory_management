import api from "./main.service";

export interface Item {
    id: string;
    name: string;
    description: string;
    price: number;
    categoryId: string;
    
}

export function itemService() {
    const getAllItems = async () => {
        return await api.get("/items");
    };

    const createItem = async (item: Omit<Item, "id">) => {
        return await api.post("/items", item);
    };

    const updateItem = async (
        id: string,
        item: Omit<Item, "id"| "file" | "categoryId" | "description" | "name" | "price"> 
    ) => {
        return await api.patch(`/items/${id}`, item);
    };

    const deleteItem = async (id: string) => {
        return await api.delete(`/items/${id}`);
    };

    return {
        getAllItems,
        createItem,
        updateItem,
        deleteItem,
    };
}