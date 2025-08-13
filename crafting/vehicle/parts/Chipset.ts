import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const Chipset = new CraftItem(
    'chipset',
    'Chipset',
    8,
    [
        new CraftMaterial(5, farmroutes.plastic),
        new CraftMaterial(4, farmroutes.aluminum_r),
        new CraftMaterial(2, farmroutes.scrap),
    ]
)