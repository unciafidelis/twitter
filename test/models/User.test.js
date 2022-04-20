const User = require('../../app/models/User')

describe("Unit Tests for User class", () => {
    test('Create an user object', () => {
        //code call to use in app
        const user = new User(1, "carlogilmar", "Carlo","Bio") //Requirement 2 change

        //code validation req
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined() //Requirement 2 change
        expect(user.lastUpdated).not.toBeUndefined() //Requirement 2 change
    })
    test('Add getters', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.getUsername).toBe("carlogilmar")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
})