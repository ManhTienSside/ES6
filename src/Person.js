export class Person {
    total = 0;
    constructor(id,fullName,address,email){
        this.id = id;
        this.fullName=fullName;
        this.address=address;
        this.email=email;
    }
    getTotal() {
        return this.total;
    }
    getActive(){
        console.log('shapr-side');
    }
}