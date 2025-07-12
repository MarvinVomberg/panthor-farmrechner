import {CraftItem, CraftMaterial} from "~/types/crafting";
import {EnginePart} from "~/crafting/vehicle/parts/EnginePart";
import {TransmissionPart} from "~/crafting/vehicle/parts/TransmissionPart";
import {VehicleBodyPart} from "~/crafting/vehicle/parts/VehicleBodyPart";
import {InteriorPart} from "~/crafting/vehicle/parts/InteriorPart";
import {Chassis} from "~/crafting/vehicle/parts/Chassis";
import {Tyre} from "~/crafting/vehicle/parts/Tyre";

export const GolfcartCargo = new CraftItem(
    'golfcart_cargo',
    'Golfcart Cargo',
    20,
    [
        new CraftMaterial(5, EnginePart),
        new CraftMaterial(3, TransmissionPart),
        new CraftMaterial(5, VehicleBodyPart),
        new CraftMaterial(3, InteriorPart),
        new CraftMaterial(4, Chassis),
        new CraftMaterial(4, Tyre),
        new CraftMaterial(1, new CraftItem('BP_Golfcart', 'Golfcart Blueprint', 1, [])),
    ]
)