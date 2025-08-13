import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const ATM = new CraftItem(
    'atm',
    'Geldautomat',
    0,
    [
        new CraftMaterial(2, farmroutes.copper_r),
        new CraftMaterial(7, farmroutes.iron_bar),
        new CraftMaterial(4, farmroutes.plastic),
        new CraftMaterial(2, farmroutes.rubber),
        new CraftMaterial(11, farmroutes.cable),
        new CraftMaterial(2, windowProduction),
    ]
)