##Jasmine Testing Framework Basics


####Jasmine lingo
* `Suits` - Describes a group of tests
* `Spec`  - Describes a specific test
* `Expectation` - Describes the expected value as results of a test
	* `Matcher` - a boolean comparison between the actual and expected value
    
    ```js
    describe("A suite", function() {
    	it("contains spec with an expectation", function() {
    		expect(true).toBe(true);
    	});
  });
    
    ```
`describe()` and `it()` are just functions. So regular JS scoping rules apply. Any varible(s) defined in a `describe`
block will be available to any `it` function defined within its scope.
***
####Matchers
Matchers implement a boolean comparison between the actual value (expect) with the expected value (matcher).

Jasmine includes most of the matchers you will need. You can create your own, custom matchers. 

`expect(x).toEqual(y);` compares objects or primitives 

`expect(x).toBe(y);` compares if objects or primitives are the same object

`expect(x).toMatch(pattern);` campares a string to another string or regular expression.

`expect(x).toBeDefined();` checks if value is defined

`expect(x).toBeUndefined();` checks if value is === 'undefined'

`expect(x).toBeNull();` checks for null

`expect(x).toBeTruthy();` checks if value evaluates to true

`expect(x).toBeFalsy();` checks if value evaluates to false

`expect(x).toContain(y);` checks if String or Array contains value

`expect(x).toBeLessThan(y);` checks that `x` < `y`

`expect(x).toBeGreaterThan(y);` checks that `x` > `y`

`expect(function(){fn();}).toThrow(e);` checks that function throws exception

**Any matcher can evaluate to a negative assertion by simply chaining `not`.**

####Create a custom matcher
Custom matchers are installed within a suite of tests by adding your matcher function
as property of `this.addMatchers({})`. This is typically done within the `beforeEach` or `it` block.


>Here is an example of a matcher that will compare the first character of a string:

```js
    this.addMatchers({
		toStartWithChar: function(expected) {
			var actual = this.actual;
			var notText = this.isNot ? " not" : "";
			this.message = function () {
			 return "Expected " + actual + notText + " to be equal to " + expected;
			}
	         	return actual.charAt(0) === expected;
		 }
	});
```	
	
>You can extend ``jasmine.Matchers.prototype`` to make selectors global.
    
####Spies - Mocking
Spies allow you to stub any function track calls to it and all arguments.

######Spy matchers
`toHaveBeenCalled()` will return true if the spy was called.
`toHaveBeenCalledWith()` will return true if the argument list matches any of the recorded calls to the spy.

######Spy modifiers
`andCallThrough()` when chained onto a spy, we can track calls and arguments to a function but, in addition,
delegate to the actual implementation.

`andReturn` calls to the function will return a specific value.

`andCallFake` all calls to the spy will delegate to the supplied function.




