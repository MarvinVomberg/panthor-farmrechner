import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const Remington_ACR_E_Long_Black = new CraftItem(
    'Remington_ACR_E_Long_Black',
    'Remington ACR-E [Long/Black]',
    21,
    [
        new CraftMaterial(6, Barrel),
        new CraftMaterial(5, PistolGrip),
        new CraftMaterial(6, WeaponStock),
        new CraftMaterial(4, ReceiverHousing),
        new CraftMaterial(5, HandGuard),
        new CraftMaterial(6, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_Remington_ACR_E_Long_Black', 'BP Remington ACR-E [Long]', 21, []))
    ]
)