import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const Lottery = new CraftItem(
    'lottery',
    'Lotterie',
    0,
    [
        new CraftMaterial(2, farmroutes.copper_r),
        new CraftMaterial(7, farmroutes.wood_r),
        new CraftMaterial(5, farmroutes.plastic),
        new CraftMaterial(5, farmroutes.rubber),
        new CraftMaterial(10, farmroutes.cable),
    ]
)