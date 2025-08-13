import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const AttendantProtection = new CraftItem(
    'attendant_protection',
    'Tankstellenwärter Schutz',
    0,
    [
        new CraftMaterial(5, farmroutes.iron_bar),
        new CraftMaterial(6, farmroutes.steel_r),
        new CraftMaterial(5, farmroutes.sand_r),
        new CraftMaterial(7, farmroutes.cable),
        new CraftMaterial(8, doorProduction),
    ]
)