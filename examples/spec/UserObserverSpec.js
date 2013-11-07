describe("UserObserver", function(){
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
		it("should call user 'update' on notify", function(){
			var userMock = jasmine.createSpyObj('user',['update']);
			userMock.update.andCallFake(function(){
				//this is a fake mock of spy func
			})
			org.userObserver.addListener(userMock);
			org.userObserver.notify(userMock);
			expect(userMock.update).toHaveBeenCalled();
		})
	})	
})