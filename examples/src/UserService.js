var org = (function (ns, $){
	if(!ns.userService) ns.userService = {};

	var _public = ns.userService;

	_public.saveUser = function (user){
		$.ajax({
			type: "POST",
			url: "/users/save/" + user.id,
			contentType: "application/json; charset=utf-8",
			dataType: "json"
		});
	}

	_public.getUser = function(id, callback){
		$.ajax({
			type: "GET",
			url: "/users/" + user.id,
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: callback
		});
	}

	return ns;
})(org || {}, jQuery);