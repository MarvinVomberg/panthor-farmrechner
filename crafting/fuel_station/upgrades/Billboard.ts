import {CraftItem, CraftMaterial} from "~/types/crafting";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {glassProduction} from "~/farmroutes/sand_r";
import {cableProduction} from "~/farmroutes/cable";

export const Billboard = new CraftItem(
    'billboard',
    'Werbeschild',
    0,
    [
        new CraftMaterial(2, aluminumBarProduction),
        new CraftMaterial(3, ironBarProduction),
        new CraftMaterial(2, steelBarProduction),
        new CraftMaterial(18, glassProduction),
        new CraftMaterial(3, cableProduction),
    ]
)