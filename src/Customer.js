import { Person } from "./Person.js";
export class Customer extends Person {
    constructor (nameEntity,price,rating, ...restParameter) {
        super(...restParameter);
        this.nameEntity = nameEntity;
        this.price = price;
        this.rating = rating;
        this.type = 'Customer';
        
    }
    getActive(){
        return `
        <h3>Mã:${this.id}</h3>
        <p>Tên: = ${ this.nameEntity}</p>
        <p>Đánh Chất Lượng = ${this.rating}</p>
        <p>Đánh Giá Đơn Hàng = ${this.price}</p>
        `
    }
}