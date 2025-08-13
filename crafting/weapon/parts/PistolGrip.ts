import {CraftItem, CraftMaterial} from "~/types/crafting"
import {farmroutes} from "~/farmroutes";

export const PistolGrip = new CraftItem(
    'pistol_grip',
    'Pistolengriff',
    10,
    [
        new CraftMaterial(3, farmroutes.aluminum_r),
        new CraftMaterial(1, farmroutes.plastic),
    ]
)