import {CraftItem, CraftMaterial} from "~/types/crafting"
import {farmroutes} from "~/farmroutes";

export const BP_AMS = new CraftItem(
    'bp_ams',
    'US Optics MR-10 [Sand]',
    15,
    [
        new CraftMaterial(3, farmroutes.copper_r),
        new CraftMaterial(10, farmroutes.sand_r),
        new CraftMaterial(4, farmroutes.steel_r),
        new CraftMaterial(4, farmroutes.aluminum_r),
        new CraftMaterial(4, farmroutes.iron_bar),
        new CraftMaterial(4, farmroutes.plastic),
    ]
)