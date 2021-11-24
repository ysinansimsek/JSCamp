import DataResult from "./dataResult.js"

export default class ErrorResult extends DataResult{
    constructor(message,data) {
        super()
        this.message=message
        this.data = data
        if(message === undefined)
        this.message = data.firstName + " isimli kullanıcı için Hata Oluştu!"
    }
}