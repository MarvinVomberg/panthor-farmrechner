import {applePieProduction} from "~/farmroutes/applepie";
import {beerProduction} from "~/farmroutes/beer";
import {cableProduction} from "~/farmroutes/cable";
import {clayplateProduction} from "~/farmroutes/clayplate";
import {biscuitProduction} from "~/farmroutes/biscuit";
import {doorProduction} from "~/farmroutes/door";
import {fentanylSyringeProduction} from "~/farmroutes/fentanyl_r";
import {fishSticksProduction} from "~/farmroutes/fish_sticks";
import {grapeCakeProduction} from "~/farmroutes/grapecake";
import {insulationProduction} from "~/farmroutes/insulation";
import {lsdProduction} from "~/farmroutes/lsd";
import {moonshinerProduction} from "~/farmroutes/moonshiner";
import {steelBarProduction} from "~/farmroutes/steel_r";
import {windowProduction} from "~/farmroutes/window";
import {ironBarProduction} from "~/farmroutes/iron_bar";
import {chemicalsProduction} from "~/farmroutes/chemicals";
import {aluminumBarProduction} from "~/farmroutes/alu_bar";
import {copperBarProduction} from "~/farmroutes/copper_r";
import {oilProduction} from "~/farmroutes/oil_r";
import {plasticProduction} from "~/farmroutes/plastic";
import {boardsProduction} from "~/farmroutes/wood_r";
import {appleJuiceProduction} from "~/farmroutes/apple_juice";
import {breadProduction} from "~/farmroutes/bread";
import {charcoalProduction} from "~/farmroutes/charcoal";
import {brickProduction} from "~/farmroutes/clay_r";
import {cottonProduction} from "~/farmroutes/cotton";
import {appleProduction} from "~/farmroutes/apple";
import {rollProduction} from "~/farmroutes/bread_roll";
import {concreteProduction} from "~/farmroutes/concrete";
import {grainboozeProduction} from "~/farmroutes/grainbooze";
import {leatherProduction} from "~/farmroutes/leather";
import {preciousMetalsProduction} from "~/farmroutes/precious_metal_r";
import {fishFiletProduction} from "~/farmroutes/fishfilet";
import type {GenericProduction} from "~/farmroutes/production";
import {jewelryProduction} from "~/farmroutes/jewelry";
import {ciderProduction} from "~/farmroutes/applewine";
import {meatProduction} from "~/farmroutes/meat_r";
import {honeyProduction} from "~/farmroutes/honey_r";
import {glassProduction} from "~/farmroutes/sand_r";
import {vodkaProduction} from "~/farmroutes/vodka";
import {wheatFlourProduction} from "~/farmroutes/wheat_flour";
import {sugarProduction} from "~/farmroutes/sugar_r";
import {ryeFlourProduction} from "~/farmroutes/rye_r";
import {tissueProduction} from "~/farmroutes/tissue";
import {wineProduction} from "~/farmroutes/wine_r";
import {grapeJuiceProduction} from "~/farmroutes/grape_juice";
import {rubberProduction} from "~/farmroutes/rubber";
import {titaniumBarProduction} from "~/farmroutes/titanium_r";

interface Farmroutes {
    [key: string]: GenericProduction;
}

export const farmroutes: Farmroutes = {
    aluminum_r: aluminumBarProduction,
    apple: appleProduction,
    apple_juice: appleJuiceProduction,
    applepie: applePieProduction,
    applewine: ciderProduction,
    beer: beerProduction,
    biscuit: biscuitProduction,
    wood_r: boardsProduction,
    bread: breadProduction,
    honey_r: honeyProduction,
    roll: rollProduction,
    cable: cableProduction,
    concrete: concreteProduction,
    charcoal_r: charcoalProduction,
    chemicals: chemicalsProduction,
    clayplate: clayplateProduction,
    clay_r: brickProduction,
    copper_r: copperBarProduction,
    cotton_r: cottonProduction,
    door: doorProduction,
    fentanyl_r: fentanylSyringeProduction,
    fishsticks: fishSticksProduction,
    fishfilet: fishFiletProduction,
    grapecake: grapeCakeProduction,
    grape_juice: grapeJuiceProduction,
    grainbooze: grainboozeProduction,
    thermal_insulation: insulationProduction,
    iron_r: ironBarProduction,
    jewelry: jewelryProduction,
    leather: leatherProduction,
    lsd: lsdProduction,
    meat_r: meatProduction,
    moonshiner: moonshinerProduction,
    oil_r: oilProduction,
    plastic: plasticProduction,
    precious_metal_r: preciousMetalsProduction,
    steel: steelBarProduction,
    sand_r: glassProduction,
    window: windowProduction,
    vodka: vodkaProduction,
    wheat_r: wheatFlourProduction,
    sugar_r: sugarProduction,
    rye_r: ryeFlourProduction,
    tissue: tissueProduction,
    wine_r: wineProduction,
    rubber: rubberProduction,
    titanium_r: titaniumBarProduction,
}