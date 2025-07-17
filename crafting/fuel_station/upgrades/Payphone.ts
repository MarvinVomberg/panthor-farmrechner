import {CraftItem, CraftMaterial} from "~/types/crafting";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {copperBarProduction} from "~/farmroutes/copper_r";
import {glassProduction} from "~/farmroutes/sand_r";
import {rubberProduction} from "~/farmroutes/rubber";
import {cableProduction} from "~/farmroutes/cable";
import {doorProduction} from "~/farmroutes/door";
import {windowProduction} from "~/farmroutes/window";

export const Payphone = new CraftItem(
    'payphone',
    'Telefonhaus',
    0,
    [
        new CraftMaterial(3, aluminumBarProduction),
        new CraftMaterial(3, copperBarProduction),
        new CraftMaterial(5, glassProduction),
        new CraftMaterial(5, rubberProduction),
        new CraftMaterial(5, cableProduction),
        new CraftMaterial(3, doorProduction),
        new CraftMaterial(5, windowProduction),
    ]
)