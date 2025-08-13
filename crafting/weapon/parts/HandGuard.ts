import {CraftItem, CraftMaterial} from "~/types/crafting"
import {farmroutes} from "~/farmroutes";

export const HandGuard = new CraftItem(
    'hand_guard',
    'Waffenhandschutz',
    10,
    [
        new CraftMaterial(2, farmroutes.plastic),
    ]
)