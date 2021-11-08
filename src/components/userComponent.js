import User from "../models/user.js"
import UserService from "../services/userService.js"
import { ElasticLogger, MongoLogger } from "./crossCuttingConcerns/logging/logger.js"

console.log("User Component Yüklendi...")
let logger1 = new ElasticLogger()
let logger2 = new MongoLogger()

let userService = new UserService(logger1)
let userService2 = new UserService(logger2)


let user1 = new User(1,"İsim","Soyİsim","Şehir")
let user2 = new User(2,"İsim2","Soyİsim2","Şehir2")


userService.add(new User(3,"İsim3" , "Soyİsim3" , "Şehir3")) // Kullanıcı Eklendi.
userService.add(user1)
userService2.add(user2)
console.log(userService.list())
console.log(userService2.getById(2))

userService.getById(5) //5Nolu  ID'ye Göre Listeleme Yapıldı.
userService.list()//Kullanıcılar listelendi.

let customer = {id:1 , firstName:"İsimAlanı"}

customer.lastName="SoyİsimAlanı"

console.log(customer.firstName + " " + customer.lastName)

