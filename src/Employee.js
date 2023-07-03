import { Person } from "./Person.js";

export class Employee extends Person {
    constructor (date,salary,...restParameter) {
        super(...restParameter);
        this.date = date;
        this.salary = salary;
        this.type = 'Employee';
        this.total=0;
    }
    getActive() {
        this.total = this.date * this.salary;
        return this.total;
    }
}