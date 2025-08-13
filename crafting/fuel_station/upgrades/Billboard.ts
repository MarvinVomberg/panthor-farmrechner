import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const Billboard = new CraftItem(
    'billboard',
    'Werbeschild',
    0,
    [
        new CraftMaterial(2, farmroutes.aluminum_r),
        new CraftMaterial(3, farmroutes.iron_bar),
        new CraftMaterial(2, farmroutes.steel_r),
        new CraftMaterial(18, farmroutes.sand_r),
        new CraftMaterial(3, farmroutes.cable),
    ]
)