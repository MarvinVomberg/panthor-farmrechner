import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {VehicleWindow} from "~/crafting/vehicle/parts/VehicleWindow";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const Volvo_FH13_Tanklaster = new CraftItem(
    'Volvo_FH13_Tanklaster',
    'Volvo FH13 Tanklaster',
    28,
    [
        new CraftMaterial(8, EnginePart),
        new CraftMaterial(6, TransmissionPart),
        new CraftMaterial(5, VehicleBodyPart),
        new CraftMaterial(4, InteriorPart),
        new CraftMaterial(4, VehicleWindow),
        new CraftMaterial(8, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('Volvo_FH13_Tanklaster_BP', 'Volvo FH13 Tanklaster Bauplan', 28, []))
    ]
);