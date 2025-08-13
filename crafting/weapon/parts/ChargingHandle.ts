import {CraftItem, CraftMaterial} from "~/types/crafting"
import {farmroutes} from "~/farmroutes";

export const ChargingHandle = new CraftItem(
    'charging_handle',
    'Ladegriff',
    10,
    [
        new CraftMaterial(3, farmroutes.iron_bar),
        new CraftMaterial(1, farmroutes.plastic)
    ]
)