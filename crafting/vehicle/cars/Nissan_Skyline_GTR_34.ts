import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Nissan_Skyline_GTR_34 = new CraftItem(
    'Nissan_Skyline_GTR_34',
    'Nissan Skyline GTR 34',
    22,
    [
        new CraftMaterial(8, EnginePart),
        new CraftMaterial(9, TransmissionPart),
        new CraftMaterial(7, VehicleBodyPart),
        new CraftMaterial(9, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(7, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Nissan_Skyline_GTR_34', 'Bauplan Nissan Skyline GTR 34', 22, []))
    ]
);