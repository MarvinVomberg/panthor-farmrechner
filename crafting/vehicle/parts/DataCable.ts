import {CraftItem, CraftMaterial} from "~/types/crafting";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {copperBarProduction} from "~/farmroutes/copper_r";

export const DataCable = new CraftItem(
    'data_cable',
    'Datenkabel',
    8,
    [
        new CraftMaterial(6, ironBarProduction),
        new CraftMaterial(8, copperBarProduction)
    ]
)