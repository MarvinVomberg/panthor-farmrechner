import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Renault_Midlum = new CraftItem(
    'Renault_Midlum',
    'Renault Midlum',
    26,
    [
        new CraftMaterial(9, EnginePart),
        new CraftMaterial(8, TransmissionPart),
        new CraftMaterial(9, VehicleBodyPart),
        new CraftMaterial(7, InteriorPart),
        new CraftMaterial(7, VehicleWindow),
        new CraftMaterial(8, Chassis),
        new CraftMaterial(6, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Renault_Midlum', 'Bauplan Renault Midlum', 26, []))
    ]
);