var express = require('express');
var app = express();

app.post('/users/save/:user', function(req, res){
  res.json({message: 'user saved successfully'})
});

app.get('/users/:id', function(){
	res.json({})
})

app.listen(3000);
console.log('Listening on port 3000');