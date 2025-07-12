import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const QBZ_95_1_Black = new CraftItem(
    'QBZ_95_1_Black',
    'QBZ-95-1 [Schwarz]',
    18,
    [
        new CraftMaterial(7, Barrel),
        new CraftMaterial(5, PistolGrip),
        new CraftMaterial(6, WeaponStock),
        new CraftMaterial(7, ReceiverHousing),
        new CraftMaterial(6, HandGuard),
        new CraftMaterial(5, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_QBZ_95_1_Black', 'BP QBZ-95-1', 18, []))
    ]
)