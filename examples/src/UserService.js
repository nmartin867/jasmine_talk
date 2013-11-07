var org = (function (ns, $){
	if(!ns.userService) ns.userService = {};

	var _public = ns.userService;

	_public.saveUser = function(user, callback){
			$.ajax({
				type: "POST",
				url: "/user/",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: callback
			});
	}

	_public.getUser = function(id, callback){
		setTimeout(callback, 3000);
	}

	return ns;
})(org || {}, jQuery);