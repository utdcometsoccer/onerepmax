import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";

export class OConnerOneRepMaxCalculator implements OneRepMaxCalculator {
    name: string;
    calculate(args: OneRepMaxArguments) {
        const weight = args.weight;
        const repetitions = args.repetitions;
        return weight * (1 + (0.025*repetitions));
    }
    /**
     *
     */
    constructor() {
        this.name = "O'Conner et al";
    }
}