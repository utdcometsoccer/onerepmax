import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";

export class BergerOneRepMaxCalculator implements OneRepMaxCalculator{
    name: string;
    calculate(args: OneRepMaxArguments){
        const weight = args.weight;
        const repetitions = args.repetitions;
        return weight * (1 / (1.0261*( Math.pow(Math.E, (-0.0262*repetitions)))));
    }
    /**
     *
     */
    constructor() {
        this.name = 'Berger';        
    }
}