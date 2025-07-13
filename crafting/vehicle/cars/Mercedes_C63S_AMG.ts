import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Mercedes_C63S_AMG = new CraftItem(
    'Mercedes_C63S_AMG',
    'Mercedes C63S AMG',
    30,
    [
        new CraftMaterial(9, EnginePart),
        new CraftMaterial(8, TransmissionPart),
        new CraftMaterial(9, VehicleBodyPart),
        new CraftMaterial(8, InteriorPart),
        new CraftMaterial(6, VehicleWindow),
        new CraftMaterial(8, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Mercedes_C63S_AMG', 'Bauplan Mercedes C63S AMG', 30, []))
    ]
);