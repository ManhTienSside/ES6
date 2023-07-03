import { Person } from "./Person.js";
export class Customer extends Person {
    constructor (nameEntity,price,rating, ...restParameter) {
        super(...restParameter);
        this.nameEntity = nameEntity;
        this.price = price;
        this.rating = rating;
        this.type = 'Customer';
        this.active = ''
    }
    getActive(){
        return this.active= `
        <p>Đánh Giá = ${this.rating}</p>
        `
    }
}