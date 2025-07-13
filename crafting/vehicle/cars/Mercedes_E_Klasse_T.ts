import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Mercedes_E_Klasse_T = new CraftItem(
    'Mercedes_E_Klasse_T',
    'Mercedes E Klasse T',
    32,
    [
        new CraftMaterial(8, EnginePart),
        new CraftMaterial(9, TransmissionPart),
        new CraftMaterial(8, VehicleBodyPart),
        new CraftMaterial(9, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(10, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Mercedes_E_Klasse_T', 'Bauplan Mercedes E Klasse T', 32, []))
    ]
);