window.onload = function() {
    new Vue({

        el: '#appLoginReg',

        data: {
            disabilitaRegistrati: true,
            /*Variabili flag che mi servono per decidere cosa mostrare 
            nella pagina in base ai dati inseriti*/
            messaggioErroreUsername: "", //cambia in base al tipo di errore
            usernameValido: true,
            passwordValida: true,
            confermaPasswordValida: true,


            nuovoUsername: "",
            nuovaEmail: "",
            nuovaPassword: "",
            confermaPassword: "",
            stringaJsonUtenti: "",
            controlloPulsante: true,

            utenti: [],
        },

        methods: {

            inizializzaDati() {

                this.stringaJsonUtenti = getJsonFromLocalStorage('utenti');

                if (this.stringaJsonUtenti)
                    this.utenti = deserializzaObjDaJson(this.stringaJsonUtenti);
            },

            validazioneDati() {
                return (this.passwordValida && this.usernameValido)
            },

            controlloPassword() {

                if (this.nuovaPassword) {
                    /*è necessario questo controllo perchè veniva eseguito il controllo sulla password anche quando non veniva 
                    scritto nulla, per esempio bastava che si fosse premuto il tasto "tab" per passare a quella casella di testo.*/
                    if ( //controllo se la password ha un formato valido 
                        /^[a-zA-Z0-9?!$+-/.,@^_ ]{6,16}$/.test(this.nuovaPassword) &&
                        /[A-Z]/.test(this.nuovaPassword) && //devono esserci almeno un carattere compreso tra A e Z
                        /[a-z]/.test(this.nuovaPassword) && //almeno un carattere compreso tra a e z
                        /[0-9]/.test(this.nuovaPassword) //almeno un carattere compreso tra 0 e 9
                    ) {

                        this.passwordValida = true;
                    } else this.passwordValida = false;
                } else {
                    this.passwordValida = true; //Se la casella di testo è vuota, si ritorna alla condizione iniziale.
                }

            },

            controlloConfermaPassword() {
                if (this.confermaPassword) {
                    if (this.nuovaPassword == this.confermaPassword) {
                        this.confermaPasswordValida = true;
                    } else {
                        this.confermaPasswordValida = false;
                    }
                } else {
                    this.confermaPasswordValida = true;
                }


            },

            sonoPresentiErrori() {

                if (!(this.nuovaEmail && this.nuovaPassword && this.nuovoUsername && this.confermaPassword) ||
                    !(this.confermaPasswordValida && this.usernameValido && this.passwordValida)) {
                    this.disabilitaRegistrati = true;
                    return false;
                } else {
                    this.disabilitaRegistrati = false;
                    return true;
                }


            },

            controlloUsername() {
                if (this.nuovoUsername) {
                    var usernameDisponibile = this.controlloUsernameDisponibile();
                    var usernameCorretto = this.nuovoUsername.length >= 4 && !(/[ ]/.test(this.nuovoUsername));

                    if (usernameDisponibile && usernameCorretto) {
                        this.usernameValido = true; //assume true se l'username non è gia stato preso e se è stato scritto rispettando le norme
                    } else {
                        this.usernameValido = false;
                        this.messaggioErroreUsername = "ERRORE: ";
                        if (!usernameCorretto) //stampo un messaggio d'errore diverso a seconda della condizione che si è verificata o meno
                            this.messaggioErroreUsername += "Username non valido!";
                        else this.messaggioErroreUsername += "Username già esistente!";
                    }
                } else {
                    this.usernameValido = true; //Se la casella di testo è vuota, si ritorna alla condizione iniziale.
                }
            },

            controlloUsernameDisponibile() { //controlla tutti gli username dei database
                for (var utente of this.utenti) {
                    if (utente.username == this.nuovoUsername) {
                        return false;
                    }
                }
                return true
            },

            aggiuntaUtente() { //metodo per la registrazione di un nuovo utente

                if (this.stringaJsonUtenti)
                    this.utenti = deserializzaObjDaJson(this.stringaJsonUtenti);

                this.utenti.push({
                    username: this.nuovoUsername,
                    email: this.nuovaEmail,
                    password: this.nuovaPassword
                });


                this.stringaJsonUtenti = serializzaObjInJson(this.utenti);
                localStorage.setItem("utenti", this.stringaJsonUtenti);

                this.nuovoUsername = "";
                this.nuovaEmail = "";
                this.nuovaPassword = "";
                alert("Registrazione avvenuta con successo!");

            },

            cambiaStato() {
                this.controlloPulsante = !this.controlloPulsante; //cambia il valore della variabile 
                this.nuovaPassword = "";
                this.nuovoUsername = "";
                this.nuovaEmail = "";
            },

            confrontaCredenziali() { //funzione chiamata nella sezione del login: fa il confronto tra le credenziali inserite e quelle registrate
                for (var utente of this.utenti) {
                    if (this.nuovoUsername == utente.username && this.nuovaPassword == utente.password) {
                        //se vengono riconosciuti sia l'username che la password, l'autenticazione viene eseguita correttamente
                        alert("Autenticazione avvenuta con successo.");
                        return;
                    }
                }

                alert("Autenticazione fallita!");
            }
        }

    })
}