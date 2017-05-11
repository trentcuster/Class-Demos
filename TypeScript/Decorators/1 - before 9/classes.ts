import * as Interfaces from './interfaces';
import {sealed, Logger, Writable} from "./decorators";

@sealed(`UniversityLibrarian`)
class UniversityLibrarian implements Interfaces.Librarian {
    name: string; //Property
    email: string; //Property
    department: string; //Property

    constructor() {
        console.log("Hello from constructor");
    }

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

@Logger
export class PublicLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log('Assisting customer.');
    }
    @Writable(false)
    teachCommunity() {
        console.log('Teaching community.');
    }
}

abstract class ReferenceItem {

    private _publisher: string;
    static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;

}

export { UniversityLibrarian, ReferenceItem };
