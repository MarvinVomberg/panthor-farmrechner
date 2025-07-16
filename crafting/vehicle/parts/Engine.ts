import {CraftItem, CraftMaterial} from "~/types/crafting";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {rubberProduction} from "~/farmroutes/rubber";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {copperBarProduction} from "~/farmroutes/copper_r";

export const Engine = new CraftItem(
    'engine',
    'Motor',
    1,
    [
        new CraftMaterial(10, ironBarProduction),
        new CraftMaterial(5, copperBarProduction),
        new CraftMaterial(20, aluminumBarProduction),
        new CraftMaterial(5, rubberProduction),
    ]
)