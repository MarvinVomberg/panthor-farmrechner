import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const Engine = new CraftItem(
    'engine',
    'Motor',
    1,
    [
        new CraftMaterial(10, farmroutes.iron_bar),
        new CraftMaterial(5, farmroutes.copper_r),
        new CraftMaterial(20, farmroutes.aluminum_r),
        new CraftMaterial(5, farmroutes.rubber),
    ]
)