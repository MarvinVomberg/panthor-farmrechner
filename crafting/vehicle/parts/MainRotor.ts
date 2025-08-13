import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const MainRotor = new CraftItem(
    'main_rotor',
    'Mainrotor',
    1,
    [
        new CraftMaterial(15, farmroutes.steel_r),
        new CraftMaterial(5, farmroutes.rubber),
    ]
)