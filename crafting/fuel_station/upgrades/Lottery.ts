import {CraftItem, CraftMaterial} from "~/types/crafting";
import {copperBarProduction} from "~/farmroutes/copper_r";
import {boardsProduction} from "~/farmroutes/wood_r";
import {plasticProduction} from "~/farmroutes/plastic";
import {rubberProduction} from "~/farmroutes/rubber";
import {cableProduction} from "~/farmroutes/cable";

export const Lottery = new CraftItem(
    'lottery',
    'Lotterie',
    0,
    [
        new CraftMaterial(2, copperBarProduction),
        new CraftMaterial(7, boardsProduction),
        new CraftMaterial(5, plasticProduction),
        new CraftMaterial(5, rubberProduction),
        new CraftMaterial(10, cableProduction),
    ]
)