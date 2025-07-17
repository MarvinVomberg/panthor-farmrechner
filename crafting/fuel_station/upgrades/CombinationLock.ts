import {CraftItem, CraftMaterial} from "~/types/crafting";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {plasticProduction} from "~/farmroutes/plastic";
import {rubberProduction} from "~/farmroutes/rubber";
import {cableProduction} from "~/farmroutes/cable";
import {doorProduction} from "~/farmroutes/door";

export const CombinationLock = new CraftItem(
    'combination_lock',
    'Tür Zahlenschloss',
    0,
    [
        new CraftMaterial(5, ironBarProduction),
        new CraftMaterial(3, plasticProduction),
        new CraftMaterial(3, rubberProduction),
        new CraftMaterial(6, cableProduction),
        new CraftMaterial(10, doorProduction),
    ]
)