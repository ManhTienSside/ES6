export class ListPerson {
    arrayPerson = [];
    addPerson(person) {
        return this.arrayPerson.push(person);
    }
    getPersonById(id) {
        let findIndexId=-1;
        this.arrayPerson.map((person,index)=>{
            if (person.id === id) {
                findIndexId=index;
            }
        })
        return findIndexId;
    }
    getValueID(id) {
        let indexByID= this.getPersonById(id);
        if(indexByID>-1){
            return true;
        }else{
            return false;
        }

    };
    deletePersonById (id) {
        let deleteIndex = this.getPersonById(id);
        if( deleteIndex >-1) {
            this.arrayPerson.splice(deleteIndex,1);
        }
    }
    updatePerSon (person) {
        let indexUpdate = this.getPersonById(person.id);
        if(indexUpdate >-1) {
            this.arrayPerson[indexUpdate]=person;
        }
    }
    getDetailPersonById(id){
        let indexDetail = this.getPersonById(id);
        if( indexDetail >-1) {
            return this.arrayPerson[indexDetail];
        }
    } 
}