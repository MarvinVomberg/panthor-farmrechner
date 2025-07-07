import {CraftItem, CraftMaterial} from "~/types/crafting"
import {plasticProduction} from "~/farmroutes/plastic";
import {ironBarProduction} from "~/farmroutes/iron_bar";

export const ChargingHandle = new CraftItem(
    'charging_handle',
    'Ladegriff',
    10,
    [
        new CraftMaterial(3, ironBarProduction),
        new CraftMaterial(1, plasticProduction)
    ]
)