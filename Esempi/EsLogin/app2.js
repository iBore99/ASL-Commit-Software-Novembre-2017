window.onload = function() {

    new Vue({

        el: '#appInterna',

        data: {
            stringaJsonClienti: "",

            ragioneSociale: "",
            dataRegistrazione: "",
            partitaIva: "",

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
                    ragioneSociale: "pippo3 s.r.l",
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

            rimuoviCliente(index) {
                this.clienti.splice(index, 1);
            }
        }
    })

}