describe("UserService", function(){
	var user;
	beforeEach(function(){
		user = new User("123", "MightyMouse", "Nick", ["nmartin@gmail.com"]);
	})

	it("should be defined", function(){
		expect(org.userService).toBeDefined();
	})

	it("should make an AJAX request to the correct URL", function() {
		spyOn($, "ajax");
		org.userService.saveUser(user);
		expect($.ajax.mostRecentCall.args[0]["url"]).toEqual("/users/save/" + user.id);
	});
})