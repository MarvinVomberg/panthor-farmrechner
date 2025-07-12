import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Mercedes_Benz_Actros_7T = new CraftItem(
    'Mercedes_Benz_Actros_7T',
    'Mercedes Benz Actros 7T',
    34,
    [
        new CraftMaterial(12, EnginePart),
        new CraftMaterial(15, TransmissionPart),
        new CraftMaterial(11, VehicleBodyPart),
        new CraftMaterial(12, InteriorPart),
        new CraftMaterial(6, VehicleWindow),
        new CraftMaterial(21, Chassis),
        new CraftMaterial(8, Tyre),
        new CraftMaterial(1, new CraftItem('Groß_Transporter_BP', 'Groß Transporter Bauplan', 34, []))
    ]
);