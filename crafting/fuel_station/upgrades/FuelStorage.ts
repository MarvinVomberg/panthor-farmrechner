import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const FuelStorage = new CraftItem(
    'fuel_storage',
    'Treibstofflager',
    0,
    [
        new CraftMaterial(2, farmroutes.aluminum_r),
        new CraftMaterial(18, farmroutes.sand_r),
        new CraftMaterial(2, farmroutes.plastic),
        new CraftMaterial(3, farmroutes.rubber),
        new CraftMaterial(5, farmroutes.cable),
    ]
)