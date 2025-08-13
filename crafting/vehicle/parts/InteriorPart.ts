import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const InteriorPart = new CraftItem(
    'interior_part',
    'Innenraumteil',
    1,
    [
        new CraftMaterial(5, farmroutes.iron_bar),
        new CraftMaterial(8, farmroutes.aluminum_r),
        new CraftMaterial(5, farmroutes.plastic),
        new CraftMaterial(5, farmroutes.rubber),
        new CraftMaterial(5, cottonProduction),
    ]
)