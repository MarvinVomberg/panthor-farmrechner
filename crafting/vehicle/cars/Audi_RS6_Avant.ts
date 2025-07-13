import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Audi_RS6_Avant = new CraftItem(
    'Audi_RS6_Avant',
    'Audi RS6 Avant',
    20,
    [
        new CraftMaterial(11, EnginePart),
        new CraftMaterial(7, TransmissionPart),
        new CraftMaterial(8, VehicleBodyPart),
        new CraftMaterial(6, InteriorPart),
        new CraftMaterial(5, VehicleWindow),
        new CraftMaterial(8, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Audi_RS6_Avant', 'Bauplan Audi RS6 Avant', 20, []))
    ]
);