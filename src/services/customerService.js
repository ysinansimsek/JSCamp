import UserServiceRefactor from "./userServiceRefactor.js";
import { users } from "../data/users.js"
import SuccessResult from "../models/successResult.js";
import ErrorResult from "../models/errorResult.js";
export default class CustomerService extends UserServiceRefactor {
    constructor(user) {
        super()
        this.user = user
        this.customers = []
    }

    add(user) {
        user.type === undefined ? user.type = "customer" : ""
        user.creditCardNumber === undefined ? user.creditCardNumber="5464544" : ""
        if (!super.checkUserForValidationErrors(user,"creditCardNumber") && super.checkInputDataIsNumber(user,user.age)) {
            this.customers.push(user) 
            this.success.push(new SuccessResult(user))
        } else {
            this.errors.push(new ErrorResult("Hata Oluştu Kullanıcı Eklenmedi",user))
        }
    }
    load(){
        for (const user of users) {
            if(!super.checkUserForValidationErrors(user) && super.checkInputDataIsNumber(user,user.age) && super.checkTypeIsValid(user)){
               
                this.customers.push(user)
               
            }
        }
        console.log(this.customers)
        console.log(this.errors)
    }
    list(){
        console.log("Müşteriler Listelendi.")
        super.list("customer")
    }
}

