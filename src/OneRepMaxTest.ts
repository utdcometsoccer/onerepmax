import { AdamsOneRepMaxCalculator } from "./AdamsOneRepMaxCalculator";
import { BaechleOneRepMaxCalculator } from "./BaechleOneRepMaxCalculator";
import { BergerOneRepMaxCalculator } from "./BergerOneRepMaxCalculator";
import { BrownOneRepMaxCalculator } from "./BrownOneRepMaxCalculator";
import { BrzyckiOneRepMaxCalculator } from "./BrzyckiOneRepMaxCalculator";
import { EpleyOneRepMaxCalculator } from "./EpleyOneRepMaxCalculator";
import { KemmlerOneRepMaxCalculator } from "./KemmlerOneRepMaxCalculator";
import { LandersOneRepMaxCalculator } from "./LandersOneRepMaxCalculator";
import { LombardiOneRepMaxCalculator } from "./LombardiOneRepMaxCalculator";
import { MayhewOneRepMaxCalculator } from "./MayhewOneRepMaxCalculator";
import { NaclerioOneRepMaxCalculator } from "./NaclerioOneRepMaxCalculator";
import { OConnerOneRepMaxCalculator } from "./OConnerOneRepMaxCalculator";
import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";
import { WalthenOneRepMaxCalculator } from "./WalthenOneRepMaxCalculator";


function getRandomInt(min: number, max: number): number {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function testOneRepMax(args: OneRepMaxArguments, calculator: OneRepMaxCalculator) {
    const oneRepMax = calculator.calculate(args);
    console.log(`One Rep Max calculator: ${calculator.name} calculated value: ${oneRepMax} from repetitions: ${args.repetitions} and weight: ${args.weight}`);
}

export function OneRepMaxTest() {
    const oneRepMaxArgs: OneRepMaxArguments = {
        repetitions: getRandomInt(1, 20),
        weight: getRandomInt(10, 400)
    };

    const calculators: OneRepMaxCalculator[] = [
        new AdamsOneRepMaxCalculator(),
        new BaechleOneRepMaxCalculator(),
        new BergerOneRepMaxCalculator(),
        new BrownOneRepMaxCalculator(),
        new BrzyckiOneRepMaxCalculator(),
        new EpleyOneRepMaxCalculator(),
        new KemmlerOneRepMaxCalculator(),
        new LandersOneRepMaxCalculator(),
        new LombardiOneRepMaxCalculator(),
        new MayhewOneRepMaxCalculator(),
        new NaclerioOneRepMaxCalculator(),
        new OConnerOneRepMaxCalculator(),
        new WalthenOneRepMaxCalculator()
    ];
    calculators.forEach((calculator: OneRepMaxCalculator) => testOneRepMax(oneRepMaxArgs, calculator));
}

