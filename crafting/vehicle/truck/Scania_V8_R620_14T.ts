import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Scania_V8_R620_14T = new CraftItem(
    'Scania_V8_R620_14T',
    'Scania V8 R620 14T',
    42,
    [
        new CraftMaterial(22, EnginePart),
        new CraftMaterial(24, TransmissionPart),
        new CraftMaterial(22, VehicleBodyPart),
        new CraftMaterial(11, InteriorPart),
        new CraftMaterial(10, VehicleWindow),
        new CraftMaterial(22, Chassis),
        new CraftMaterial(9, Tyre),
        new CraftMaterial(1, new CraftItem('14_Tonner_BP', '14 Tonner Bauplan', 42, []))
    ]
);