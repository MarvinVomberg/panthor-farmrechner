import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Audi_S7_Sportsback = new CraftItem(
    'Audi_S7_Sportsback',
    'Audi S7 Sportsback',
    27,
    [
        new CraftMaterial(12, EnginePart),
        new CraftMaterial(6, TransmissionPart),
        new CraftMaterial(8, VehicleBodyPart),
        new CraftMaterial(7, InteriorPart),
        new CraftMaterial(6, VehicleWindow),
        new CraftMaterial(6, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Audi_S7_Sportsback', 'Bauplan Audi S7 Sportsback', 27, []))
    ]
);