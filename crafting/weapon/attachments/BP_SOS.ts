import {CraftItem, CraftMaterial} from "~/types/crafting"
import {copperBarProduction} from "~/farmroutes/copper_r";
import {glassProduction} from "~/farmroutes/sand_r";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {plasticProduction} from "~/farmroutes/plastic";

export const BP_SOS = new CraftItem(
    'bp_sos',
    'MOS',
    20,
    [
        new CraftMaterial(3, copperBarProduction),
        new CraftMaterial(10, glassProduction),
        new CraftMaterial(4, steelBarProduction),
        new CraftMaterial(4, aluminumBarProduction),
        new CraftMaterial(4, ironBarProduction),
        new CraftMaterial(4, plasticProduction),
    ]
)