
    const {PythonShell} = require("python-shell");
    var path = require("path")
    var options = {
        scriptPath : path.join(__dirname, '../_engine/'),
        pythonOptions: ['-u'],
        mode : "text"
    }



PythonShell.run('generator.py', options, function (err, results){
    if (err) throw err;
    console.log('result: %', results);
});

let pyshell = new PythonShell('./_engine/generator.py');

pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    var logger = document.getElementById('result');
    logger.innerHTML = message;
    console.log(message); 
});

pyshell.end(function (err,code,signal) {
    if (err) throw err;
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
  });



    

