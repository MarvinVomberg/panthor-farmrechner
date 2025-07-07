import {CraftItem, CraftMaterial} from "~/types/crafting";
import {plasticProduction} from "~/farmroutes/plastic";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {scrapProduction} from "~/farmroutes/scrap";

const materials = [
    new CraftMaterial(8, plasticProduction),
    new CraftMaterial(5, aluminumBarProduction),
    new CraftMaterial(7, ironBarProduction),
    new CraftMaterial(5, scrapProduction)
];

export const CircuitBoard = new CraftItem(
    'circuit_board',
    'Platine',
    8,
    materials
)