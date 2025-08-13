import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const Payphone = new CraftItem(
    'payphone',
    'Telefonhaus',
    0,
    [
        new CraftMaterial(3, farmroutes.aluminum_r),
        new CraftMaterial(3, farmroutes.copper_r),
        new CraftMaterial(5, farmroutes.sand_r),
        new CraftMaterial(5, farmroutes.rubber),
        new CraftMaterial(5, farmroutes.cable),
        new CraftMaterial(3, doorProduction),
        new CraftMaterial(5, windowProduction),
    ]
)