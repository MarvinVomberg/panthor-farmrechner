import {CraftItem, CraftMaterial} from "~/types/crafting"
import {plasticProduction} from "~/farmroutes/plastic";

export const HandGuard = new CraftItem(
    'hand_guard',
    'Waffenhandschutz',
    10,
    [
        new CraftMaterial(2, plasticProduction),
    ]
)