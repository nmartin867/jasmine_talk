describe("UserCategory", function(){
	it("should have two woman", function(){
		var womanA = jasmine.createSpyObj('womanA',['getGender']);
		womanA.getGender.andReturn('female');
		var womanB = jasmine.createSpyObj('womanB',['getGender']);
		womanA.getGender.andReturn('female');
		var manA = jasmine.createSpyObj('manA',['getGender']);
		manA.getGender.andReturn('male');

		org.userCategory.addUser(womanA);
		org.userCategory.addUser(womanB);

		expect(org.userCategory.getWoman().length).toEqual(2);


	})
})