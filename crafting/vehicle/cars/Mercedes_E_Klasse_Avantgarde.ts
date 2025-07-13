import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Mercedes_E_Klasse_Avantgarde = new CraftItem(
    'Mercedes_E_Klasse_Avantgarde',
    'Mercedes E Klasse Avantgarde',
    35,
    [
        new CraftMaterial(7, EnginePart),
        new CraftMaterial(10, TransmissionPart),
        new CraftMaterial(7, VehicleBodyPart),
        new CraftMaterial(9, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(11, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Mercedes_E_Klasse_Avantgarde', 'Bauplan Mercedes E Klasse Avantgarde', 35, []))
    ]
);