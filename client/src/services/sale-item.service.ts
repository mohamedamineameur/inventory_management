import api from "./main.service";

export interface SaleItem {
    id: string;
    saleId: string;
    itemId: string;
    quantity: number;
}

export function saleItemService() {
    const getAllSaleItems = async () => {
        return await api.get("/sale-items");
    };

    const createSaleItem = async (saleItem: Omit<SaleItem, "id">) => {
        return await api.post("/sale-items", saleItem);
    };

    const updateSaleItem = async (
        id: string,
        saleItem: Omit<SaleItem, "id">
    ) => {
        return await api.patch(`/sale-items/${id}`, saleItem);
    };

    const deleteSaleItem = async (id: string) => {
        return await api.delete(`/sale-items/${id}`);
    };

    return {
        getAllSaleItems,
        createSaleItem,
        updateSaleItem,
        deleteSaleItem,
    };
}