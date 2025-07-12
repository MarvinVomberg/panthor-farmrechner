import {CraftItem, CraftMaterial} from "~/types/crafting";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {tissueProduction} from "~/farmroutes/tissue";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {copperBarProduction} from "~/farmroutes/copper_r";

export const TailBoom = new CraftItem(
    'tailboom',
    'Leitwerksträger',
    1,
    [
        new CraftMaterial(10, ironBarProduction),
        new CraftMaterial(5, steelBarProduction),
        new CraftMaterial(10, copperBarProduction),
        new CraftMaterial(5, tissueProduction),
    ]
)