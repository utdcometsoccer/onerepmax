import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";

export class AdamsOneRepMaxCalculator implements OneRepMaxCalculator{
    name: string;
    calculate(args: OneRepMaxArguments){
        const weight = args.weight;
        const repetitions = args.repetitions;
        return weight * (1/(1-(0.02*repetitions)));
    }
    /**
     *
     */
    constructor() {
        this.name = 'Adams';
        
    }
}