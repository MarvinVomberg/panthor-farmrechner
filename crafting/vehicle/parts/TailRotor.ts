import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const TailRotor = new CraftItem(
    'tailrotor',
    'Heckrotor',
    1,
    [
        new CraftMaterial(15, farmroutes.iron_bar),
        new CraftMaterial(10, farmroutes.steel_r),
        new CraftMaterial(5, farmroutes.rubber),
    ]
)