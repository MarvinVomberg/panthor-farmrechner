import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Porsche_Boxter_2016 = new CraftItem(
    'Porsche_Boxter_2016',
    'Porsche Boxter 2016',
    28,
    [
        new CraftMaterial(12, EnginePart),
        new CraftMaterial(10, TransmissionPart),
        new CraftMaterial(9, VehicleBodyPart),
        new CraftMaterial(8, InteriorPart),
        new CraftMaterial(3, VehicleWindow),
        new CraftMaterial(10, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Porsche_Boxter_2016', 'Bauplan Porsche Boxter 2016', 28, []))
    ]
);