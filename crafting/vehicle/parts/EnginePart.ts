import {CraftItem, CraftMaterial} from "~/types/crafting";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {oilProduction} from "~/farmroutes/oil_r";

export const EnginePart = new CraftItem(
    'engine_part',
    'Motorenteil',
    1,
    [
        new CraftMaterial(12, ironBarProduction),
        new CraftMaterial(5, steelBarProduction),
        new CraftMaterial(8, aluminumBarProduction),
        new CraftMaterial(5, oilProduction),
    ]
)