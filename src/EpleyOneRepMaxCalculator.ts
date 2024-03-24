import { OneRepMaxArguments } from "./OneRepMaxArguments";
import { OneRepMaxCalculator } from "./OneRepMaxCalculator";

export class EpleyOneRepMaxCalculator implements OneRepMaxCalculator {
    name: string;
    calculate(args:OneRepMaxArguments) {

        const weight = args.weight;
        const repetitions = args.repetitions;
        return weight*(1+(repetitions/30));
    };
    description?: string;

    constructor(){
        this.name = 'Epley';
    }

}