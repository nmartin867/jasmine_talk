xdescribe("UserService", function(){
	var user;

	beforeEach(function(){
		user = new User("123", "MightyMouse", "Nick", ["nmartin@gmail.com"]);
	})
	/***
	** Stub $.ajax success option
	**/
	it("should execute mock callback function on success", function () {
		spyOn($, "ajax").andCallFake(function(options) {
			options.success();
		});
		var successCallback = jasmine.createSpy();
		org.userService.saveUser('123', successCallback);
		expect(successCallback).toHaveBeenCalled();
	});

	/***
	** Stub $.ajax failure option
	**/

	it("should execute mock callback function on failure", function () {
		spyOn($, "ajax").andCallFake(function(options) {
			options.error();
		});
		var errorCallback = jasmine.createSpy();
		org.userService.saveUser('123', errorCallback);
		expect(errorCallback).toHaveBeenCalled();
	});

	/***
	** Simulate real ajax request
	**/

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

