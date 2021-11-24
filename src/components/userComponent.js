import { users } from "../data/users.js"
import Customer from "../models/customer.js"
import Emplooye from "../models/employee.js"
import User from "../models/user.js"
import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/employeeService.js"
import UserService from "../services/userService.js"
import UserServiceRefactor from "../services/userServiceRefactor.js"
import UserServiceReafactor from "../services/userServiceRefactor.js"
import { BaseLogger, ElasticLogger, MongoLogger } from "./crossCuttingConcerns/logging/logger.js"

console.log("User Component Yüklendi...")
// let logger1 = new ElasticLogger()
// let logger2 = new MongoLogger()

// let userService = new UserService(logger1)
// let userService2 = new UserService(logger2)


// let user1 = new User(1,"İsim","Soyİsim","Şehir")
// let user2 = new User(2,"İsim2","Soyİsim2","Şehir2")


// userService.add(new User(3,"İsim3" , "Soyİsim3" , "Şehir3")) // Kullanıcı Eklendi.
// userService.add(user1)
// userService2.add(user2)
// console.log(userService.list())
// console.log(userService2.getById(2))

// userService.getById(5) //5Nolu  ID'ye Göre Listeleme Yapıldı.
// userService.list()//Kullanıcılar listelendi.

// let customer = {id:1 , firstName:"İsimAlanı"}

// customer.lastName="SoyİsimAlanı"

// console.log(customer.firstName + " " + customer.lastName)

console.log("----------22/11/2021---------------")
 //userService.load()
// console.log(userService.customers)
// console.log(userService.employees)
// console.log(userService.errors)
// //userService.add(new Customer(10,"sdf","asd","asda",55))

// let userServiceRefactor = new UserServiceReafactor(logger1)
// let isValidate = userServiceRefactor.checkUserForValidationErrors(new Customer(1,"sinan","şimşek","ankara",36,"564654"),["creditCardNumber"])
// if(isValidate){
//     console.log("kullanıcıyı ekle")
// } else {
//     console.log(userServiceRefactor.errors)
// }
// console.log(userServiceRefactor.data)

// let customerService = new CustomerService()

// let user22 = new User(5,"asda","sdf","asd",25)


    let customerService = new CustomerService(BaseLogger)
    let employeeService = new EmployeeService(BaseLogger)


    let customer1 = new User(20,"sinan","sdasd","ankaa","a50")
    customer1.type="customer"
    customerService.add(customer1)
    console.log(customerService.customers)
    console.log(customerService.errors)

   customerService.getById(1)

    employeeService.list()
    customerService.list()



