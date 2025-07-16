import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Hummer_H2 = new CraftItem(
    'Hummer_H2',
    'Hummer H2',
    16,
    [
        new CraftMaterial(7, EnginePart),
        new CraftMaterial(6, TransmissionPart),
        new CraftMaterial(5, VehicleBodyPart),
        new CraftMaterial(4, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(6, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Hummer_H2', 'Bauplan Hummer H2', 16, []))
    ]
);