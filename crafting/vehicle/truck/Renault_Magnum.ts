import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Renault_Magnum = new CraftItem(
    'Renault_Magnum',
    'Renault Magnum',
    45,
    [
        new CraftMaterial(28, EnginePart),
        new CraftMaterial(22, TransmissionPart),
        new CraftMaterial(20, VehicleBodyPart),
        new CraftMaterial(15, InteriorPart),
        new CraftMaterial(12, VehicleWindow),
        new CraftMaterial(25, Chassis),
        new CraftMaterial(10, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Renault_Magnum', 'Bauplan Renault Magnum', 45, []))
    ]
);