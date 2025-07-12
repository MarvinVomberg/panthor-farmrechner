import {CraftItem, CraftMaterial} from "~/types/crafting";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {plasticProduction} from "~/farmroutes/plastic";
import {rubberProduction} from "~/farmroutes/rubber";

export const VehicleBodyPart = new CraftItem(
    'vehicle_body_part',
    'Karosserieteil',
    1,
    [
        new CraftMaterial(6, steelBarProduction),
        new CraftMaterial(8, aluminumBarProduction),
        new CraftMaterial(4, plasticProduction),
        new CraftMaterial(3, rubberProduction),
    ]
)