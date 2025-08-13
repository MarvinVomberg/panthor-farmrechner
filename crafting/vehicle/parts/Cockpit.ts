import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const Cockpit = new CraftItem(
    'cockpit',
    'Cockpit',
    1,
    [
        new CraftMaterial(5, farmroutes.iron_bar),
        new CraftMaterial(5, farmroutes.steel_r),
        new CraftMaterial(5, farmroutes.aluminum_r),
        new CraftMaterial(5, farmroutes.tissue),
        new CraftMaterial(5, farmroutes.sand_r),
        new CraftMaterial(5, cottonProduction),
        new CraftMaterial(5, leatherProduction),
    ]
)