import {CraftItem, CraftMaterial} from "~/types/crafting"
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {steelBarProduction} from "~/farmroutes/steel_r";

export const ReceiverHousing = new CraftItem(
    'receiver_housing',
    'Verschlussgehäuse',
    10,
    [
        new CraftMaterial(3, aluminumBarProduction),
        new CraftMaterial(4, steelBarProduction),
    ]
)