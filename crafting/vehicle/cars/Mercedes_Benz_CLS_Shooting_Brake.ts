import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Mercedes_Benz_CLS_Shooting_Brake = new CraftItem(
    'Mercedes_Benz_CLS_Shooting_Brake',
    'Mercedes Benz CLS Shooting Brake',
    30,
    [
        new CraftMaterial(10, EnginePart),
        new CraftMaterial(6, TransmissionPart),
        new CraftMaterial(10, VehicleBodyPart),
        new CraftMaterial(6, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(7, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Mercedes_Benz_CLS_Shooting_Brake', 'Bauplan Mercedes Benz CLS Shooting Brake', 30, []))
    ]
);