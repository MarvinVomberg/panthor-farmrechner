import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Porsche_911_GT3RS = new CraftItem(
    'Porsche_911_GT3RS',
    'Porsche 911 GT3RS',
    14,
    [
        new CraftMaterial(10, EnginePart),
        new CraftMaterial(9, TransmissionPart),
        new CraftMaterial(10, VehicleBodyPart),
        new CraftMaterial(9, InteriorPart),
        new CraftMaterial(6, VehicleWindow),
        new CraftMaterial(12, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Porsche_911_GT3RS', 'Bauplan Porsche 911 GT3RS', 14, []))
    ]
);