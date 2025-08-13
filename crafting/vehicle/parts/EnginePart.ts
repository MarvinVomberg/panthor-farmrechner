import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const EnginePart = new CraftItem(
    'engine_part',
    'Motorenteil',
    1,
    [
        new CraftMaterial(12, farmroutes.iron_bar),
        new CraftMaterial(5, farmroutes.steel_r),
        new CraftMaterial(8, farmroutes.aluminum_r),
        new CraftMaterial(5, farmroutes.oil_r),
    ]
)