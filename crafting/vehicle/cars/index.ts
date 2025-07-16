import {CraftCategory} from "~/types/crafting";
import {TruckIcon} from "@heroicons/vue/20/solid";
import {vehiclesCategory} from "~/crafting/vehicle";
import {Audi_A4} from "~/crafting/vehicle/cars/Audi_A4";
import {Audi_A6_Avant_2019} from "~/crafting/vehicle/cars/Audi_A6_Avant_2019";
import {Audi_A8} from "~/crafting/vehicle/cars/Audi_A8";
import {Audi_A8_Limousine} from "~/crafting/vehicle/cars/Audi_A8_Limousine";
import {Audi_Q7} from "~/crafting/vehicle/cars/Audi_Q7";
import {Audi_R8_V10} from "~/crafting/vehicle/cars/Audi_R8_V10";
import {Audi_RS4} from "~/crafting/vehicle/cars/Audi_RS4";
import {Audi_RS5} from "~/crafting/vehicle/cars/Audi_RS5";
import {Audi_RS6_Avant} from "~/crafting/vehicle/cars/Audi_RS6_Avant";
import {BMW_3er_G20} from "~/crafting/vehicle/cars/BMW_3er_G20";
import {BMW_3er_G21} from "~/crafting/vehicle/cars/BMW_3er_G21";
import {BMW_5er_F11} from "~/crafting/vehicle/cars/BMW_5er_F11";
import {BMW_M3_G81} from "~/crafting/vehicle/cars/BMW_M3_G81";
import {BMW_M5} from "~/crafting/vehicle/cars/BMW_M5";
import {BMW_M6} from "~/crafting/vehicle/cars/BMW_M6";
import {BMW_X5} from "~/crafting/vehicle/cars/BMW_X5";
import {Dodge_Challenger_Hellcat} from "~/crafting/vehicle/cars/Dodge_Challenger_Hellcat";
import {Dodge_Charger_Hellcat} from "~/crafting/vehicle/cars/Dodge_Charger_Hellcat";
import {Dodge_Durango} from "~/crafting/vehicle/cars/Dodge_Durango";
import {Dodge_Viper_SRT} from "~/crafting/vehicle/cars/Dodge_Viper_SRT";
import {Ford_Mustang} from "~/crafting/vehicle/cars/Ford_Mustang";
import {Ford_Raptor_Offroad} from "~/crafting/vehicle/cars/Ford_Raptor_Offroad";
import {Ford_GT} from "~/crafting/vehicle/cars/Ford_GT";
import {Golf_7} from "~/crafting/vehicle/cars/Golf_7";
import {VW_Touareg_2019} from "~/crafting/vehicle/cars/VW_Touareg_2019";
import {Hummer_H1} from "~/crafting/vehicle/cars/Hummer_H1";
import {Hummer_H2} from "~/crafting/vehicle/cars/Hummer_H2";
import {Jaguar_XF_2013} from "~/crafting/vehicle/cars/Jaguar_XF_2013";
import {Jaguar_F_Type_R} from "~/crafting/vehicle/cars/Jaguar_F_Type_R";
import {Lamborghini_Huracan} from "~/crafting/vehicle/cars/Lamborghini_Huracan";
import {Lamborghini_Urus} from "~/crafting/vehicle/cars/Lamborghini_Urus";
import {Mercedes_Benz_AMG_GT_63S} from "~/crafting/vehicle/cars/Mercedes_Benz_AMG_GT_63S";
import {Mercedes_Benz_CLS_Shooting_Brake} from "~/crafting/vehicle/cars/Mercedes_Benz_CLS_Shooting_Brake";
import {Mercedes_Benz_G65_AMG} from "~/crafting/vehicle/cars/Mercedes_Benz_G65_AMG";
import {Mercedes_C63S_AMG} from "~/crafting/vehicle/cars/Mercedes_C63S_AMG";
import {Mercedes_CLK_AMG} from "~/crafting/vehicle/cars/Mercedes_CLK_AMG";
import {Mercedes_E_Klasse} from "~/crafting/vehicle/cars/Mercedes_E_Klasse";
import {Mercedes_E_Klasse_Avantgarde} from "~/crafting/vehicle/cars/Mercedes_E_Klasse_Avantgarde";
import {Mercedes_E_Klasse_T} from "~/crafting/vehicle/cars/Mercedes_E_Klasse_T";
import {Mercedes_ML_350} from "~/crafting/vehicle/cars/Mercedes_ML_350";
import {Mercedes_S600} from "~/crafting/vehicle/cars/Mercedes_S600";
import {Mercedes_X_Klasse} from "~/crafting/vehicle/cars/Mercedes_X_Klasse";
import {Nissan_GTR} from "~/crafting/vehicle/cars/Nissan_GTR";
import {Nissan_Skyline_GTR_34} from "~/crafting/vehicle/cars/Nissan_Skyline_GTR_34";
import {Porsche_911_1995} from "~/crafting/vehicle/cars/Porsche_911_1995";
import {Porsche_911_GT3RS} from "~/crafting/vehicle/cars/Porsche_911_GT3RS";
import {Porsche_Boxter_2016} from "~/crafting/vehicle/cars/Porsche_Boxter_2016";
import {Porsche_Panamera} from "~/crafting/vehicle/cars/Porsche_Panamera";
import {Tesla_Cyber_Truck} from "~/crafting/vehicle/cars/Tesla_Cyber_Truck";
import {Tesla_Model_S} from "~/crafting/vehicle/cars/Tesla_Model_S";
import {Toyota_Supra_2020} from "~/crafting/vehicle/cars/Toyota_Supra_2020";
import {Toyota_Supra_MK4} from "~/crafting/vehicle/cars/Toyota_Supra_MK4";
import {Aston_Martin_Virage} from "~/crafting/vehicle/cars/Aston_Martin_Virage";
import {Bentley_Continental_GT} from "~/crafting/vehicle/cars/Bentley_Continental_GT";
import {Buggy_Offroad} from "~/crafting/vehicle/cars/Buggy_Offroad";
import {Chevrolet_Camaro_ZL1_SSX} from "~/crafting/vehicle/cars/Chevrolet_Camaro_ZL1_SSX";
import {Chrysler_300} from "~/crafting/vehicle/cars/Chrysler_300";
import {Ferrari_F430_Scuderia} from "~/crafting/vehicle/cars/Ferrari_F430_Scuderia";
import {GMC_Yukon_2015} from "~/crafting/vehicle/cars/GMC_Yukon_2015";
import {Hymer_MLI_2015} from "~/crafting/vehicle/cars/Hymer_MLI_2015";
import {Lexus_is_200t} from "~/crafting/vehicle/cars/Lexus_is_200t";
import {McLaren_MP4} from "~/crafting/vehicle/cars/McLaren_MP4";
import {Rolls_Royce_Wraith} from "~/crafting/vehicle/cars/Rolls_Royce_Wraith";
import {Subaru_WRX_STI} from "~/crafting/vehicle/cars/Subaru_WRX_STI";
import {Volvo_XC90} from "~/crafting/vehicle/cars/Volvo_XC90";

