import {CraftItem, CraftMaterial} from "~/types/crafting";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {plasticProduction} from "~/farmroutes/plastic";
import {rubberProduction} from "~/farmroutes/rubber";
import {cableProduction} from "~/farmroutes/cable";
import {doorProduction} from "~/farmroutes/door";
import {windowProduction} from "~/farmroutes/window";

export const AlarmSystem = new CraftItem(
    'alarm_system',
    'Alarmsystem',
    0,
    [
        new CraftMaterial(6, ironBarProduction),
        new CraftMaterial(3, steelBarProduction),
        new CraftMaterial(4, plasticProduction),
        new CraftMaterial(3, rubberProduction),
        new CraftMaterial(8, cableProduction),
        new CraftMaterial(3, doorProduction),
        new CraftMaterial(5, windowProduction),
    ]
)