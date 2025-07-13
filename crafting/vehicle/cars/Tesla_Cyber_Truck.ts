import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Tesla_Cyber_Truck = new CraftItem(
    'Tesla_Cyber_Truck',
    'Tesla Cyber Truck',
    20,
    [
            new CraftMaterial(6, EnginePart),
            new CraftMaterial(7, TransmissionPart),
            new CraftMaterial(6, VehicleBodyPart),
            new CraftMaterial(7, InteriorPart),
            new CraftMaterial(4, VehicleWindow),
            new CraftMaterial(5, Chassis),
            new CraftMaterial(4, Tyre),
            new CraftMaterial(1, new CraftItem('BP_Tesla_Cyber_Truck', 'Bauplan Tesla Cyber Truck', 20, []))
    ]
);