import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Audi_A8_Limousine = new CraftItem(
    'Audi_A8_Limousine',
    'Audi A8 Limousine',
    29,
    [
        new CraftMaterial(5, EnginePart),
        new CraftMaterial(5, TransmissionPart),
        new CraftMaterial(10, VehicleBodyPart),
        new CraftMaterial(13, InteriorPart),
        new CraftMaterial(9, VehicleWindow),
        new CraftMaterial(9, Chassis),
        new CraftMaterial(8, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Audi_A8_Limousine', 'Bauplan Audi A8 Limousine', 29, []))
    ]
);