
describe("User", function() {
	beforeEach(function(){
		
	})
	describe("constructor", function(){
		var user = new User('123','mighty_mouse', 'Nick Martin', ['nmartin867@gmail.com']);

		it("should construct a User with a 'id' property equal to '123'", function() {
			expect(user.id === '123').toBe(true);
		});

		it("should construct a User with a 'displayName' property equal to 'mighty_mouse'", function() {
			expect(user.displayName).toEqual('mighty_mouse');
		});

		it("should construct a User with a 'name' property containing 'Nick'", function() {
			expect(user.name).toMatch(/Nick/);
		});

		it("should construct a User with an 'emails' property", function() {
			expect(user.emails[0] === 'nmartin867@gmail.com').toBe(true);
		});

		//Custom Matchers
		xit("should be the same user", function(){
			var newUser = new User('123','mighty_mouse', 'Nick Martin', ['nmartin867@gmail.com']);
			expect(user).toBeSameUser(newUser);
		})
		xit("should NOT begin with char 'N'", function(){
			expect('Nara').not.toStartWithChar('N');
		})

	})
	describe("exceptions", function(){
		it("should throw exception if 'emails' is not set to value of type [object Array]", function() {
			expect(function(){user.emails = 'someone@somewhere.com'}).toThrow();
		});
	})
});

/*
this.addMatchers({
		toStartWithChar: function(expected) {
			var actual = this.actual;
			var notText = this.isNot ? " not" : "";

			this.message = function () {
				return "Expected " + actual + notText + " to be equal to " + expected;
			}

			return actual.charAt(0) === expected;
		}
	});*/

