import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const AirCompressor = new CraftItem(
    'air_compressor',
    'Luftkompressor',
    0,
    [
        new CraftMaterial(4, farmroutes.iron_bar),
        new CraftMaterial(5, farmroutes.steel_r),
        new CraftMaterial(3, farmroutes.plastic),
        new CraftMaterial(5, farmroutes.rubber),
        new CraftMaterial(11, farmroutes.cable),
    ]
)