const User = require('../../app/models/User')

describe("Unit Tests for User class", () => {
    test('Create an user object', () => {
        //code call to use in app
        const user = new User(1, "carlogilmar", "Carlo","Bio", "dateCreated", "lastUpdated")

        //code validation req
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})