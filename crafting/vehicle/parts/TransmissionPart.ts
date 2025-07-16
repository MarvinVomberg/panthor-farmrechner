import {CraftItem, CraftMaterial} from "~/types/crafting";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {oilProduction} from "~/farmroutes/oil_r";
import {chemicalsProduction} from "~/farmroutes/chemicals";

export const TransmissionPart = new CraftItem(
    'transmission_part',
    'Getriebeteil',
    1,
    [
        new CraftMaterial(6, steelBarProduction),
        new CraftMaterial(8, aluminumBarProduction),
        new CraftMaterial(6, oilProduction),
        new CraftMaterial(4, chemicalsProduction),
    ]
)