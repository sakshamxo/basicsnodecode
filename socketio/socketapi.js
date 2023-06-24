const io = require( "socket.io" )();
const socketapi = {
    io: io
};
var connections = [];
var connectionsid = [];


io.on( "connection", function( socket ) {
   console.log('connected!');
   socket.on('disconnect',function(){
    let indexofdisconnect = connectionsid.indexOf(socket.id)
    connections.splice(indexofdisconnect,1)
    connectionsid.splice(indexofdisconnect,1)
    console.log(connections)
    console.log(connectionsid)
   })


   socket.on('msg',function(data){
    io.emit('msg',data);
})


socket.on('naam',function(data){
   connections.push(data);
   connectionsid.push(socket.id);
   console.log(connections)
   console.log(connectionsid);
})

});


module.exports = socketapi;