export interface VehicleShopType {
    shoptype: string,
    shopname: string
}

export interface VehicleShopTypesResponse {
    data: VehicleShopType[],
    requested_at: number,
}

export interface Vehicle {
    id: number,
    classname: string,
    name: string
    price: number,
    level: number,
    v_space: number,
    shoptype: string,
    shopname: string,
    type: string,
}

export interface VehicleResponse {
    data: Vehicle[],
    requested_at: number,
}

export interface MarketItem {
    item: string,
    price: number,
    server: number,
    updated_at: string,
    created_at: string,
    localized: string,
    export_virt_item?: MarketItemExportVirtItem
}

export interface MarketItemExportVirtItem {
    item: string,
    name: string,
    sellPrice: number,
    buyPrice: number,
    illegal: number,
    exp: number,
    weight: number,
    market: number,
    icon: string
}

export interface MarketItemResponse {
    data: MarketItem[],
    requested_at: number,
}