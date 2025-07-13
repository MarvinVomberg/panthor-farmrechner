import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Audi_RS4 = new CraftItem(
    'Audi_RS4',
    'Audi RS4',
    24,
    [
        new CraftMaterial(10, EnginePart),
        new CraftMaterial(8, TransmissionPart),
        new CraftMaterial(9, VehicleBodyPart),
        new CraftMaterial(6, InteriorPart),
        new CraftMaterial(6, VehicleWindow),
        new CraftMaterial(6, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Audi_RS4', 'Bauplan Audi RS4', 24, []))
    ]
);