import draggable from 'vuedraggable'

export default {
    components: {
        draggable
    },

    data() {
        return {

            numProdottiSelezionati: 0,

            nuovoProdotto: "",

            listaSpesa: [{
                    preso: false, //oggetti hanno due variabili. preso indica se è stato selezionato 
                    testo: "Latte" //testo identifica il prodotto
                },
                {
                    preso: false,
                    testo: "Miele"
                },
                {
                    preso: false,
                    testo: "Patatine"
                }
            ]
        }
    },

    methods: {

        aggiuntaProdotto: function() {
            if (this.nuovoProdotto) {
                this.listaSpesa.push( //funzione che aggiunge l'elemento preso all'array di oggetti
                    {
                        preso: false, //false di default         
                        testo: this.nuovoProdotto //tramite il v-model assegno a testo il nome digitato
                    }
                );
                this.nuovoProdotto = ""; //alla fine reinizializzo la variabile 
            } else //se non viene inserito niente e si preme invio, avverto l'utente tramite l'alert
            {
                alert("Devi prima inserire il nome del prodotto!")
            }
        },



        aggiornamentoChecked: function(prodotto) {
            prodotto.preso = !prodotto.preso; //cambia la condizione del prodotto da false a true e viceversa
            //a seconda se è selezionato o meno aumento o diminuisco il numero dei prodotti selezionati
            if (prodotto.preso ? this.numProdottiSelezionati++ : this.numProdottiSelezionati--);

        },

        eliminazioneProdottiSelezionati: function() {

            if (this.numProdottiSelezionati != 0 && window.confirm("Confermi l'eliminazione di " + this.numProdottiSelezionati + " prodotti?")) {
                var nuovaLista = new Array; //viene creato un nuovo array 

                for (var prodotto of this.listaSpesa) {
                    if (!prodotto.preso) { //faccio nel nuovo array il push solo degli elementi che non sono spuntati
                        nuovaLista.push(prodotto);
                    }
                }
                this.listaSpesa = nuovaLista;
                this.numProdottiSelezionati = 0;
            }


        }

    }

}