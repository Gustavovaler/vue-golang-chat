const socket = io()

new Vue({
    el: '#chat-app',
    data: {
        message: '',
        listaMensaje: [],
        name_user: 'Anonimous',
       
    },
    mounted(){
      this.name_user = prompt("Ingrese su nombre:")
        
    },
    beforeCreate(){
        

    },
    created() {
        //const vm = this;
        
        socket.on('chat message', (msg, name_user) =>{
            this.listaMensaje.push({
            texto: msg,
            fecha: new Date().toLocaleDateString(), 
            procedencia: name_user
            })
          
        
        })
    },
    methods: {
        sendMessage() {
            socket.emit('chat message', this.message, this.name_user);
            this.message = '';
           
        },

        
    }, 
    computed:{
       
        }
    
});
