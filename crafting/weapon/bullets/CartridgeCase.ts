import {CraftItem, CraftMaterial} from "~/types/crafting"
import {copperBarProduction} from "~/farmroutes/copper_r";

export const CartridgeCase = new CraftItem(
    'cartridge_case',
    'Patronenhülse',
    10,
    [
        new CraftMaterial(1, copperBarProduction),
    ]
)