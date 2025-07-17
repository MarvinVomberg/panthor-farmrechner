import {CraftItem, CraftMaterial} from "~/types/crafting";
import {boardsProduction} from "~/farmroutes/wood_r";
import {plasticProduction} from "~/farmroutes/plastic";
import {rubberProduction} from "~/farmroutes/rubber";
import {cableProduction} from "~/farmroutes/cable";
import {doorProduction} from "~/farmroutes/door";
import {windowProduction} from "~/farmroutes/window";

export const GamblingMachine = new CraftItem(
    'gambling_machine',
    'Glückspielautomat',
    0,
    [
        new CraftMaterial(6, boardsProduction),
        new CraftMaterial(2, plasticProduction),
        new CraftMaterial(3, rubberProduction),
        new CraftMaterial(2, cableProduction),
        new CraftMaterial(3, doorProduction),
        new CraftMaterial(2, windowProduction),
    ]
)