import {CraftItem, CraftMaterial} from "~/types/crafting"
import {farmroutes} from "~/farmroutes";

export const ReceiverHousing = new CraftItem(
    'receiver_housing',
    'Verschlussgehäuse',
    10,
    [
        new CraftMaterial(3, farmroutes.aluminum_r),
        new CraftMaterial(4, farmroutes.steel_r),
    ]
)