import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const TailBoom = new CraftItem(
    'tailboom',
    'Leitwerksträger',
    1,
    [
        new CraftMaterial(10, farmroutes.iron_bar),
        new CraftMaterial(5, farmroutes.steel_r),
        new CraftMaterial(10, farmroutes.copper_r),
        new CraftMaterial(5, farmroutes.tissue),
    ]
)