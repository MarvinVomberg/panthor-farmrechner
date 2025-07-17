import {CraftItem, CraftMaterial} from "~/types/crafting";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {glassProduction} from "~/farmroutes/sand_r";
import {plasticProduction} from "~/farmroutes/plastic";
import {rubberProduction} from "~/farmroutes/rubber";
import {cableProduction} from "~/farmroutes/cable";

export const Camera = new CraftItem(
    'camera',
    'Kamera',
    0,
    [
        new CraftMaterial(4, aluminumBarProduction),
        new CraftMaterial(12, glassProduction),
        new CraftMaterial(4, plasticProduction),
        new CraftMaterial(3, rubberProduction),
        new CraftMaterial(12, cableProduction),
    ]
)