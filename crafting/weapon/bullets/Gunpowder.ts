import {CraftItem, CraftMaterial} from "~/types/crafting"
import {charcoalProduction} from "~/farmroutes/charcoal";

export const Gunpowder = new CraftItem(
    'gunpowder',
    'Schwarzpulver',
    10,
    [
        new CraftMaterial(1, charcoalProduction),
    ]
)