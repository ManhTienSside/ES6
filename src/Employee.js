import { Person } from "./Person.js";

export class Employee extends Person {
    constructor (date,salary,...restParameter) {
        super(...restParameter);
        this.date = date;
        this.salary = salary;
        this.type = 'Employee';
    }
    getTotal() {
        this.total = (this.date * this.salary);
        return this.total;
    }
    getActive(){
        return `
        <h3>Mã:${this.id}</h3>
        <p>${this.fullName}</p>
        <p>Tính Tổng= ${this.getTotal()}</p>
        `
    }
}