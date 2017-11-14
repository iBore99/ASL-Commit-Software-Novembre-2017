window.onload = function() {

    new Vue({
        el: '#app',
        data: {

            numProdottiSelezionati: 0,

            nuovoProdotto: "",

            listaSpesa: [{
                    preso: false,
                    testo: "Latte"
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

        },

        methods: {
            aggiuntaProdotto: function() {
                if (this.nuovoProdotto != "") {
                    this.listaSpesa.push({
                        preso: false,
                        testo: this.nuovoProdotto
                    });

                    this.nuovoProdotto = "";
                }


            },

            aggiornamentoChecked: function(prodotto) {
                prodotto.preso = !prodotto.preso;
                if (prodotto.preso ? this.numProdottiSelezionati++ : this.numProdottiSelezionati--);
            },

            eliminazioneProdottiSelezionati: function() {

                if (window.confirm("Confermi l'eleminazione di " + this.numProdottiSelezionati + " prodotti?")) {
                    var nuovaLista = new Array;

                    for (var prodotto of this.listaSpesa) {
                        if (!prodotto.preso) {
                            nuovaLista.push(prodotto);
                        }
                    }

                    this.listaSpesa = nuovaLista;
                    this.numProdottiSelezionati = 0;
                }


            },


        }




    })

}