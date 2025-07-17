import {CraftItem, CraftMaterial} from "~/types/crafting";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {plasticProduction} from "~/farmroutes/plastic";
import {rubberProduction} from "~/farmroutes/rubber";
import {cableProduction} from "~/farmroutes/cable";

export const AirCompressor = new CraftItem(
    'air_compressor',
    'Luftkompressor',
    0,
    [
        new CraftMaterial(4, ironBarProduction),
        new CraftMaterial(5, steelBarProduction),
        new CraftMaterial(3, plasticProduction),
        new CraftMaterial(5, rubberProduction),
        new CraftMaterial(11, cableProduction),
    ]
)