import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const Leiterplatte = new CraftItem(
    'leiterplatte',
    'Leiterplatte',
    8,
    [
        new CraftMaterial(5, farmroutes.plastic),
        new CraftMaterial(6, farmroutes.aluminum_r),
        new CraftMaterial(3, farmroutes.copper_r),
    ]
)