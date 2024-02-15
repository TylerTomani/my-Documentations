const { expect } = require("chai");

const User = require("../class/user")

describe("user class", function(){
    let user;
    beforeEach(() => {
        user = new User("john-doe")
    })
    it("should create successfully",function(){
        expect(user).to.exist;
    })
    it("should set username on creation",function(){
        expect(user.username).to.equal("john-doe")
    })
})
    



        