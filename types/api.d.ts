import _default from "@speed-highlight/core/common";
import num = _default.num;

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

export interface PlayerVehicle {
    "id": number,
    "pid": string,
    "side": string,
    "classname": string,
    "type": string,
    "plate": string,
    "active": boolean,
    "impound": boolean,
    "alarm": boolean,
    "disabled": boolean,
    "color": string,
    "inventory": string,
    "gear": string,
    "fuel": string,
    "fuelcargo": -1,
    "tuning_color": string,
    "tuning_array": string,
    "tuning_perm": boolean,
    "hitpoints": string,
    "kilometer": number,
    "kilometer_total": number,
    "lastgarage": string,
    "alive": boolean,
    "insurance": boolean,
    "companyid": number,
    "companytype": string,
    "updated_at": string,
    "created_at": string,
    "vehicle_data": Vehicle,
    "export_vehicles": Vehicle[],
}

export interface PlayerVehiclesResponse {
    data: PlayerVehicle[],
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

export interface MarketItemLog {
    id: number,
    item: string,
    price: number,
    server_id: number,
    created_at: string,
}

interface MarketItemLogData {
    [key: number]: MarketItemLog[],
}

export interface MarketItemLogsResponse {
    data: MarketItemLogData,
    requested_at: number,
}