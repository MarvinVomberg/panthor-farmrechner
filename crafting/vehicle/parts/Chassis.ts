import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const Chassis = new CraftItem(
    'chassis',
    'Fahrgestell',
    1,
    [
        new CraftMaterial(15, farmroutes.steel_r),
        new CraftMaterial(12, farmroutes.aluminum_r),
    ]
)