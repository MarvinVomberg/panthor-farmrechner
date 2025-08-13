import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const CombinationLock = new CraftItem(
    'combination_lock',
    'Tür Zahlenschloss',
    0,
    [
        new CraftMaterial(5, farmroutes.iron_bar),
        new CraftMaterial(3, farmroutes.plastic),
        new CraftMaterial(3, farmroutes.rubber),
        new CraftMaterial(6, farmroutes.cable),
        new CraftMaterial(10, doorProduction),
    ]
)