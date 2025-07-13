import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Chrysler_300 = new CraftItem(
    'Chrysler_300',
    'Chrysler 300',
    31,
    [
        new CraftMaterial(15, EnginePart),
        new CraftMaterial(15, TransmissionPart),
        new CraftMaterial(8, VehicleBodyPart),
        new CraftMaterial(8, InteriorPart),
        new CraftMaterial(8, VehicleWindow),
        new CraftMaterial(17, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Chrysler_300', 'Bauplan Chrysler 300', 31, []))
    ]
);