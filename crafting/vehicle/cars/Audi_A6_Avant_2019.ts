import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Audi_A6_Avant_2019 = new CraftItem(
    'Audi_A6_Avant_2019',
    'Audi A6 Avant 2019',
    16,
    [
        new CraftMaterial(7, EnginePart),
        new CraftMaterial(10, TransmissionPart),
        new CraftMaterial(6, VehicleBodyPart),
        new CraftMaterial(8, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(8, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Audi_A6_Avant_2019', 'Bauplan Audi A6 Avant 2019', 16, []))
    ]
);