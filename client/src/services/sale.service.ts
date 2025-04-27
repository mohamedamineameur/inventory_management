import api from "./main.service";

export interface Sale {
    id: string;
    itemId: string;
    userId: string;
}

export function saleService() {
    const getAllSales = async () => {
        return await api.get("/sales");
    };

    const createSale = async (sale: Omit<Sale, "id">) => {
        return await api.post("/sales", sale);
    };

    const updateSale = async (
        id: string,
        sale: Omit<Sale, "id">
    ) => {
        return await api.patch(`/sales/${id}`, sale);
    };

    const deleteSale = async (id: string) => {
        return await api.delete(`/sales/${id}`);
    };

    return {
        getAllSales,
        createSale,
        updateSale,
        deleteSale,
    };
}