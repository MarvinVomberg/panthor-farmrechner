import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Volvo_XC90 = new CraftItem(
    'Volvo_XC90',
    'Volvo XC90',
    22,
    [
        new CraftMaterial(6, EnginePart),
        new CraftMaterial(7, TransmissionPart),
        new CraftMaterial(6, VehicleBodyPart),
        new CraftMaterial(7, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(6, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Volvo_XC90', 'Bauplan Volvo XC90', 22, []))
    ]
);