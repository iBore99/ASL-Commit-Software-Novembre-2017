window.onload = function() {

    new Vue({
        el: '#appModifica',

        data: {
            disabilitaSalva: true,
            giaEntrato: false,
            stringaJsonClienti: "",
            clienti: [],
            iClienteDaMod: -1,
            nuovoIndirizzoResidenza: "",
            nuovaRagioneSociale: "",
            nuovoContattoTelefonico: "",
            nuovoIndirizzoMail: "",
            nuovoSettore: "",
        },


        methods: {
            inizializzazioneDatiModifica() {


                if (!(this.giaEntrato)) {
                    this.stringaJsonClienti = getJsonFromLocalStorage('clienti');
                    this.clienti = deserializzaObjDaJson(this.stringaJsonClienti);
                    this.iClienteDaMod = getJsonFromLocalStorage('iClienteDaModificare');
                    if (!this.nuovoIndirizzoResidenza) this.giaEntrato = false;
                    else {
                        this.giaEntrato = true;
                        return;
                    }
                    this.ripristinaForm();

                }
                this.controlloValoriModificati();
            },



            effettuaModifica() {
                this.clienti[this.iClienteDaMod].indirizzoResidenza = this.nuovoIndirizzoResidenza;
                this.clienti[this.iClienteDaMod].ragioneSociale = this.nuovaRagioneSociale;
                this.clienti[this.iClienteDaMod].contattoTelefonico = this.nuovoContattoTelefonico;
                this.clienti[this.iClienteDaMod].indirizzoMail = this.nuovoIndirizzoMail;
                this.clienti[this.iClienteDaMod].settore = this.nuovoSettore;
                setObjToLocalStorage('clienti', this.clienti);

                alert("Modifiche effettuate correttamente.");
            },

            ripristinaForm() {
                this.nuovoIndirizzoResidenza = this.clienti[this.iClienteDaMod].indirizzoResidenza;
                this.nuovaRagioneSociale = this.clienti[this.iClienteDaMod].ragioneSociale;
                this.nuovoContattoTelefonico = this.clienti[this.iClienteDaMod].contattoTelefonico;
                this.nuovoIndirizzoMail = this.clienti[this.iClienteDaMod].indirizzoMail;
                this.nuovoSettore = this.clienti[this.iClienteDaMod].settore;
            },

            controlloValoriModificati() {
                if (this.nuovaRagioneSociale == this.clienti[this.iClienteDaMod].ragioneSociale &&
                    this.nuovoContattoTelefonico == this.clienti[this.iClienteDaMod].contattoTelefonico &&
                    this.nuovoIndirizzoResidenza == this.clienti[this.iClienteDaMod].indirizzoResidenza &&
                    this.nuovoIndirizzoMail == this.clienti[this.iClienteDaMod].indirizzoMail &&
                    this.nuovoSettore == this.clienti[this.iClienteDaMod].settore ||
                    (!this.nuovaRagioneSociale || !this.nuovoContattoTelefonico || !this.nuovoIndirizzoResidenza || !this.nuovoIndirizzoMail || !this.nuovoSettore)) {

                    this.disabilitaSalva = true;
                } else {
                    this.disabilitaSalva = false;
                }

            }

        }



    })












}