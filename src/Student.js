import { Person } from "./Person.js";
export class Student extends Person {
    constructor (toan,ly,hoa, ...restParameter) {
        super(...restParameter);
        this.toan =toan;
        this.ly=ly;
        this.hoa=hoa;
        this.active = 0;
        this.type = 'Student';
    }
    getActive(){
        this.active = (this.toan + this.ly+ this.hoa)/3;
        return this.active;
    }
}