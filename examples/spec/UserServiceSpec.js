describe("UserService", function(){
	
	it("should execute mock callback function on success", function () {
		var user = new User("123", "MightyMouse", "Nick", ["nmartin@gmail.com"]);
		spyOn($, "ajax").andCallFake(function(options) {
			options.success();
		});
		var callback = jasmine.createSpy();
		org.userService.saveUser('123', callback);
		expect(callback).toHaveBeenCalled();
	});

	it("should wait for async callback to be called", function () {
		var callback = jasmine.createSpy();
		org.userService.getUser('123', callback);
		waitsFor(function() {
			return callback.callCount > 0;
		});
		runs(function() {
			expect(callback).toHaveBeenCalled();
		});
	});
})

