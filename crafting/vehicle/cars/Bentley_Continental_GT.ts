import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Bentley_Continental_GT = new CraftItem(
    'Bentley_Continental_GT',
    'Bentley Continental GT',
    16,
    [
        new CraftMaterial(8, EnginePart),
        new CraftMaterial(13, TransmissionPart),
        new CraftMaterial(6, VehicleBodyPart),
        new CraftMaterial(8, InteriorPart),
        new CraftMaterial(7, VehicleWindow),
        new CraftMaterial(6, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Bentley_Continental_GT', 'Bauplan Bentley Continental GT', 16, []))
    ]
);