import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";

export class MayhewOneRepMaxCalculator implements OneRepMaxCalculator {
    name: string;
    calculate(args: OneRepMaxArguments) {
        const weight = args.weight;
        const repetitions = args.repetitions;
        return weight * (1 / (0.522 + (0.419 * Math.pow(Math.E, -0.055 * repetitions))));
    }
    /**
     *
     */
    constructor() {
        this.name = 'Mayhew';
    }
}