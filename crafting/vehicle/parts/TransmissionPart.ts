import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const TransmissionPart = new CraftItem(
    'transmission_part',
    'Getriebeteil',
    1,
    [
        new CraftMaterial(6, farmroutes.steel_r),
        new CraftMaterial(8, farmroutes.aluminum_r),
        new CraftMaterial(6, farmroutes.oil_r),
        new CraftMaterial(4, farmroutes.chemicals),
    ]
)