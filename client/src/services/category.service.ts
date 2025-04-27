import api from "./main.service";

export interface Category {
    id: string;
    name: string;
}

export function categoryService() {
    const getAllCategories = async () => {
        return await api.get("/categories");
    };

    const createCategory = async (category: Omit<Category, "id">) => {
        return await api.post("/categories", category);
    };

    const updateCategory = async (
        id: string,
        category: Omit<Category, "id">
    ) => {
        return await api.patch(`/categories/${id}`, category);
    };

    const deleteCategory = async (id: string) => {
        return await api.delete(`/categories/${id}`);
    };

    return {
        getAllCategories,
        createCategory,
        updateCategory,
        deleteCategory,
    };
}