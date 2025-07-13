import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Audi_RS5 = new CraftItem(
    'Audi_RS5',
    'Audi RS5',
    16,
    [
        new CraftMaterial(9, EnginePart),
        new CraftMaterial(9, TransmissionPart),
        new CraftMaterial(6, VehicleBodyPart),
        new CraftMaterial(8, InteriorPart),
        new CraftMaterial(5, VehicleWindow),
        new CraftMaterial(6, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Audi_RS5', 'Bauplan Audi RS5', 16, []))
    ]
);