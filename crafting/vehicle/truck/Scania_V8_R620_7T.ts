import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Scania_V8_R620_7T = new CraftItem(
    'Scania_V8_R620_7T',
    'Scania V8 R620 7T',
    34,
    [
        new CraftMaterial(15, EnginePart),
        new CraftMaterial(12, TransmissionPart),
        new CraftMaterial(14, VehicleBodyPart),
        new CraftMaterial(10, InteriorPart),
        new CraftMaterial(8, VehicleWindow),
        new CraftMaterial(20, Chassis),
        new CraftMaterial(6, Tyre),
        new CraftMaterial(1, new CraftItem('Groß_Transporter_BP', 'Groß Transporter Bauplan', 34, []))
    ]
);