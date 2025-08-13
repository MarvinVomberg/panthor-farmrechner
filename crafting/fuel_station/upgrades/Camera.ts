import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const Camera = new CraftItem(
    'camera',
    'Kamera',
    0,
    [
        new CraftMaterial(4, farmroutes.aluminum_r),
        new CraftMaterial(12, farmroutes.sand_r),
        new CraftMaterial(4, farmroutes.plastic),
        new CraftMaterial(3, farmroutes.rubber),
        new CraftMaterial(12, farmroutes.cable),
    ]
)