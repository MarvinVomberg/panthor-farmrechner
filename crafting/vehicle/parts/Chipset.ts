import {CraftItem, CraftMaterial} from "~/types/crafting";
import {plasticProduction} from "~/farmroutes/plastic";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {scrapProduction} from "~/farmroutes/scrap";

export const Chipset = new CraftItem(
    'chipset',
    'Chipset',
    8,
    [
        new CraftMaterial(5, plasticProduction),
        new CraftMaterial(4, aluminumBarProduction),
        new CraftMaterial(2, scrapProduction),
    ]
)