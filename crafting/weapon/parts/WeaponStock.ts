import {CraftItem, CraftMaterial} from "~/types/crafting"
import {plasticProduction} from "~/farmroutes/plastic";
import {steelBarProduction} from "~/farmroutes/steel_r";

export const WeaponStock = new CraftItem(
    'weapon_stock',
    'Waffenschaft',
    10,
    [
        new CraftMaterial(2, steelBarProduction),
        new CraftMaterial(2, plasticProduction)
    ]
)