window.onload = function() {

    new Vue({

        el: '#appInterna',

        data: {

            numClientiDaVisualizzare: 6,
            stringaJsonClienti: "",

            ragioneSociale: "",
            dataRegistrazione: "",
            partitaIva: "",
            testoCercato: "",

            clienti: [{
                    ragioneSociale: "pippo s.r.l",
                    dataRegistrazione: "2017-02-18",
                    partitaIva: "123456789",
                    daVisualizzare: true
                },
                {
                    ragioneSociale: "pippo2 s.r.l",
                    dataRegistrazione: "2017-02-18",
                    partitaIva: "123456789",
                    daVisualizzare: true
                },
                {
                    ragioneSociale: "pippo2 s.r.l",
                    dataRegistrazione: "2017-02-18",
                    partitaIva: "123456789",
                    daVisualizzare: true
                },
                {
                    ragioneSociale: "pippo4 s.r.l",
                    dataRegistrazione: "2017-02-18",
                    partitaIva: "123456789",
                    daVisualizzare: true
                },
                {
                    ragioneSociale: "pippo5 s.r.l",
                    dataRegistrazione: "2017-02-18",
                    partitaIva: "123456789",
                    daVisualizzare: true
                },
                {
                    ragioneSociale: "pippo6 s.r.l",
                    dataRegistrazione: "2017-02-18",
                    partitaIva: "123456789",
                    daVisualizzare: true
                }
            ]
        },

        methods: {
            inizializzaDatiClienti() {

                this.stringaJsonClienti = getJsonFromLocalStorage('clienti');

                if (this.stringaJsonUtenti)
                    this.clienti = deserializzaObjDaJson(this.stringaJsonUtenti);
            },

            ricercaClienti() {
                this.numClientiDaVisualizzare = 0;
                for (var cliente of this.clienti) {
                    if (cliente.ragioneSociale.indexOf(this.testoCercato) != -1) {
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

            }
















        }
    })

}