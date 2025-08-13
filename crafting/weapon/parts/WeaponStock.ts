import {CraftItem, CraftMaterial} from "~/types/crafting"
import {farmroutes} from "~/farmroutes";

export const WeaponStock = new CraftItem(
    'weapon_stock',
    'Waffenschaft',
    10,
    [
        new CraftMaterial(2, farmroutes.steel_r),
        new CraftMaterial(2, farmroutes.plastic)
    ]
)