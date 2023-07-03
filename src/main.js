import { Person } from "./Person.js";
import {ListPerson} from "./ListPerson.js";
import { Customer } from "./Customer.js";
import { Employee } from "./Employee.js";
import { Student } from "./Student.js";
import { Validation } from "./Validation.js";
let listPerson = new ListPerson();
let valid = new Validation();
function setLocalStorage() {
  localStorage.setItem('person',JSON.stringify(listPerson.arrayPerson))
}
function getLocalStorgage() {
  let dataPerson = JSON.parse(localStorage.getItem('person'));
  if(dataPerson !== null){
    showInfor(dataPerson);
    listPerson.arrayPerson = dataPerson;
  }
}
getLocalStorgage();
document.getElementById('btnAdd').addEventListener('click',()=>{
  const id = document.getElementById('txtId').value;
  const name = document.getElementById('txtName').value;
  const email = document.getElementById('txtEmail').value;
  const address = document.getElementById('txtAddress').value;
  let isValid = true;
  isValid &=valid.checkEmpty(id,'spanId','khong de trong') &&
  valid.checkNumber(id,'spanId','phai la so');

  isValid &=valid.checkEmpty(name,'spanName','khong de trong')&&
  valid.checkName(name,'spanName',"khong duoc dung so") ;
  
  isValid &=valid.checkEmail(email,'spanEmail',"khong dung format email") &&
  valid.checkEmpty(name,'spanEmail','khong de trong');

  isValid &=valid.checkEmpty(address,'spanAddress','khong de trong');

  if(isValid){
    const toan = Number(document.getElementById('txtDiemToan').value);
    const ly = Number(document.getElementById('txtDiemLy').value);
    const hoa = Number(document.getElementById('txtDiemHoa').value);

    const nameEntity = document.getElementById('txtNameEntity').value;
    const price = Number(document.getElementById('txtPrice').value);
    const rating = document.getElementById('txtRating').value;

    const date = Number(document.getElementById('txtDate').value);
    const salary = Number(document.getElementById('txtSalary').value);
      if(toan>0&&toan<=10&&ly>0&&ly<=10&&hoa>0&&hoa<=10){
          const person =new Student(toan,ly,hoa,id,name,address,email);
          person.getActive();
          if(listPerson.getValueID(person.id) === false){
            listPerson.addPerson(person);
            setLocalStorage();
            showInfor(listPerson.arrayPerson);
            document.getElementById('mainPerson').innerHTML=person.getActive();
            console.log(person);
            document.getElementById('formPerson').reset();
          }else{
            alert ('id da ton tai');
          }
      }else if(nameEntity!== "" && price>0 && rating!== "") {
            const person =new Customer(nameEntity,price,rating,id,name,address,email);
            
            if(listPerson.getValueID(person.id) === false){
              listPerson.addPerson(person);
              setLocalStorage();
              showInfor(listPerson.arrayPerson);
              document.getElementById('mainPerson').innerHTML=person.getActive();
              document.getElementById('formPerson').reset();
            }else{
              alert ('id da ton tai');
            }
          
      }else if(date>0 && salary>0) {
          const person =new Employee(date,salary,id,name,address,email);
          if(listPerson.getValueID(person.id) === false){
            listPerson.addPerson(person);
            setLocalStorage();
            showInfor(listPerson.arrayPerson);
            document.getElementById('mainPerson').innerHTML=person.getActive();
            document.getElementById('formPerson').reset();
          }else{
            alert ('id da ton tai');
          }
      }else (
        alert('dien sai thong tin')
      )
  }
  
});

function showInfor(listPerson) {
  const content = listPerson.map((person) => {
    
    //destructuring skill
    const { id, fullName, address, email,type} = person;
    return `
          <tr>
                <td>${id}</td>
                <td>${fullName}</td>
                <td>${email}</td>
                <td>${address}</td>
                <td>${type}</td>
                <td>
                <button onclick="deletePerson('${id}')"  class ="btn btn-danger"> xóa </button>
                <button onclick="findPersonById('${id}')" class ="btn btn-primary"> Sửa </button>
                </td>
          </tr>
          `;
  });
  document.getElementById('tbodySinhVien').innerHTML = content.join('');
}
const deletePerson = (id)=>{
  listPerson.deletePersonById(id);
  showInfor(listPerson.arrayPerson);
  setLocalStorage();
}
window.deletePerson = deletePerson;

