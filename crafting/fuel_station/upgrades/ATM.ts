import {CraftItem, CraftMaterial} from "~/types/crafting";
import {copperBarProduction} from "~/farmroutes/copper_r";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {plasticProduction} from "~/farmroutes/plastic";
import {rubberProduction} from "~/farmroutes/rubber";
import {cableProduction} from "~/farmroutes/cable";
import {windowProduction} from "~/farmroutes/window";

export const ATM = new CraftItem(
    'atm',
    'Geldautomat',
    0,
    [
        new CraftMaterial(2, copperBarProduction),
        new CraftMaterial(7, ironBarProduction),
        new CraftMaterial(4, plasticProduction),
        new CraftMaterial(2, rubberProduction),
        new CraftMaterial(11, cableProduction),
        new CraftMaterial(2, windowProduction),
    ]
)