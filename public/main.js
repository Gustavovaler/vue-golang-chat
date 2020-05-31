const socket = io()

new Vue({
    el: '#chat-app',
    data: {
        message: '',
        listaMensaje: [{texto: "algo", fecha: new Date().toLocaleDateString()}]
    },
    mounted(){
        console.log("mounted");
    },
    created() {
        const vm = this;
        socket.on('chat message', (msg) =>{
            this.listaMensaje.push({
            texto: msg,
            fecha: new Date().toLocaleDateString()
            })
            console.log(msg);
        
        })
    },
    methods: {
        sendMessage() {
            socket.emit('chat message', this.message);
            this.message = '';
            console.log("mensaje enviado");
        }
    }
});
