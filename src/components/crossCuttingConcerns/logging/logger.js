export class BaseLogger {
    log(data){
        console.log("Default BaseLogger" + data)
    }
}

export class ElasticLogger extends BaseLogger {
    log(data){
        console.log("Logged To Elastic " + data)
    }
}

export class MongoLogger extends BaseLogger {
    log(data){
        console.log("Logged to Mongo" + data)
    }
}