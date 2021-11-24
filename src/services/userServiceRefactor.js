import { users } from "../data/users.js"
import DataResult from "../models/dataResult.js"
import ErrorResult from "../models/errorResult.js"
import DataError from "../models/errorResult.js"
import SuccessResult from "../models/successResult.js"

export default class UserServiceRefactor{
    constructor(loggerService) {
        this.errors = []
        this.success = []
        this.users = []
        this.loggerService = loggerService
        this.validTypesOfUsers = ["customer" , "employee"]
    }

    checkUserForValidationErrors(user,dataForValidation) {
        let requiredFields = "id firstName lastName age city".split(" ")
        if(dataForValidation!==undefined){requiredFields.push(dataForValidation)}
    let hasErrors = false
    for (const field of requiredFields) {
        if(!user[field]){
            hasErrors = true
            this.errors.push(new ErrorResult(`Validation Error!. ${field} is required` , user))
        }
    }
    if(!this.validTypesOfUsers.includes(user.type)){
        hasErrors = true
        this.errors.push(new ErrorResult(user.type + " is not a valid type" , user))
    }
   return hasErrors
    }
    checkInputDataIsNumber(user,input){
        let isNumber = true
        if(Number.isNaN(Number.parseInt(+input))){
            this.errors.push(new ErrorResult(`Validation Error!...  ${input} is must be a number`, user))
          isNumber = false
        }
        return isNumber
    }
    checkTypeIsValid(user){
        let isValid = true
        if(!this.validTypesOfUsers.includes(user.type)){
            this.errors.push(new ErrorResult(`Validation Error!...  ${user.type} is not a valid type of users`, user))
            isValid = false
        }
        return isValid
    }
list(type){
    let data = []
    for (const user of users) {
        if(user.type === type)data.push(user) 
    }
    console.log(data)
}
getById(id){
    console.log("ID'ye Göre Listeleme")
    let data = []
    data.push(users.find(x => x.id === id))
    console.log(data)
}
  
}