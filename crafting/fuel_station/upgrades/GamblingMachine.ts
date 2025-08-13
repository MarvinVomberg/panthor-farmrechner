import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const GamblingMachine = new CraftItem(
    'gambling_machine',
    'Glückspielautomat',
    0,
    [
        new CraftMaterial(6, farmroutes.wood_r),
        new CraftMaterial(2, farmroutes.plastic),
        new CraftMaterial(3, farmroutes.rubber),
        new CraftMaterial(2, farmroutes.cable),
        new CraftMaterial(3, doorProduction),
        new CraftMaterial(2, windowProduction),
    ]
)