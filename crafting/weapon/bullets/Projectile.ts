import {CraftItem, CraftMaterial} from "~/types/crafting"
import {ironBarProduction} from "~/farmroutes/iron_bar";

export const Projectile = new CraftItem(
    'projectile',
    'Projektil',
    10,
    [
        new CraftMaterial(1, ironBarProduction),
    ]
)