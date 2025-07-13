import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Porsche_911_1995 = new CraftItem(
    'Porsche_911_1995',
    'Porsche 911 1995',
    10,
    [
        new CraftMaterial(11, EnginePart),
        new CraftMaterial(10, TransmissionPart),
        new CraftMaterial(12, VehicleBodyPart),
        new CraftMaterial(7, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(7, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Porsche_911_1995', 'Bauplan Porsche 911 1995', 10, []))
    ]
);