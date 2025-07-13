import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const GMC_Yukon_2015 = new CraftItem(
    'GMC_Yukon_2015',
    'GMC Yukon 2015',
    22,
    [
        new CraftMaterial(7, EnginePart),
        new CraftMaterial(7, TransmissionPart),
        new CraftMaterial(6, VehicleBodyPart),
        new CraftMaterial(6, InteriorPart),
        new CraftMaterial(5, VehicleWindow),
        new CraftMaterial(6, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_GMC_Yukon_2015', 'Bauplan GMC Yukon 2015', 22, []))
    ]
);