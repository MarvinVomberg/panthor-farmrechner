import {BP_AMS} from "~/crafting/weapon/attachments/BP_AMS";
import {BP_DMS} from "~/crafting/weapon/attachments/BP_DMS";
import {BP_Khalia} from "~/crafting/weapon/attachments/BP_Khalia";
import {BP_SOS} from "~/crafting/weapon/attachments/BP_SOS";
import {weaponsCraftingCategory} from "~/crafting/weapon";
import {CraftCategory} from "~/types/crafting";
import {PaperClipIcon} from "@heroicons/vue/16/solid";

export const weaponAttachmentsCategory = new CraftCategory(
    'weapon_attachments',
    'Waffen Aufsätze',
    'Visiere und Schalldämpfer für Waffen',
    PaperClipIcon,
    'text-red-500',
    'bg-red-100',
    [
        BP_AMS,
        BP_DMS,
        BP_Khalia,
        BP_SOS,
    ],
    weaponsCraftingCategory
)