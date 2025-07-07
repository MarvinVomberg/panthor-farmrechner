import {CraftItem, CraftMaterial} from "~/types/crafting";
import {plasticProduction} from "~/farmroutes/plastic";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";

export const Adapter = new CraftItem(
    'adapter',
    'Adapter',
    8,
    [
        new CraftMaterial(7, plasticProduction),
        new CraftMaterial(3, aluminumBarProduction),
    ]
)