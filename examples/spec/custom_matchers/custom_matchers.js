
	jasmine.Matchers.prototype.toBeSameUser = function(expected){

		Array.prototype.compare = function(testArr) {
			if (this.length != testArr.length) return false;
			for (var i = 0; i < testArr.length; i++) {
				if(this[i] !== testArr[i]) return false;
			}
			return true;
		}

		var actual = this.actual;
		var notText = this.isNot ? " not" : "";
		this.message = function () {
			return "Expected " + JSON.stringify(actual) + notText + " to be the same as " + JSON.stringify(expected);
		}
		if(actual.id !== expected.id) return false;
		if(actual.displayName !== expected.displayName) return false;
		if(actual.name !== expected.name)return false;
		if(!actual.emails.compare(expected.emails)) return false;
		return true;
	}
