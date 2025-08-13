import {CraftItem, CraftMaterial} from "~/types/crafting"
import {farmroutes} from "~/farmroutes";

export const Gunpowder = new CraftItem(
    'gunpowder',
    'Schwarzpulver',
    10,
    [
        new CraftMaterial(1, farmroutes.charcoal),
    ]
)