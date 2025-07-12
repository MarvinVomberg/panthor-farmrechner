import {CraftItem, CraftMaterial} from "~/types/crafting";
import {Barrel} from "~/crafting/weapon/parts/Barrel";
import {PistolGrip} from "~/crafting/weapon/parts/PistolGrip";
import {WeaponStock} from "~/crafting/weapon/parts/WeaponStock";
import {ReceiverHousing} from "~/crafting/weapon/parts/ReceiverHousing";
import {HandGuard} from "~/crafting/weapon/parts/HandGuard";
import {ChargingHandle} from "~/crafting/weapon/parts/ChargingHandle";

export const HK_416_D20 = new CraftItem(
    'HK_416_D20',
    'HK 416 D20',
    10,
    [
        new CraftMaterial(6, Barrel),
        new CraftMaterial(6, PistolGrip),
        new CraftMaterial(5, WeaponStock),
        new CraftMaterial(4, ReceiverHousing),
        new CraftMaterial(6, HandGuard),
        new CraftMaterial(5, ChargingHandle),
        new CraftMaterial(1, new CraftItem('BP_HK_416_D20', 'BP HK HK416D20', 1, []))
    ]
)