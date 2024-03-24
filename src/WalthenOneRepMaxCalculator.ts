import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";

export class WalthenOneRepMaxCalculator implements OneRepMaxCalculator {
    name: string;
    calculate(args: OneRepMaxArguments) {
        const weight = args.weight;
        const repetitions = args.repetitions;
        return weight * (1 / (0.4880 + (0.538 * Math.pow(Math.E, -0.075 * repetitions))));
    }
    /**
     *
     */
    constructor() {
        this.name = 'Walthen';
    }
}