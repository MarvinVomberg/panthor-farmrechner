import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Golf_7 = new CraftItem(
    'Golf_7',
    'Golf 7',
    28,
    [
        new CraftMaterial(7, EnginePart),
        new CraftMaterial(9, TransmissionPart),
        new CraftMaterial(7, VehicleBodyPart),
        new CraftMaterial(9, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(7, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Golf_7', 'Bauplan Golf 7', 28, []))
    ]
);