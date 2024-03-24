import { OneRepMaxArguments } from "./OneRepMaxArguments";

export interface OneRepMaxCalculator{
    readonly name: string;
    calculate: (args:OneRepMaxArguments)=> number;
    readonly description?: string;
    readonly reference?: string;
}