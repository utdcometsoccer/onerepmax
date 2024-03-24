import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";

export class BrzyckiOneRepMaxCalculator implements OneRepMaxCalculator{
    name: string;
    calculate(args: OneRepMaxArguments){
        const weight = args.weight;
        const repetitions = args.repetitions;
        return weight * (36/(37-repetitions));
    }
    /**
     *
     */
    constructor() {
        this.name = 'Brzycki';
        
    }
}