import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";

export class KemmlerOneRepMaxCalculator implements OneRepMaxCalculator {
    name: string;
    calculate(args: OneRepMaxArguments) {
        const weight = args.weight;
        const repetitions = args.repetitions;
        return weight * (0.988 + (0.0104 * repetitions) + (0.00190 * Math.pow(repetitions, 2)) - (0.0000584 * Math.pow(repetitions, 3)));
    }
    /**
     *
     */
    constructor() {
        this.name = 'Kemmler   et al';
    }
}