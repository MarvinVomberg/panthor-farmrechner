import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Hymer_MLI_2015 = new CraftItem(
    'Hymer_MLI_2015',
    'Hymer MLI 2015',
    18,
    [
        new CraftMaterial(3, EnginePart),
        new CraftMaterial(2, TransmissionPart),
        new CraftMaterial(3, VehicleBodyPart),
        new CraftMaterial(3, InteriorPart),
        new CraftMaterial(8, VehicleWindow),
        new CraftMaterial(2, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Hymer_MLI_2015', 'Bauplan Hymer MLI 2015', 18, []))
    ]
);