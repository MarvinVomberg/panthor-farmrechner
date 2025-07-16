import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Ferrari_F430_Scuderia = new CraftItem(
    'Ferrari_F430_Scuderia',
    'Ferrari F430 Scuderia',
    23,
    [
        new CraftMaterial(9, EnginePart),
        new CraftMaterial(10, TransmissionPart),
        new CraftMaterial(9, VehicleBodyPart),
        new CraftMaterial(9, InteriorPart),
        new CraftMaterial(6, VehicleWindow),
        new CraftMaterial(10, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Ferrari_F430_Scuderia', 'Bauplan Ferrari F430 Scuderia', 23, []))
    ]
);