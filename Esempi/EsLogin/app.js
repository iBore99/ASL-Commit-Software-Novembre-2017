window.onload = function() {
  
    new Vue({

        el: '#app',

        data: {

           
            nuovoUsername:"",
            nuovaPassword:"",
            stringaJson: "",
            controlloPulsante: true,

            utenti: []       
        },

        methods: {

            inizializzaDati(){
                this.stringaJson = localStorage.getItem('utenti');
                if(this.stringaJson)
                  this.utenti = this.deserializzaObjDaJson(this.stringaJson);
            },
            aggiuntaUtente(){          //metodo per la registrazione di un nuovo utente

                    if(this.stringaJson)
                        this.utenti = this.deserializzaObjDaJson(this.stringaJson);
                    
                    this.utenti.push(
                        {
                            username: this.nuovoUsername,
                            password: this.nuovaPassword
                        });

                        
                        this.nuovoUsername="";
                        this.nuovaPassword="";
                        this.stringaJson = this.serializzaObjInJson(this.utenti);
                        localStorage.setItem("utenti", this.stringaJson);                  
              
            },

            cambiaStato()
            {
                this.controlloPulsante = !this.controlloPulsante;   //cambia il valore della variabile 
                this.nuovaPassword="";
                this.nuovoUsername="";
            },

            confrontaCredenziali()
             {

                for(var utente of this.utenti){
                    if(this.nuovoUsername==utente.username && this.nuovaPassword==utente.password)
                    {
                        alert("Autenticazione avvenuta con successo.");
                        return;
                    }
                }

                alert("Autenticazione fallita!");
             },

             serializzaObjInJson(obj){      //creazione stringa json
                return JSON.stringify(obj);
              },
      
              deserializzaObjDaJson(stringa_json) {   //ricavo oggetto da stringa json
                    return eval(stringa_json);
              }
           
        }  //fine methods

    })   //fine vue

}