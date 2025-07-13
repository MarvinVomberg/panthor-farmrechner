import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Tesla_Model_S = new CraftItem(
    'Tesla_Model_S',
    'Tesla Model S',
    15,
    [
        new CraftMaterial(8, EnginePart),
        new CraftMaterial(7, TransmissionPart),
        new CraftMaterial(8, VehicleBodyPart),
        new CraftMaterial(7, InteriorPart),
        new CraftMaterial(5, VehicleWindow),
        new CraftMaterial(8, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Tesla_Model_S', 'Bauplan Tesla Model S', 15, []))
    ]
);