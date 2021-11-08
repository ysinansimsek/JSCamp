export default class UserService{
constructor(loggerService) {
    this.users = [] // database den gelecek olan veri dizisi
    this.loggerService = loggerService
}

    add(user){
        this.users.push(user)
        this.loggerService.log(user)
       /* console.log(user + " İsimli Kullanıcı eklendi.")*/
    }
    list(){
        return this.users
       /* console.log("Kullanıcılar listelendi.")*/
    }
    getById(id){
        return this.users.find(x => x.id === id)
       /* console.log(id + "Nolu  ID'ye Göre Listeleme Yapıldı.")*/
    }
}