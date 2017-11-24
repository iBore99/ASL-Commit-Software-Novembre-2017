window.onload = function() {

    new Vue({

        el: '#appAggiuntaCliente',

        data: {

            disabilitaAggiungi: true,
            giaEntrato: false,
            stringaJsonClienti: "",
            nuovaRagioneSociale: "",
            dataRegistrazione: "",
            nuovaPartitaIva: "",
            nuovoIndirizzoResidenza: "",
            nuovoContattoTelefonico: "",
            nuovoIndirizzoMail: "",
            nuovoSettore: "",

            clienti: []

        },

        methods: {
            inizializzazioneDatiAggiuntaCliente() {
                if (!this.giaEntrato) {
                    this.stringaJsonClienti = getJsonFromLocalStorage('clienti');
                    this.clienti = deserializzaObjDaJson(this.stringaJsonClienti);
                    if (!this.clienti)
                        this.clienti = [];
                    this.giaEntrato = true;

                }
                this.controlloPresenzaModifiche();
            },
            aggiungiCliente() {

                var dt = new Date();

                // Display the month, day, and year. getMonth() returns a 0-based number.
                var month = dt.getMonth() + 1;
                var day = dt.getDate();
                var year = dt.getFullYear();
                var dataIt = day + "/" + month + "/" + year;

                this.clienti.push({
                    ragioneSociale: this.nuovaRagioneSociale,
                    contattoTelefonico: this.nuovoContattoTelefonico,
                    partitaIva: this.nuovaPartitaIva,
                    indirizzoResidenza: this.nuovoIndirizzoResidenza,
                    settore: this.nuovoSettore,
                    indirizzoMail: this.nuovoIndirizzoMail,
                    daVisualizzare: true,
                    espanso: false,
                    dataRegistrazione: dataIt
                });

                this.stringaJsonClienti = serializzaObjInJson(this.clienti);
                localStorage.setItem("clienti", this.stringaJsonClienti);

                alert("Cliente aggiunto correttamente!");
                this.ripristinaForm();

            },

            ripristinaForm() {
                this.nuovaRagioneSociale = "";
                this.nuovaPartitaIva = "";
                this.nuovoIndirizzoResidenza = "";
                this.nuovoContattoTelefonico = "";
                this.nuovoIndirizzoMail = "";
                this.nuovoSettore = "";
            },

            controlloPresenzaModifiche() {
                if (!(this.nuovaRagioneSociale && this.nuovoContattoTelefonico && this.nuovoIndirizzoResidenza &&
                        this.nuovoIndirizzoMail && this.nuovoSettore && this.nuovaPartitaIva)) {

                    this.disabilitaAggiungi = true;
                } else {
                    this.disabilitaAggiungi = false;
                }
            }
        }


    })

}