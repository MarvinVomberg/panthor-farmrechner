import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Dodge_Viper_SRT = new CraftItem(
    'Dodge_Viper_SRT',
    'Dodge Viper SRT',
    13,
    [
        new CraftMaterial(9, EnginePart),
        new CraftMaterial(9, TransmissionPart),
        new CraftMaterial(10, VehicleBodyPart),
        new CraftMaterial(9, InteriorPart),
        new CraftMaterial(6, VehicleWindow),
        new CraftMaterial(11, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Dodge_Viper_SRT', 'Bauplan Dodge Viper SRT', 13, []))
    ]
);