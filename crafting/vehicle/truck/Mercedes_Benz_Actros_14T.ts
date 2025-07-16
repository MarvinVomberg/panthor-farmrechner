import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Mercedes_Benz_Actros_14T = new CraftItem(
    'Mercedes_Benz_Actros_14T',
    'Mercedes Benz Actros 14T',
    42,
    [
        new CraftMaterial(20, EnginePart),
        new CraftMaterial(21, TransmissionPart),
        new CraftMaterial(21, VehicleBodyPart),
        new CraftMaterial(18, InteriorPart),
        new CraftMaterial(10, VehicleWindow),
        new CraftMaterial(21, Chassis),
        new CraftMaterial(9, Tyre),
        new CraftMaterial(1, new CraftItem('14_Tonner_BP', '14 Tonner Bauplan', 42, []))
    ]
);