const findPersonById =(id)=>{
  const indexPersonById = listPerson.getPersonById(id);

    if(indexPersonById>-1){
      document.getElementById('txtId').value=listPerson.arrayPerson[indexPersonById].id
      document.getElementById('txtId').disabled= true;
      document.getElementById('txtName').value =listPerson.arrayPerson[indexPersonById].fullName;
      document.getElementById('txtEmail').value =listPerson.arrayPerson[indexPersonById].email;
      document.getElementById('txtAddress').value =listPerson.arrayPerson[indexPersonById].address;
      document.getElementById('txtDiemToan').value =listPerson.arrayPerson[indexPersonById].toan;
      document.getElementById('txtDiemLy').value =listPerson.arrayPerson[indexPersonById].ly;
      document.getElementById('txtDiemHoa').value =listPerson.arrayPerson[indexPersonById].hoa;
      document.getElementById('txtNameEntity').value =listPerson.arrayPerson[indexPersonById].nameEntity;
      document.getElementById('txtPrice').value =listPerson.arrayPerson[indexPersonById].price;
      document.getElementById('txtRating').value =listPerson.arrayPerson[indexPersonById].rating;
      document.getElementById('txtDate').value =listPerson.arrayPerson[indexPersonById].date;
      document.getElementById('txtSalary').value =listPerson.arrayPerson[indexPersonById].salary;
    }
  }
window.findPersonById = findPersonById;

document.getElementById('btnUpdate').addEventListener('click',()=>{
  const id = document.getElementById('txtId').value;
  const name = document.getElementById('txtName').value;
  const email = document.getElementById('txtEmail').value;
  const address = document.getElementById('txtAddress').value;
  let isValid = true;
  isValid &=valid.checkEmpty(id,'spanId','khong de trong') &&
  valid.checkNumber(id,'spanId','phai la so');

  isValid &=valid.checkEmpty(name,'spanName','khong de trong')&&
  valid.checkName(name,'spanName',"khong duoc dung so") ;
  
  isValid &=valid.checkEmail(email,'spanEmail',"khong dung format email") &&
  valid.checkEmpty(name,'spanEmail','khong de trong');

  isValid &=valid.checkEmpty(address,'spanAddress','khong de trong');

  if(isValid){
    const toan = Number(document.getElementById('txtDiemToan').value);
    const ly = Number(document.getElementById('txtDiemLy').value);
    const hoa = Number(document.getElementById('txtDiemHoa').value);

    const nameEntity = document.getElementById('txtNameEntity').value;
    const price = Number(document.getElementById('txtPrice').value);
    const rating = document.getElementById('txtRating').value;

    const date = Number(document.getElementById('txtDate').value);
    const salary = Number(document.getElementById('txtSalary').value);
      if(toan>0&&ly>0&&hoa>0){
          const person =new Student(toan,ly,hoa,id,name,address,email);
            listPerson.updatePerSon(person);
            setLocalStorage();
            showInfor(listPerson.arrayPerson);
            document.getElementById('mainPerson').innerHTML=person.getActive();
      }else if(nameEntity!== "" && price>0 && rating!== "") {
          const person =new Customer(nameEntity,price,rating,id,name,address,email);
            listPerson.updatePerSon(person);
            setLocalStorage();
            showInfor(listPerson.arrayPerson);
            document.getElementById('mainPerson').innerHTML=person.getActive();
      }else if(date>0 && salary>0) {
        const person =new Employee(date,salary,id,name,address,email);
            listPerson.updatePerSon(person);
            setLocalStorage();
            showInfor(listPerson.arrayPerson);
            document.getElementById('mainPerson').innerHTML=person.getActive();
      }else (
        alert('dien sai thong tin')
      )
  }
});
document.getElementById('btnReset').addEventListener('click',()=>{
    document.getElementById('formPerson').reset();
    document.getElementById('txtId').disabled = false;
});
document.getElementById('btnSearch').addEventListener('click',()=>{
  const keyWord = document.getElementById('txtSearch').value;
  let resultType = listPerson.findByType(keyWord);
  showInfor(resultType);
  document.getElementById('form-search').reset();
});
