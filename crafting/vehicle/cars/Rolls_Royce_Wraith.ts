import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Rolls_Royce_Wraith = new CraftItem(
    'Rolls_Royce_Wraith',
    'Rolls Royce Wraith',
    33,
    [
        new CraftMaterial(15, EnginePart),
        new CraftMaterial(15, TransmissionPart),
        new CraftMaterial(15, VehicleBodyPart),
        new CraftMaterial(10, InteriorPart),
        new CraftMaterial(6, VehicleWindow),
        new CraftMaterial(15, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Rolls_Royce_Wraith', 'Bauplan Rolls Royce Wraith', 33, []))
    ]
);