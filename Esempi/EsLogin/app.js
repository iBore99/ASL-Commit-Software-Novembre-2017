window.onload = function() {

    new Vue({

        el: '#app',

        data: {

            /*Variabili flag che mi servono per decidere cosa mostrare 
            nella pagina in base aai dati inseriti*/
            messaggioErroreUsername: "",   //cambia in base al tipo di errore
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
                    if (  //controllo se la password ha un formato valido 
                        /^[a-zA-Z0-9?!$+-/.,@^_ ]{6,16}$/.test(this.nuovaPassword) &&
                        /[A-Z]/.test(this.nuovaPassword) &&  //devono esserci almeno un carattere compreso tra A e Z
                        /[a-z]/.test(this.nuovaPassword) && //almeno un carattere compreso tra a e z
                        /[0-9]/.test(this.nuovaPassword)    //almeno un carattere compreso tra 0 e 9
                    ) {

                        this.passwordValida = true;
                    } else this.passwordValida = false;
                } else {
                    this.passwordValida = true; //Se la casella di testo è vuota, si ritorna alla condizione iniziale.
                }

            },

            controlloUsername() {   
                if (this.nuovoUsername) {
                    var usernameDisponibile = this.controlloUsernameDisponibile();
                    var usernameCorretto = this.nuovoUsername.length >= 4 && !(/[ ]/.test(this.nuovoUsername));

                    if (usernameDisponibile && usernameCorretto) {
                        this.usernameValido = true;  //assume true se l'username non è gia stato preso e se è maggiore di 4 caratteri
                    } else {
                        this.usernameValido = false;   
                        this.messaggioErroreUsername = "ERRORE: "; 
                        if (!usernameCorretto)  //stampo un messaggio d'errore diverso a seconda della condizione che si è verificata o meno
                            this.messaggioErroreUsername += "Username non valido!";
                        else this.messaggioErroreUsername += "Username già esistente!";
                    }
                } else {
                    this.usernameValido = true; //Se la casella di testo è vuota, si ritorna alla condizione iniziale.
                }
            },

            controlloUsernameDisponibile() {    //controlla tutti gli username dei database
                for (var utente of this.utenti) {
                    if (utente.username == this.nuovoUsername) {
                        return false;
                    }
                }
                return true
            },

            aggiuntaUtente() { //metodo per la registrazione di un nuovo utente

                if (this.validazioneDati()) { //se questo controllo fallisce sicuramente ci sono degli errori nella registrazione
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
                } else {
                    alert("Registrazione fallita!\nSono presenti degli errori.");
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