window.onload = function() {

    new Vue({
        el:'#appModifica',

        data: 
        {
            stringaJsonClienti:"",
            clienti: [],
            iClienteDaMod: -1,
            nuovoIndirizzoResidenza: "",
            nuovaRagioneSociale: "",
            nuovoContattoTelefonico: ""
        },


        methods: 
        {

            inizializzazioneDatiModifica()
            {
                                
                this.stringaJsonClienti=getJsonFromLocalStorage('clienti');
                this.clienti = deserializzaObjDaJson(this.stringaJsonClienti);
                this.iClienteDaMod = getJsonFromLocalStorage('iClienteDaModificare');

                this.nuovoIndirizzoResidenza = this.clienti[this.iClienteDaMod].indirizzoResidenza;
                this.nuovaRagioneSociale = this.clienti[this.iClienteDaMod].ragioneSociale;
                this.nuovoContattoTelefonico  = this.clienti[this.iClienteDaMod].contattoTelefonico;
            }        






        }



    })
    











}