var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const Port = process.env.Port || 3231

const SocketManager = require('./socket')

io.on('connection', SocketManager)

app.listen(Port, ()=> {
    console.log('Connected to port:' + Port)
})