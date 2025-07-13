import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Lamborghini_Urus = new CraftItem(
    'Lamborghini_Urus',
    'Lamborghini Urus',
    21,
    [
        new CraftMaterial(8, EnginePart),
        new CraftMaterial(6, TransmissionPart),
        new CraftMaterial(9, VehicleBodyPart),
        new CraftMaterial(4, InteriorPart),
        new CraftMaterial(5, VehicleWindow),
        new CraftMaterial(7, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Lamborghini_Urus', 'Bauplan Lamborghini Urus', 21, []))
    ]
);