import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

const materials = [
    new CraftMaterial(8, farmroutes.plastic),
    new CraftMaterial(5, farmroutes.aluminum_r),
    new CraftMaterial(7, farmroutes.iron_bar),
    new CraftMaterial(5, farmroutes.scrap)
];

export const CircuitBoard = new CraftItem(
    'circuit_board',
    'Platine',
    8,
    materials
)