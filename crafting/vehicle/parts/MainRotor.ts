import {CraftItem, CraftMaterial} from "~/types/crafting";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {rubberProduction} from "~/farmroutes/rubber";

export const MainRotor = new CraftItem(
    'main_rotor',
    'Mainrotor',
    1,
    [
        new CraftMaterial(15, steelBarProduction),
        new CraftMaterial(5, rubberProduction),
    ]
)