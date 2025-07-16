import {CraftItem, CraftMaterial} from "~/types/crafting";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {rubberProduction} from "~/farmroutes/rubber";
import {ironBarProduction} from "~/farmroutes/iron_bar";

export const TailRotor = new CraftItem(
    'tailrotor',
    'Heckrotor',
    1,
    [
        new CraftMaterial(15, ironBarProduction),
        new CraftMaterial(10, steelBarProduction),
        new CraftMaterial(5, rubberProduction),
    ]
)