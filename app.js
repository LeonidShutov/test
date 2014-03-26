/**
 * Created by LShutov on 17.03.14.
 */
var http=require('http');
http.createServer(function(req,resp){
        resp.write ("hello world///");
        resp.end();
}).listen(3000);