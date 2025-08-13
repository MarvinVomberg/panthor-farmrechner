import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const Passengerroom = new CraftItem(
    'passengerroom',
    'Passagierraum',
    1,
    [
        new CraftMaterial(5, farmroutes.steel_r),
        new CraftMaterial(5, farmroutes.copper_r),
        new CraftMaterial(5, farmroutes.plastic),
        new CraftMaterial(5, farmroutes.rubber),
        new CraftMaterial(3, farmroutes.sand_r),
        new CraftMaterial(10, cottonProduction),
        new CraftMaterial(5, leatherProduction),
    ]
)