export const carsCategory = new CraftCategory(
    'cars',
    'PKW',
    'PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [],
    vehiclesCategory,
)

export const audiCategory = new CraftCategory(
    'audi',
    'Audi',
    'Audi PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Audi_A4,
        Audi_A6_Avant_2019,
        Audi_A8,
        Audi_A8_Limousine,
        Audi_Q7,
        Audi_R8_V10,
        Audi_RS4,
        Audi_RS5,
        Audi_RS6_Avant,
    ],
    carsCategory,
)

export const bmwCategory = new CraftCategory(
    'bmw',
    'BMW',
    'BMW PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        BMW_3er_G20,
        BMW_3er_G21,
        BMW_5er_F11,
        BMW_M3_G81,
        BMW_M5,
        BMW_M6,
        BMW_X5,
    ],
    carsCategory,
)

export const dodgeCategory = new CraftCategory(
    'dodge',
    'Dodge',
    'Dodge PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Dodge_Challenger_Hellcat,
        Dodge_Charger_Hellcat,
        Dodge_Durango,
        Dodge_Viper_SRT,
    ],
    carsCategory,
)

export const fordCategory = new CraftCategory(
    'ford',
    'Ford',
    'Ford PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Ford_GT,
        Ford_Mustang,
        Ford_Raptor_Offroad,
    ],
    carsCategory,
)

