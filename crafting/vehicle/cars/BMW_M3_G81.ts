import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const BMW_M3_G81 = new CraftItem(
    'BMW_M3_G81',
    'BMW M3 G81',
    40,
    [
        new CraftMaterial(8, EnginePart),
        new CraftMaterial(8, TransmissionPart),
        new CraftMaterial(10, VehicleBodyPart),
        new CraftMaterial(9, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(8, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_BMW_M3_G81', 'Bauplan BMW M3 G81', 40, []))
    ]
);