import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const BMW_3er_G20 = new CraftItem(
    'BMW_3er_G20',
    'BMW 3er G20',
    32,
    [
        new CraftMaterial(9, EnginePart),
        new CraftMaterial(8, TransmissionPart),
        new CraftMaterial(10, VehicleBodyPart),
        new CraftMaterial(9, InteriorPart),
        new CraftMaterial(6, VehicleWindow),
        new CraftMaterial(4, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_BMW_3er_G20', 'Bauplan BMW 3er G20', 32, []))
    ]
);