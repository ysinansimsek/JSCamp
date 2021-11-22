import { users } from "../data/users.js"

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
            this.customers.push(user)
            break;
        case "employee":
                this.employees.push(user)
                break;
        default:
            //exception yakala 
            this.errors.push("Wrong User Type")
            break;

    }
}
}
    add(user){
        //this.users.push(user)
       // this.loggerService.log(user)
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