import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Porsche_Panamera = new CraftItem(
    'Porsche_Panamera',
    'Porsche Panamera',
    28,
    [
        new CraftMaterial(10, EnginePart),
        new CraftMaterial(9, TransmissionPart),
        new CraftMaterial(10, VehicleBodyPart),
        new CraftMaterial(7, InteriorPart),
        new CraftMaterial(5, VehicleWindow),
        new CraftMaterial(5, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Porsche_Panamera', 'Bauplan Porsche Panamera', 28, []))
    ]
);