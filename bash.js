var fs = require('fs');

promptMe();

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim().split(' '); 
  
  if (cmd[0] ==='pwd'){
  	console.log(process.argv[1])
  	promptMe();
  };
  
  if (cmd[0] === 'date'){
  	var newDate = new Date();
  		console.log(newDate)
  		promptMe();
  };
  
  if (cmd[0] === 'cat'){
  	
  	if (cmd[2] === '|' && cmd[3] === 'head'){
  		getHead(cmd[1]);
  	} 
  	else {
  		fs.readFile(cmd[1],'utf8',function(err, data){
  		if (err) throw err;
  		console.log(data);
  		promptMe();

  	});	
  	}


  };
  	function getHead(filename){
	  	fs.readFile(filename,'utf8',function(err, data){
  		if (err) throw err;
  		dataArr = data.split('\n',10).join('\n');
  		console.log(dataArr);
  		promptMe();

  	});	
  	}
  if (cmd[0] === 'head'){
  		getHead(cmd[1]);
  }

 
});


function promptMe(){
  	process.stdout.write('\nprompt > ');
  } 