import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Mercedes_Benz_G65_AMG = new CraftItem(
    'Mercedes_Benz_G65_AMG',
    'Mercedes Benz G65 AMG',
    35,
    [
        new CraftMaterial(8, EnginePart),
        new CraftMaterial(6, TransmissionPart),
        new CraftMaterial(8, VehicleBodyPart),
        new CraftMaterial(6, InteriorPart),
        new CraftMaterial(5, VehicleWindow),
        new CraftMaterial(5, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Mercedes_Benz_G65_AMG', 'Bauplan Mercedes Benz G65 AMG', 35, []))
    ]
);