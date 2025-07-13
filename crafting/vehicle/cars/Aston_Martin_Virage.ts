import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Aston_Martin_Virage = new CraftItem(
    'Aston_Martin_Virage',
    'Aston Martin Virage',
    11,
    [
        new CraftMaterial(12, EnginePart),
        new CraftMaterial(8, TransmissionPart),
        new CraftMaterial(10, VehicleBodyPart),
        new CraftMaterial(10, InteriorPart),
        new CraftMaterial(8, VehicleWindow),
        new CraftMaterial(10, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Aston_Martin_Virage', 'Bauplan Aston Martin Virage', 11, []))
    ]
);