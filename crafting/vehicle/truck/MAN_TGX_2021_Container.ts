import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const MAN_TGX_2021_Container = new CraftItem(
    'MAN_TGX_2021_Container',
    'MAN TGX 2021 Container',
    60,
    [
        new CraftMaterial(20, EnginePart),
        new CraftMaterial(20, TransmissionPart),
        new CraftMaterial(60, VehicleBodyPart),
        new CraftMaterial(35, InteriorPart),
        new CraftMaterial(15, VehicleWindow),
        new CraftMaterial(90, Chassis),
        new CraftMaterial(40, Tyre),
        new CraftMaterial(1, new CraftItem('BP_MAN_TGX_2021_Container', 'Bauplan MAN TGX 2021 Container', 60, []))
    ]
);