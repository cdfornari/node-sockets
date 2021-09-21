const socketController = (socket) => {

    console.log(socket.id)

    socket.on('disconnect',() => {
        console.log('Cliente desconectado')
    })

    socket.on('enviar-mensaje',(payload,callback)=>{

        callback(123456)
        
        socket.broadcast.emit('enviar-mensaje',payload)
    })
}

module.exports = {
    socketController
}