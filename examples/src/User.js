function User(id, displayName, name, emails){
        var id = id;
        var displayName = displayName;
        var name = name;
        var emails = emails;

        this.__defineGetter__("id", function(){
                return id;
        });

        this.__defineSetter__("id", function(val){
                id = val;
        });

        this.__defineGetter__("displayName", function(){
                return displayName;
        });

        this.__defineSetter__("displayName", function(val){
                displayName = val;
        });

        this.__defineGetter__("name", function(){
                return name;
        });

        this.__defineSetter__("name", function(val){
                name = val;
        });

        this.__defineGetter__("emails", function(){
                return emails;
        });

        this.__defineSetter__("emails", function(val){
                if(Object.prototype.toString.call( val ) !== '[object Array]'){
                        throw 'User.emails should be of type Array!'; 
                }
                emails = val;
        });
};

User.prototype.update = function(){
        console.log("I'm updating!");
};

