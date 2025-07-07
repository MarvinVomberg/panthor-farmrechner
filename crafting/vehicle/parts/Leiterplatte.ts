import {CraftItem, CraftMaterial} from "~/types/crafting";
import {plasticProduction} from "~/farmroutes/plastic";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {copperBarProduction} from "~/farmroutes/copper_r";

export const Leiterplatte = new CraftItem(
    'leiterplatte',
    'Leiterplatte',
    8,
    [
        new CraftMaterial(5, plasticProduction),
        new CraftMaterial(6, aluminumBarProduction),
        new CraftMaterial(3, copperBarProduction),
    ]
)