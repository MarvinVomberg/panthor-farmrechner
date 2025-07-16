import {CraftItem, CraftMaterial} from "~/types/crafting";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {glassProduction} from "~/farmroutes/sand_r";
import {cableProduction} from "~/farmroutes/cable";
import {doorProduction} from "~/farmroutes/door";

export const AttendantProtection = new CraftItem(
    'attendant_protection',
    'Tankstellenwärter Schutz',
    0,
    [
        new CraftMaterial(5, ironBarProduction),
        new CraftMaterial(6, steelBarProduction),
        new CraftMaterial(5, glassProduction),
        new CraftMaterial(7, cableProduction),
        new CraftMaterial(8, doorProduction),
    ]
)