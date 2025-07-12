import {Black_65mm_20_Round} from "~/crafting/weapon/magazine/Black_65mm_20_Round";
import {Default_58mm_30_Round} from "~/crafting/weapon/magazine/Default_58mm_30_Round";
import {Default_65mm_20_Round} from "~/crafting/weapon/magazine/Default_65mm_20_Round";
import {Default_556mm_20_Round} from "~/crafting/weapon/magazine/Default_556mm_20_Round";
import {EPR_556mm_30_Round} from "~/crafting/weapon/magazine/EPR_556mm_30_Round";
import {FMJ_30mm_40_Round} from "~/crafting/weapon/magazine/FMJ_30mm_40_Round";
import {G36_556mm_30_Round} from "~/crafting/weapon/magazine/G36_556mm_30_Round";
import {HST_19mm_30_Round} from "~/crafting/weapon/magazine/HST_19mm_30_Round";
import {Khaki_65mm_20_Round} from "~/crafting/weapon/magazine/Khaki_65mm_20_Round";
import {M14_762mm_20_Round} from "~/crafting/weapon/magazine/M14_762mm_20_Round";
import {Magnum_338_10_Round} from "~/crafting/weapon/magazine/Magnum_338_10_Round";
import {MP5_9mm_30_Round} from "~/crafting/weapon/magazine/MP5_9mm_30_Round";
import {Promet_65mm_20_Round} from "~/crafting/weapon/magazine/Promet_65mm_20_Round";
import {Sand_65mm_20_Round} from "~/crafting/weapon/magazine/Sand_65mm_20_Round";
import {Tracer_556mm_30_Round} from "~/crafting/weapon/magazine/Tracer_556mm_30_Round";
import {WM_300_5_Round} from "~/crafting/weapon/magazine/WM_300_5_Round";
import {CraftCategory} from "~/types/crafting";
import {weaponsCraftingCategory} from "~/crafting/weapon";
import {CircleStackIcon} from "@heroicons/vue/16/solid";

export const weaponMagazinesCategory = new CraftCategory(
    'weapon_magazines',
    'Waffen Magazine',
    'Magazine für verschiedene Waffen',
    CircleStackIcon,
    'text-cyan-500',
    'bg-cyan-100',
    [
        Black_65mm_20_Round,
        Default_58mm_30_Round,
        Default_65mm_20_Round,
        Default_556mm_20_Round,
        EPR_556mm_30_Round,
        FMJ_30mm_40_Round,
        G36_556mm_30_Round,
        HST_19mm_30_Round,
        Khaki_65mm_20_Round,
        M14_762mm_20_Round,
        Magnum_338_10_Round,
        MP5_9mm_30_Round,
        Promet_65mm_20_Round,
        Sand_65mm_20_Round,
        Tracer_556mm_30_Round,
        WM_300_5_Round,
    ],
    weaponsCraftingCategory,
    10
)