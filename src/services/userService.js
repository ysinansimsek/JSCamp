import { users } from "../data/users.js"
import DataError from "../models/errorResult.js"

export default class UserService{
constructor(loggerService) {
  //  this.users = [] // database den gelecek olan veri dizisi
    this.employees = []
    this.customers = []
    this.errors = []
    this.loggerService = loggerService
}
load(){
for (const user of users) {
    switch (user.type) {
        case "customer":
            if(!this.checkCustomerValidityForErrors(user)){
            this.customers.push(user)
            }
            break;
        case "employee":
            if(!this.checkEmployeeValidityForErrors(user)){
                this.employees.push(user)
                }
        default:
            //exception yakala 
            this.errors.push(new DataError("Wrong User Type" , user))
            break;

    }
}
}

checkCustomerValidityForErrors(user){
    let requiredFields = "id firstName lastName age city".split(" ")
    //user["age"]
    let hasErrors = false
    for (const field of requiredFields) {
        if(!user[field]){
            hasErrors = true
            this.errors.push(new DataError(`Validation Error!...  ${field} is required` , user))
        }
    }
    if(Number.isNaN(Number.parseInt(+user.age))){
        this.errors.push(new DataError(`Validation Error!...  ${user.age} is must be a number` , user))
      hasErrors = true
    }
    return hasErrors
}
checkEmployeeValidityForErrors(user){
    let requiredFields = "id firstName lastName age city salary".split(" ")
    //user["age"]
    let hasErrors = false
    for (const field of requiredFields) {
        if(!user[field]){
            hasErrors = true
            this.errors.push(new DataError(`Validation Error!...  ${field} is required` , user))
        }
    }
    return hasErrors
}
    add(){
       // this.users.push(user)
        //this.loggerService.log(user)
       /* console.log(user + " İsimli Kullanıcı eklendi.")*/
    }
    list(){
       // return this.users
       /* console.log("Kullanıcılar listelendi.")*/
    }
    getById(id){
       // return this.users.find(x => x.id === id)
       /* console.log(id + "Nolu  ID'ye Göre Listeleme Yapıldı.")*/
    }
}