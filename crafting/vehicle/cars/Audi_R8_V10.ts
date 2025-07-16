import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Audi_R8_V10 = new CraftItem(
    'Audi_R8_V10',
    'Audi R8 V10',
    26,
    [
        new CraftMaterial(11, EnginePart),
        new CraftMaterial(10, TransmissionPart),
        new CraftMaterial(13, VehicleBodyPart),
        new CraftMaterial(8, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(10, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Audi_R8_V10', 'Bauplan Audi R8 V10', 26, []))
    ]
);