import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const DataCable = new CraftItem(
    'data_cable',
    'Datenkabel',
    8,
    [
        new CraftMaterial(6, farmroutes.iron_bar),
        new CraftMaterial(8, farmroutes.copper_r)
    ]
)