import {CraftCategory} from "~/types/crafting";
import {FireIcon} from "@heroicons/vue/16/solid";
import {weaponsCraftingCategory} from "~/crafting/weapon";
import {AR15_Magpul_Carbine} from "~/crafting/weapon/weapons/AR15_Magpul_Carbine";
import {AR15_SLR_Custom} from "~/crafting/weapon/weapons/AR15_SLR_Custom";
import {ASR_14} from "~/crafting/weapon/weapons/ASR_14";
import {BCM_Jack_Carbine} from "~/crafting/weapon/weapons/BCM_Jack_Carbine";
import {Colt_M4A1_Carbine_Carryhandle} from "~/crafting/weapon/weapons/Colt_M4A1_Carbine";
import {CTAR_21} from "~/crafting/weapon/weapons/CTAR_21";
import {Desert_Tech_MDR} from "~/crafting/weapon/weapons/Desert_Tech_MDR";
import {Desert_Tech_MDR_Rainbow_5_56} from "~/crafting/weapon/weapons/Desert_Tech_MDR_Rainbow";
import {Famas_G2} from "~/crafting/weapon/weapons/Famas_G2";
import {FN_P90_5_7mm} from "~/crafting/weapon/weapons/FN_P90";
import {HK_G36CV_TAC} from "~/crafting/weapon/weapons/HK_G36V_Tac";
import {HK_G36C} from "~/crafting/weapon/weapons/HK_G36C";
import {HK_G36K_KSK} from "~/crafting/weapon/weapons/HK_G36K_KSK";
import {HK_G36K_MLIC} from "~/crafting/weapon/weapons/HK_G36K_MLI_C";
import {HK_HK416_D10} from "~/crafting/weapon/weapons/HK_HK416";
import {HK_HK416_D14_5} from "~/crafting/weapon/weapons/HK_HK416_D14_5";
import {M16A1} from "~/crafting/weapon/weapons/M16A1";
import {MCR_Carbine_Damascus} from "~/crafting/weapon/weapons/MCR_Carbine_Damascus";
import {MCR_Carbine_Tan} from "~/crafting/weapon/weapons/MCR_Carbine_Tan";
import {MSBS_Grot} from "~/crafting/weapon/weapons/MSBS_Grot";
import {MSBS_Grot_MR} from "~/crafting/weapon/weapons/MSBS_Grot_MR";
import {MX} from "~/crafting/weapon/weapons/MX";
import {MXC} from "~/crafting/weapon/weapons/MXC";
import {MXM} from "~/crafting/weapon/weapons/MXM";
import {QBU_88_Black} from "~/crafting/weapon/weapons/QBU_88_Black";
import {QBZ_95_1_Black} from "~/crafting/weapon/weapons/QBZ_95_1_Black";
import {Remington_ACR_E_Carbine_Black} from "~/crafting/weapon/weapons/Remington_ACR_E_Carbine_Black";
import {Remington_ACR_E_Cliffhanger} from "~/crafting/weapon/weapons/Remington_ACR_E_Cliffhanger";
import {SCAR_H_Black} from "~/crafting/weapon/weapons/SCAR_H_Black";
import {SCAR_H_Gold} from "~/crafting/weapon/weapons/SCAR_H_Gold";
import {Steyr_AUGA3_Black} from "~/crafting/weapon/weapons/Steyr_AUGA3_Black";
import {Remington_ACR_E_Long_Black} from "~/crafting/weapon/weapons/Remington_ACR_E_Long_Black";

export const weaponsCategory = new CraftCategory(
    'weapons',
    'Waffen',
    'Waffen',
    FireIcon,
    'text-yellow-500',
    'bg-yellow-100',
    [
        AR15_Magpul_Carbine,
        AR15_SLR_Custom,
        ASR_14,
        BCM_Jack_Carbine,
        Colt_M4A1_Carbine_Carryhandle,
        CTAR_21,
        Desert_Tech_MDR,
        Desert_Tech_MDR_Rainbow_5_56,
        Famas_G2,
        FN_P90_5_7mm,
        HK_G36C,
        HK_G36K_KSK,
        HK_G36K_MLIC,
        HK_G36CV_TAC,
        HK_HK416_D10,
        HK_HK416_D14_5,
        M16A1,
        MCR_Carbine_Damascus,
        MCR_Carbine_Tan,
        MSBS_Grot,
        MSBS_Grot_MR,
        MX,
        MXC,
        MXM,
        QBU_88_Black,
        QBZ_95_1_Black,
        Remington_ACR_E_Carbine_Black,
        Remington_ACR_E_Long_Black,
        Remington_ACR_E_Cliffhanger,
        SCAR_H_Black,
        SCAR_H_Gold,
        Steyr_AUGA3_Black
    ],
    weaponsCraftingCategory,
    10,
)