import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const AlarmSystem = new CraftItem(
    'alarm_system',
    'Alarmsystem',
    0,
    [
        new CraftMaterial(6, farmroutes.iron_bar),
        new CraftMaterial(3, farmroutes.steel_r),
        new CraftMaterial(4, farmroutes.plastic),
        new CraftMaterial(3, farmroutes.rubber),
        new CraftMaterial(8, farmroutes.cable),
        new CraftMaterial(3, doorProduction),
        new CraftMaterial(5, windowProduction),
    ]
)