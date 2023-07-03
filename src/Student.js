import { Person } from "./Person.js";
export class Student extends Person {
    constructor (toan,ly,hoa, ...restParameter) {
        super(...restParameter);
        this.toan =toan;
        this.ly=ly;
        this.hoa=hoa;
        this.type = 'Student';
    }
    getTotal(){
        this.total = (this.toan + this.ly+ this.hoa)/3;
        return this.total;
    }
    getActive(){
        return `
        <h3>Mã:${this.id}</h3>
        <p>${this.fullName}</p>
        <p>Tính Trung Binh= ${this.getTotal()}</p>
        `
    }
}