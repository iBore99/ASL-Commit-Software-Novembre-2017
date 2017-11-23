window.onload = function() {

    new Vue({
        el:'#appModifica',
        
        data: 
        {
            giaEntrato: false,
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
                
                if(!(this.giaEntrato)){
                    this.stringaJsonClienti=getJsonFromLocalStorage('clienti');
                    this.clienti = deserializzaObjDaJson(this.stringaJsonClienti);
                    this.iClienteDaMod = getJsonFromLocalStorage('iClienteDaModificare');
                    if(!this.nuovoIndirizzoResidenza) this.giaEntrato = false;
                    else {
                        this.giaEntrato = true;
                        return;
                    }
                    this.nuovoIndirizzoResidenza = this.clienti[this.iClienteDaMod].indirizzoResidenza;
                    this.nuovaRagioneSociale = this.clienti[this.iClienteDaMod].ragioneSociale;
                    this.nuovoContattoTelefonico  = this.clienti[this.iClienteDaMod].contattoTelefonico;
                    
                }
            },        



            effettuaModifica(){
                this.clienti[this.iClienteDaMod].indirizzoResidenza = this.nuovoIndirizzoResidenza; 
                this.clienti[this.iClienteDaMod].ragioneSociale = this.nuovaRagioneSociale;
                this.clienti[this.iClienteDaMod].contattoTelefonico = this.nuovoContattoTelefonico;
                setObjToLocalStorage('clienti', this.clienti); 
                alert("Modifiche effettuate correttamente.");
            },

            ripristinaForm(){
                this.giaEntrato = false;
                
            }

        }



    })
    











}