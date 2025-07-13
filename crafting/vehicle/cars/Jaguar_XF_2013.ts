import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Jaguar_XF_2013 = new CraftItem(
    'Jaguar_XF_2013',
    'Jaguar XF 2013',
    21,
    [
        new CraftMaterial(12, EnginePart),
        new CraftMaterial(10, TransmissionPart),
        new CraftMaterial(8, VehicleBodyPart),
        new CraftMaterial(6, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(7, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Jaguar_XF_2013', 'Bauplan Jaguar XF 2013', 21, []))
    ]
);