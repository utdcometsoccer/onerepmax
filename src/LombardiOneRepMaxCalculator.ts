import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";

export class LombardiOneRepMaxCalculator implements OneRepMaxCalculator {
    name: string;
    calculate(args: OneRepMaxArguments) {
        const weight = args.weight;
        const repetitions = args.repetitions;
        return weight * (Math.pow(repetitions, 0.10));
    }
    /**
     *
     */
    constructor() {
        this.name = 'Lombardi';
    }
}