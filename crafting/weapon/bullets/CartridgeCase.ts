import {CraftItem, CraftMaterial} from "~/types/crafting"
import {farmroutes} from "~/farmroutes";

export const CartridgeCase = new CraftItem(
    'cartridge_case',
    'Patronenhülse',
    10,
    [
        new CraftMaterial(1, farmroutes.copper_r),
    ]
)