import {CraftItem, CraftMaterial} from "~/types/crafting";
import {rubberProduction} from "~/farmroutes/rubber";
import {tissueProduction} from "~/farmroutes/tissue";

export const Tyre = new CraftItem(
    'tyre',
    'Reifen',
    1,
    [
        new CraftMaterial(5, rubberProduction),
        new CraftMaterial(5, tissueProduction),
    ]
)