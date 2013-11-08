xdescribe('Spy', function(){
	var bar = null;
	var foo = {
		setBar: function(val){
			bar = val;
		}
	};
	beforeEach(function(){
		spyOn(foo, 'setBar');
		foo.setBar(1);
		foo.setBar(123, 'abc');
	})

	it('should have been called', function(){
		expect(foo.setBar).toHaveBeenCalled();
	})
	it('should have been called with and argument of 1', function(){
		expect(foo.setBar).toHaveBeenCalledWith(1);
	})
	it("allows access to the most recent call", function() {
		expect(foo.setBar.mostRecentCall.args[0]).toEqual(123);
	});

	it("allows access to other calls", function() {
		expect(foo.setBar.calls[0].args[0]).toEqual(1);
	});

	it("should not REALLY be setting bar", function(){
		expect(bar).toBeNull();
	})

	describe('configured to call through to actual implementation', function(){
		var zap = null;
		var zoop = {
			setZap: function(val){
				zap = val;
			}
		}
		beforeEach(function(){
			spyOn(zoop, 'setZap').andCallThrough();
			zoop.setZap(1);
		})
		it("should still spy on zoop", function(){
			expect(zoop.setZap).toHaveBeenCalled();
		})
		it("should call the real SetZap implementaion", function(){
			expect(zap).not.toBeNull();
		})
	})
})