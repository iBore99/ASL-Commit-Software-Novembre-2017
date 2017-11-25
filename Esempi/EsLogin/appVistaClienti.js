window.onload = function() {

    new Vue({

        el: '#appInterna',

        data: {
            giaEntrato: false,


            numClientiDaVisualizzare: 6,
            stringaJsonClienti: "",
            ragioneSociale: "",
            dataRegistrazione: "",
            partitaIva: "",
            indirizzoResidenza: "",
            contattoTelefonico: "",
            codiceFiscale: "",
            indirizzoMail: "",
            testoCercato: "",


            clienti: []
        },

        methods: {
            inizializzaDatiClienti() {


                if (!this.giaEntrato) {
                    this.stringaJsonClienti = getJsonFromLocalStorage('clienti');

                    if (this.stringaJsonClienti)
                        this.clienti = deserializzaObjDaJson(this.stringaJsonClienti);

                    this.giaEntrato = true;

                }
                setObjToLocalStorage("clienti", this.clienti);
            },

            ricercaClienti() {
                this.numClientiDaVisualizzare = 0;
                for (var cliente of this.clienti) {
                    if (cliente.ragioneSociale.indexOf(this.testoCercato) != -1 ||
                        cliente.indirizzoResidenza.indexOf(this.testoCercato) != -1 ||
                        cliente.indirizzoMail.indexOf(this.testoCercato) != -1 ||
                        cliente.settore.indexOf(this.testoCercato) != -1 ||
                        cliente.partitaIva.indexOf(this.testoCercato) != -1 ||
                        cliente.contattoTelefonico.indexOf(this.testoCercato) != -1) {
                        cliente.daVisualizzare = true;
                        this.numClientiDaVisualizzare++;
                    } else {
                        cliente.daVisualizzare = false;
                    }
                }

            },

            rimuoviCliente(index) {
                this.clienti.splice(index, 1);

            },

            serializzaDatiClientiPerModifica(index) {


                setObjToLocalStorage("clienti", this.clienti);
                setObjToLocalStorage("iClienteDaModificare", index);

                cambioURLCorrente('modifica.html');

            }

        }
    })

}