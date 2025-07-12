import {CraftCategory} from "~/types/crafting";
import {TruckIcon} from "@heroicons/vue/20/solid";
import {vehiclesCategory} from "~/crafting/vehicle";
import {MAN_TGX_2021_Container} from "~/crafting/vehicle/truck/MAN_TGX_2021_Container";
import {Mercedes_Benz_Actros_7T} from "~/crafting/vehicle/truck/Mercedes_Benz_Actros_7T";
import {Mercedes_Benz_Actros_14T} from "~/crafting/vehicle/truck/Mercedes_Benz_Actros_14T";
import {Mercedes_Sprinter_Offroad} from "~/crafting/vehicle/truck/Mercedes_Sprinter_Offroad";
import {Mercedes_Sprinter_Rebellen} from "~/crafting/vehicle/truck/Mercedes_Sprinter_Rebellen";
import {Renault_Magnum} from "~/crafting/vehicle/truck/Renault_Magnum";
import {Renault_Midlum} from "~/crafting/vehicle/truck/Renault_Midlum";
import {Scania_V8_R620_7T} from "~/crafting/vehicle/truck/Scania_V8_R620_7T";
import {Scania_V8_R620_14T} from "~/crafting/vehicle/truck/Scania_V8_R620_14T";
import {Volvo_FH13_Tanklaster} from "~/crafting/vehicle/truck/Volvo_FH13_Tanklaster";

export const truckCategory = new CraftCategory(
    'truck',
    'LKW',
    'LKW und Transporter die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        MAN_TGX_2021_Container,
        Mercedes_Benz_Actros_7T,
        Mercedes_Benz_Actros_14T,
        Mercedes_Sprinter_Offroad,
        Mercedes_Sprinter_Rebellen,
        Renault_Magnum,
        Renault_Midlum,
        Scania_V8_R620_7T,
        Scania_V8_R620_14T,
        Volvo_FH13_Tanklaster,
    ],
    vehiclesCategory,
    10,
)