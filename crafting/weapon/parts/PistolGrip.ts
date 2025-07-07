import {CraftItem, CraftMaterial} from "~/types/crafting"
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {plasticProduction} from "~/farmroutes/plastic";

export const PistolGrip = new CraftItem(
    'pistol_grip',
    'Pistolengriff',
    10,
    [
        new CraftMaterial(3, aluminumBarProduction),
        new CraftMaterial(1, plasticProduction),
    ]
)