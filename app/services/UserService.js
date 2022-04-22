const User = require('./../models/user')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(User) {
        return [User.id, User.username, User.name, User.bio]
    }
    static updateUserUsername(User, newUsername){
        User.username = newUsername
    }
    static getAllUsernames(allUserNames) {
        return allUserNames.map(User => User.username)
    }

}

module.exports = UserService