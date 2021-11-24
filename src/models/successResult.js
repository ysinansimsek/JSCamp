import DataResult from "./dataResult.js"

export default class SuccessResult extends DataResult{
    constructor(data) {
        super()
        this.message = data.firstName + " İsimli Kullanıcı  " + data.type + " olarak başarılı bir şekilde eklendi"
        this.data = data
    }
}