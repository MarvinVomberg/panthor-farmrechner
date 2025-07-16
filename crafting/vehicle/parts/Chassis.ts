import {CraftItem, CraftMaterial} from "~/types/crafting";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";

export const Chassis = new CraftItem(
    'chassis',
    'Fahrgestell',
    1,
    [
        new CraftMaterial(15, steelBarProduction),
        new CraftMaterial(12, aluminumBarProduction),
    ]
)