import {CraftItem, CraftMaterial} from "~/types/crafting";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {glassProduction} from "~/farmroutes/sand_r";
import {plasticProduction} from "~/farmroutes/plastic";
import {rubberProduction} from "~/farmroutes/rubber";
import {cableProduction} from "~/farmroutes/cable";

export const FuelStorage = new CraftItem(
    'fuel_storage',
    'Treibstofflager',
    0,
    [
        new CraftMaterial(2, aluminumBarProduction),
        new CraftMaterial(18, glassProduction),
        new CraftMaterial(2, plasticProduction),
        new CraftMaterial(3, rubberProduction),
        new CraftMaterial(5, cableProduction),
    ]
)