import {CraftCategory} from "~/types/crafting";
import {vehiclesCategory} from "~/crafting/vehicle";
import {Cog8ToothIcon} from "@heroicons/vue/16/solid";
import {Golfcart} from "~/crafting/vehicle/golfcarts/Golfcart";
import {GolfcartBBQ} from "~/crafting/vehicle/golfcarts/GolfcartBBQ";
import {GolfcartCargo} from "~/crafting/vehicle/golfcarts/GolfcartCargo";
import {GolfcartSoundbox} from "~/crafting/vehicle/golfcarts/GolfcartSoundbox";

export const golfcartCategory = new CraftCategory(
    'golfcarts',
    'Golfcarts',
    'Golfcarts sind kleine, wendige Fahrzeuge, die für den Einsatz auf Golfplätzen und in Freizeitparks konzipiert sind.',
    Cog8ToothIcon,
    'text-green-500',
    'bg-green-200',
    [
        Golfcart,
        GolfcartBBQ,
        GolfcartCargo,
        GolfcartSoundbox
    ],
    vehiclesCategory
)