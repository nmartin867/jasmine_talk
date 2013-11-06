/**
 ** Suites: describe Your Tests
 **/

 /*User(id, displayName, name, emails)*/ 
 describe("A User", function() {
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

 	/*Test failure*/
  /*
  it("should construct a User with a 'pet_name' property", function() {
    expect(user.pet_name === 'Virgil').toBe(true);
  });
 */

 describe("User Exceptions", function(){
 	it("should throw exception if 'emails' is not set to value of type [object Array]", function() {
 		expect(function(){user.emails = 'someone@somewhere.com'}).toThrow();
 	});
 })



});