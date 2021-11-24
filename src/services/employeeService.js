import { users } from "../data/users.js";
import ErrorResult from "../models/errorResult.js";
import SuccessResult from "../models/successResult.js";
import CustomerService from "./customerService.js";
import UserServiceRefactor from "./userServiceRefactor.js";

export default class EmployeeService extends UserServiceRefactor {
    constructor(user) {
        super()
        this.user = user
        this.employees = []
    }
    add(user) {
        if (!super.checkUserForValidationErrors(user, "salary") && super.checkInputDataIsNumber(user, (user.age && user.salary))) {
            this.employees.push(user)
            this.success.push(new SuccessResult(user))
        }
    }
    load(){
        for (const user of users) {
            if(!super.checkUserForValidationErrors(user,"salary") && super.checkInputDataIsNumber(user, (user.age && user.salary)) && super.checkTypeIsValid(user)){
                this.employees.push(user) 
            }
        }
        console.log(this.employees)
        console.log(this.errors)
    }
    list(){
        console.log("Çalışanlar Listelendi.")
        super.list("employee")
    }
}