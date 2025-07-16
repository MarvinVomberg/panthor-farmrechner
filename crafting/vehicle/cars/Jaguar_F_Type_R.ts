import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Jaguar_F_Type_R = new CraftItem(
    'Jaguar_F_Type_R',
    'Jaguar F-Type R',
    21,
    [
        new CraftMaterial(11, EnginePart),
        new CraftMaterial(9, TransmissionPart),
        new CraftMaterial(11, VehicleBodyPart),
        new CraftMaterial(8, InteriorPart),
        new CraftMaterial(6, VehicleWindow),
        new CraftMaterial(10, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Jaguar_F_Type_R', 'Bauplan Jaguar F-Type R', 21, []))
    ]
);