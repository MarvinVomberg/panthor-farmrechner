import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Mercedes_X_Klasse = new CraftItem(
    'Mercedes_X_Klasse',
    'Mercedes X-Klasse',
    17,
    [
        new CraftMaterial(7, EnginePart),
        new CraftMaterial(6, TransmissionPart),
        new CraftMaterial(7, VehicleBodyPart),
        new CraftMaterial(6, InteriorPart),
        new CraftMaterial(5, VehicleWindow),
        new CraftMaterial(6, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Mercedes_X_Klasse', 'Bauplan Mercedes X-Klasse', 17, []))
    ]
);