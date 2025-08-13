import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const VehicleWindow = new CraftItem(
    'vehicle_window',
    'Fahrzeug Scheiben',
    1,
    [
        new CraftMaterial(5, farmroutes.rubber),
        new CraftMaterial(15, farmroutes.sand_r),
        new CraftMaterial(2, farmroutes.chemicals),
    ]
)