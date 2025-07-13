import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const BMW_M6 = new CraftItem(
    'BMW_M6',
    'BMW M6',
    19,
    [
        new CraftMaterial(9, EnginePart),
        new CraftMaterial(9, TransmissionPart),
        new CraftMaterial(9, VehicleBodyPart),
        new CraftMaterial(6, InteriorPart),
        new CraftMaterial(6, VehicleWindow),
        new CraftMaterial(7, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_BMW_M6', 'Bauplan BMW M6', 19, []))
    ]
);