import {CraftItem, CraftMaterial} from "~/types/crafting";
import {chemicalsProduction} from "~/farmroutes/chemicals";
import {rubberProduction} from "~/farmroutes/rubber";
import {glassProduction} from "~/farmroutes/sand_r";

export const VehicleWindow = new CraftItem(
    'vehicle_window',
    'Fahrzeug Scheiben',
    1,
    [
        new CraftMaterial(5, rubberProduction),
        new CraftMaterial(15, glassProduction),
        new CraftMaterial(2, chemicalsProduction),
    ]
)