export const vwCategory = new CraftCategory(
    'vw',
    'Volkswagen',
    'Volkswagen PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Golf_7,
        VW_Touareg_2019,
    ],
    carsCategory,
)

export const hummerCategory = new CraftCategory(
    'hummer',
    'Hummer',
    'Hummer PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Hummer_H1,
        Hummer_H2
    ],
    carsCategory,
)

export const jaguarCategory = new CraftCategory(
    'jaguar',
    'Jaguar',
    'Jaguar PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Jaguar_F_Type_R,
        Jaguar_XF_2013,
    ],
    carsCategory,
)

export const lamborghiniCategory = new CraftCategory(
    'lamborghini',
    'Lamborghini',
    'Lamborghini PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Lamborghini_Huracan,
        Lamborghini_Urus
    ],
    carsCategory,
)

export const mercedesCategory = new CraftCategory(
    'mercedes',
    'Mercedes-Benz',
    'Mercedes-Benz PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Mercedes_Benz_AMG_GT_63S,
        Mercedes_Benz_CLS_Shooting_Brake,
        Mercedes_Benz_G65_AMG,
        Mercedes_C63S_AMG,
        Mercedes_CLK_AMG,
        Mercedes_E_Klasse,
        Mercedes_E_Klasse_Avantgarde,
        Mercedes_E_Klasse_T,
        Mercedes_ML_350,
        Mercedes_S600,
        Mercedes_X_Klasse,
    ],
    carsCategory,
)

export const nissanCategory = new CraftCategory(
    'nissan',
    'Nissan',
    'Nissan PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Nissan_GTR,
        Nissan_Skyline_GTR_34
    ],
    carsCategory,
)

export const porscheCategory = new CraftCategory(
    'porsche',
    'Porsche',
    'Porsche PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Porsche_911_1995,
        Porsche_911_GT3RS,
        Porsche_Boxter_2016,
        Porsche_Panamera,
    ],
    carsCategory,
)

export const teslaCategory = new CraftCategory(
    'tesla',
    'Tesla',
    'Tesla PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Tesla_Cyber_Truck,
        Tesla_Model_S,
    ],
    carsCategory,
)

export const toyotaCategory = new CraftCategory(
    'toyota',
    'Toyota',
    'Toyota PKW die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Toyota_Supra_2020,
        Toyota_Supra_MK4,
    ],
    carsCategory,
)

export const otherVehicleCategory = new CraftCategory(
    'other_vehicle',
    'Sonstige Fahrzeuge',
    'Sonstige Fahrzeuge die nur gecraftet werden können.',
    TruckIcon,
    'text-blue-500',
    'bg-blue-200',
    [
        Aston_Martin_Virage,
        Bentley_Continental_GT,
        Buggy_Offroad,
        Chevrolet_Camaro_ZL1_SSX,
        Chrysler_300,
        Ferrari_F430_Scuderia,
        GMC_Yukon_2015,
        Hymer_MLI_2015,
        Lexus_is_200t,
        McLaren_MP4,
        Rolls_Royce_Wraith,
        Subaru_WRX_STI,
        Volvo_XC90,
    ],
    carsCategory,
)