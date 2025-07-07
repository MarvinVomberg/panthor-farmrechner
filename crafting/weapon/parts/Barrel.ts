import {CraftItem, CraftMaterial} from "~/types/crafting"
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {steelBarProduction} from "~/farmroutes/steel_r";

export const Barrel = new CraftItem(
    'barrel',
    'Waffenlauf',
    10,
    [
        new CraftMaterial(3, ironBarProduction),
        new CraftMaterial(1, steelBarProduction),
    ]
)