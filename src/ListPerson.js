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
    findByType(type){
        let arrayFindType = [];
        let valueType = type.toLowerCase().replace(/\s/g,'');
        this.arrayPerson.map((person)=>{
            let resultType = person.type.toLowerCase().replace(/\s/g,'').indexOf(valueType);
            if(resultType>-1){
                arrayFindType.push(person);
            }
        })
        return arrayFindType;
    }
    
}