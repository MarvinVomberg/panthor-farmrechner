import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Subaru_WRX_STI = new CraftItem(
    'Subaru_WRX_STI',
    'Subaru WRX STI',
    16,
    [
        new CraftMaterial(7, EnginePart),
        new CraftMaterial(6, TransmissionPart),
        new CraftMaterial(8, VehicleBodyPart),
        new CraftMaterial(9, InteriorPart),
        new CraftMaterial(5, VehicleWindow),
        new CraftMaterial(6, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Subaru_WRX_STI', 'Bauplan Subaru WRX STI', 16, []))
    ]
);