import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Audi_A4 = new CraftItem(
    'Audi_A4',
    'Audi A4',
    10,
    [
        new CraftMaterial(3, EnginePart),
        new CraftMaterial(2, TransmissionPart),
        new CraftMaterial(7, VehicleBodyPart),
        new CraftMaterial(1, InteriorPart),
        new CraftMaterial(1, VehicleWindow),
        new CraftMaterial(8, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Audi_A4', 'Bauplan Audi A4', 10, []))
    ]
);