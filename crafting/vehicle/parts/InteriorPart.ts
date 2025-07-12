import {CraftItem, CraftMaterial} from "~/types/crafting";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {plasticProduction} from "~/farmroutes/plastic";
import {rubberProduction} from "~/farmroutes/rubber";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {cottonProduction} from "~/farmroutes/cotton";

export const InteriorPart = new CraftItem(
    'interior_part',
    'Innenraumteil',
    1,
    [
        new CraftMaterial(5, ironBarProduction),
        new CraftMaterial(8, aluminumBarProduction),
        new CraftMaterial(5, plasticProduction),
        new CraftMaterial(5, rubberProduction),
        new CraftMaterial(5, cottonProduction),
    ]
)