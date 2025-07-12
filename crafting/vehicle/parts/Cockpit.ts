import {CraftItem, CraftMaterial} from "~/types/crafting";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {tissueProduction} from "~/farmroutes/tissue";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {glassProduction} from "~/farmroutes/sand_r";
import {cottonProduction} from "~/farmroutes/cotton";
import {leatherProduction} from "~/farmroutes/leather";

export const Cockpit = new CraftItem(
    'cockpit',
    'Cockpit',
    1,
    [
        new CraftMaterial(5, ironBarProduction),
        new CraftMaterial(5, steelBarProduction),
        new CraftMaterial(5, aluminumBarProduction),
        new CraftMaterial(5, tissueProduction),
        new CraftMaterial(5, glassProduction),
        new CraftMaterial(5, cottonProduction),
        new CraftMaterial(5, leatherProduction),
    ]
)