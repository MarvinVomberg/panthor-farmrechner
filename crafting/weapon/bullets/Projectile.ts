import {CraftItem, CraftMaterial} from "~/types/crafting"
import {farmroutes} from "~/farmroutes";

export const Projectile = new CraftItem(
    'projectile',
    'Projektil',
    10,
    [
        new CraftMaterial(1, farmroutes.iron_bar),
    ]
)