import {CraftCategory} from "~/types/crafting";
import {FireIcon} from "@heroicons/vue/16/solid";
import {weaponsCategory} from "~/crafting/weapon/weapons";
import {AI_AWM} from "~/crafting/weapon/weapons/ganghouse/AI_AWM";
import {AR15_Red_Skeleton_Carbine} from "~/crafting/weapon/weapons/ganghouse/AR15_Red_Skeleton_Carbine";
import {FN_F2000} from "~/crafting/weapon/weapons/ganghouse/FN_F2000";
import {HK_416_D20} from "~/crafting/weapon/weapons/ganghouse/HK_416_D20";
import {M14_Klassisch} from "~/crafting/weapon/weapons/ganghouse/M14_Classic";
import {MK18_338_LM_Tan} from "~/crafting/weapon/weapons/ganghouse/MK18_338_LM_Tan";
import {RRA_LAR_15_AMR} from "~/crafting/weapon/weapons/ganghouse/RRA_LAR_15_AMR";

export const ganghouseWeaponsCategory = new CraftCategory(
    'ganghouse_weapons_category',
    'Ganghaus-Waffen',
    'Waffen die im Ganghaus hergestellt werden können',
    FireIcon,
    'text-yellow-500',
    'bg-yellow-100',
    [
        AI_AWM,
        AR15_Red_Skeleton_Carbine,
        FN_F2000,
        HK_416_D20,
        M14_Klassisch,
        MK18_338_LM_Tan,
        RRA_LAR_15_AMR
    ],
    weaponsCategory,
    1,
)