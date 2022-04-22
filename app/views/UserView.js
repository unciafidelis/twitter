const UserService = require('../../app/services/UserService')

class UserView{
    static createUser(payload){
        if(payload === null){
            return { error: "payload no existe" }
        }
        else if (!payload.username || !payload.name || !payload.id){
            return { error: "necesitan tener un valor válido"}
        }
        const user = UserService.create(payload.id, payload.username, payload.name)
        return user
    }
}

module.exports = UserView