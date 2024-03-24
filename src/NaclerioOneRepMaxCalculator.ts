import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";

export class NaclerioOneRepMaxCalculator implements OneRepMaxCalculator {
    name: string;
    calculate(args: OneRepMaxArguments) {
        const weight = args.weight;
        const repetitions = args.repetitions;
        return weight * (1 / (0.951 * Math.pow(Math.E, -0.021 * repetitions)));
    }
    /**
     *
     */
    constructor() {
        this.name = 'Naclerio et al';
    }
}