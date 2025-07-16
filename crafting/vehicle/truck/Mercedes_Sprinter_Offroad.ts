import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Mercedes_Sprinter_Offroad = new CraftItem(
    'Mercedes_Sprinter_Offroad',
    'Mercedes Sprinter Offroad',
    20,
    [
        new CraftMaterial(5, EnginePart),
        new CraftMaterial(3, TransmissionPart),
        new CraftMaterial(4, VehicleBodyPart),
        new CraftMaterial(5, InteriorPart),
        new CraftMaterial(3, VehicleWindow),
        new CraftMaterial(3, Chassis),
        new CraftMaterial(5, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Mercedes_Sprinter_Offroad', 'Bauplan Mercedes Sprinter Offroad', 20, []))
    ]
);