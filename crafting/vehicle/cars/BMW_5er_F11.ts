import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const BMW_5er_F11 = new CraftItem(
    'BMW_5er_F11',
    'BMW 5er F11',
    26,
    [
        new CraftMaterial(10, EnginePart),
        new CraftMaterial(7, TransmissionPart),
        new CraftMaterial(7, VehicleBodyPart),
        new CraftMaterial(7, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(8, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_BMW_5er_F11', 'Bauplan BMW 5er F11', 26, []))
    ]
);