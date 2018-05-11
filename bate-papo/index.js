// Utilizaremos o app para inicializar o Express que será nossa função para fornecer um servidor HTTP
var app = require('express')();
var http = require('http').Server(app);
// Iniciamos uma nova instância do socket.io passando o objeto http(o servidor http)
var io = require('socket.io')(http);

// Definimos aqui uma rota "/" que será chamada quando acessarmos a página inicial da nossa aplicação
app.get('/', function (req, res) {
    res.sendfile('index.html');
});

// Quando tivermos uma chamada para o nosso socket iremos logar no terminal uma mensagem de novo usuário
io.on('connection', function (socket) {
    console.log('Usuário conectado.');
    socket.on('disconnect', function () {
        console.log('O usuário saiu da aplicação.');

    });
})

// Definimos a porta 3000 para nos servir a aplicação
http.listen(3000, function () {
    console.log('listening on *:3000');
});