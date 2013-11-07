xdescribe("UserObserver", function(){
	describe("addListener()", function(){
		it("should throw exception if 'update' is not implemented on user obj", function(){
			var mockUser = jasmine.createSpy('user');
			var addListener = function(){
				org.userObserver.addListener(mockUser)
			}
			expect(addListener).toThrow();
		})

		it("should not throw exception if 'update' is implemented on user obj", function(){
			var smartMockUser = jasmine.createSpyObj('user',['update']);
			var addListener = function(){
				org.userObserver.addListener(smartMockUser);
			}
			expect(addListener).not.toThrow();
		})
	})

	describe("notify()", function(){
		it("should call user.update on notify", function(){
			var userMock = jasmine.createSpyObj('user',['update']);
			userMock.update.andCallFake(function(){
				//this is a fake mock of spy func
			})
			org.userObserver.addListener(userMock);
			org.userObserver.notify(userMock);
			expect(userMock.update).toHaveBeenCalled();
		})

		it("should call user.update once",function(){
			var user = new User("123", "MightyMouse", "Nick Martin", ["nmartin867@gmail.com"]);
			spyOn(user, 'update').andCallThrough();
			org.userObserver.addListener(user);
			org.userObserver.notify(user);
			expect(user.update.calls.length).toEqual(1);
		})

		it("should call user.update with a string",function(){
			var mockUser = jasmine.createSpyObj('user',['update']);
			mockUser.update.andCallFake(function(notification){
				//this is a fake mock of spy func
			})
			org.userObserver.addListener(mockUser);
			org.userObserver.notify(mockUser);
			expect(mockUser.update).toHaveBeenCalledWith(jasmine.any(String));
		})
	})	
})