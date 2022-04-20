/*Requerimiento 1: Se necesita un modelo `User` para guardar la información 
de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` 
y `lastUpdated`.*/

const User = require('../../app/models/User')

describe("Unit Tests for User class", () => {
    test('Create an user object', () => {
        //code call to use in app
        const user = new User(1, "carlogilmar", "Carlo","Bio", "dateCreated", "lastUpdated")

        //code validation
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    })
})