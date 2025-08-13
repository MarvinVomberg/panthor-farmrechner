import {CraftItem, CraftMaterial} from "~/types/crafting";
import {farmroutes} from "~/farmroutes";

export const VehicleBodyPart = new CraftItem(
    'vehicle_body_part',
    'Karosserieteil',
    1,
    [
        new CraftMaterial(6, farmroutes.steel_r),
        new CraftMaterial(8, farmroutes.aluminum_r),
        new CraftMaterial(4, farmroutes.plastic),
        new CraftMaterial(3, farmroutes.rubber),
    ]
)