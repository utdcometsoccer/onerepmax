import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";

export class LandersOneRepMaxCalculator implements OneRepMaxCalculator {
    name: string;
    calculate(args: OneRepMaxArguments) {
        const weight = args.weight;
        const repetitions = args.repetitions;
        return weight * (1 / (1.013 - (0.0267123 * repetitions)));
    }
    /**
     *
     */
    constructor() {
        this.name = 'Landers';
    }
}