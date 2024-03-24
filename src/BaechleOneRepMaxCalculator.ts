import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";

export class BaechleOneRepMaxCalculator implements OneRepMaxCalculator{
    name: string;
    calculate(args: OneRepMaxArguments){
        const weight = args.weight;
        const repetitions = args.repetitions;
        return weight * (1 + (0.033*repetitions));
    }
    /**
     *
     */
    constructor() {
        this.name = 'Baechle';        
    }
}