import {CraftItem, CraftMaterial} from "~/types/crafting";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {plasticProduction} from "~/farmroutes/plastic";
import {rubberProduction} from "~/farmroutes/rubber";
import {glassProduction} from "~/farmroutes/sand_r";
import {cottonProduction} from "~/farmroutes/cotton";
import {leatherProduction} from "~/farmroutes/leather";
import {copperBarProduction} from "~/farmroutes/copper_r";

export const Passengerroom = new CraftItem(
    'passengerroom',
    'Passagierraum',
    1,
    [
        new CraftMaterial(5, steelBarProduction),
        new CraftMaterial(5, copperBarProduction),
        new CraftMaterial(5, plasticProduction),
        new CraftMaterial(5, rubberProduction),
        new CraftMaterial(3, glassProduction),
        new CraftMaterial(10, cottonProduction),
        new CraftMaterial(5, leatherProduction),
    ]
)