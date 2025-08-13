import {CraftItem, CraftMaterial} from "~/types/crafting"
import {farmroutes} from "~/farmroutes";

export const Barrel = new CraftItem(
    'barrel',
    'Waffenlauf',
    10,
    [
        new CraftMaterial(3, farmroutes.iron_bar),
        new CraftMaterial(1, farmroutes.steel_r),
    ]
)