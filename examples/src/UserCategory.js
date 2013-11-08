var org = (function(ns){
	if(!ns.userCategory) ns.userCategory = {};

    var men = [];
    var woman = [];
	var _public = ns.userCategory;

	_public.addUser = function(user){
		if(user.getGender() == 'male'){
			men.push(user);
		}else{
			woman.push(user);
		}
	}

	_public.getMen = function(){
		return men;
	}

	_public.getWoman = function(){
		return woman;
	}
	
	return ns;
})(org || {})