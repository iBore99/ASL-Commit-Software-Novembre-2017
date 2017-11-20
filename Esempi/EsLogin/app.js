window.onload = function() {

    new Vue({

        el: '#app',

        data: {

            /*Variabili flag che mi servono per decidere cosa mostrare 
            nella pagina in base aai dati inseriti*/

            usernameValido: true,
            passwordValida: true,

            nuovoUsername: "",
            nuovaPassword: "",
            stringaJson: "",
            controlloPulsante: true,

            utenti: []
        },

        methods: {

            inizializzaDati() {
                this.stringaJson = localStorage.getItem('utenti');
                if (this.stringaJson)
                    this.utenti = this.deserializzaObjDaJson(this.stringaJson);
            },

            validazioneDati() {
                return (this.passwordValida && this.usernameValido)

            },

            controlloPassword() {

                if (this.nuovaPassword) {
                    /*è necessario questo controllo perchè veniva eseguito il controllo sulla password anche quando non veniva 
                    scritto nulla, per esempio bastava che si fosse premuto il tasto "tab" per passare a quella casella di testo.*/
                    if (
                        /^[a-zA-Z0-9?!$+-/.,@^_]{6,16}$/.test(this.nuovaPassword) &&
                        /[A-Z]/.test(this.nuovaPassword) &&
                        /[a-z]/.test(this.nuovaPassword) &&
                        /[0-9]/.test(this.nuovaPassword)
                    ) {

                        this.passwordValida = true;
                        return true;
                    } else this.passwordValida = false;

                    return false;
                } else {
                    this.passwordValida = true;
                }

            },

            controlloUsername() {
                for (var utente of this.utenti) {
                    if (utente.username == this.nuovoUsername) {
                        this.usernameValido = false;
                        return false;
                    }
                }


                this.usernameValido = true;
                return true;
            },

            aggiuntaUtente() { //metodo per la registrazione di un nuovo utente

                if (this.validazioneDati()) {
                    if (this.stringaJson)
                        this.utenti = this.deserializzaObjDaJson(this.stringaJson);



                    this.utenti.push({
                        username: this.nuovoUsername,
                        password: this.nuovaPassword
                    });


                    this.stringaJson = this.serializzaObjInJson(this.utenti);
                    localStorage.setItem("utenti", this.stringaJson);

                    this.nuovoUsername = "";
                    this.nuovaPassword = "";
                    alert("Registrazione avvenuta con successo!");
                }
            },

            cambiaStato() {
                this.controlloPulsante = !this.controlloPulsante; //cambia il valore della variabile 
                this.nuovaPassword = "";
                this.nuovoUsername = "";
            },

            confrontaCredenziali() {

                for (var utente of this.utenti) {
                    if (this.nuovoUsername == utente.username && this.nuovaPassword == utente.password) {
                        alert("Autenticazione avvenuta con successo.");
                        return;
                    }
                }

                alert("Autenticazione fallita!");
            },

            serializzaObjInJson(obj) { //creazione stringa json
                return JSON.stringify(obj);
            },

            deserializzaObjDaJson(stringa_json) { //ricavo oggetto da stringa json
                return eval(stringa_json);
            }

        }

    })

}