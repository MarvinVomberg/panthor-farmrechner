import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const Tyre = new CraftItem(
    'tyre',
    'Reifen',
    1,
    [
        new CraftMaterial(5, farmroutes.rubber),
        new CraftMaterial(5, farmroutes.tissue),
    ]
)