import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Ford_Raptor_Offroad = new CraftItem(
    'Ford_Raptor_Offroad',
    'Ford Raptor Offroad',
    7,
    [
        new CraftMaterial(6, EnginePart),
        new CraftMaterial(6, TransmissionPart),
        new CraftMaterial(6, VehicleBodyPart),
        new CraftMaterial(5, InteriorPart),
        new CraftMaterial(5, VehicleWindow),
        new CraftMaterial(5, Chassis),
        new CraftMaterial(5, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Ford_Raptor_Offroad', 'Bauplan Ford Raptor Offroad', 7, []))
    ]
);