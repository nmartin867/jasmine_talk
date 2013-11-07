var org = (function(ns){
	if(!ns.userObserver) ns.userObserver = {};

	var _public = ns.userObserver;
	var listeners = [];

	_public.addListener = function(user){
		if(user.update && Object.prototype.toString.call(user.update) === '[object Function]'){
			listeners.push(user);
		} else{
			throw 'User observer must implement "update" function';
		}
	};

	_public.notify = function(){
		for(var i = 0; i < listeners.length; ++i){
			listeners[i].update();
		}
	};

	return ns;
})(org || {})