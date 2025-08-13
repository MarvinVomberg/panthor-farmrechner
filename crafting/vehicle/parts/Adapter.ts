import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const Adapter = new CraftItem(
    'adapter',
    'Adapter',
    8,
    [
        new CraftMaterial(7, farmroutes.plastic),
        new CraftMaterial(3, farmroutes.aluminum_r),
    ]
)