import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const VW_Touareg_2019 = new CraftItem(
    'VW_Touareg_2019',
    'VW Touareg 2019',
    20,
    [
        new CraftMaterial(9, EnginePart),
        new CraftMaterial(5, TransmissionPart),
        new CraftMaterial(9, VehicleBodyPart),
        new CraftMaterial(5, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(5, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_VW_Touareg_2019', 'Bauplan VW Touareg 2019', 20, []))
    ]
);