window.onload = function() {
    new Vue
        ({
            el: '#app',

            data: {
                prodotto: "",
                lista_spesa: []
            },

            methods: {


                logProdotto: function() {
                    console.log('Hai inserito il prodotto')
                },

                aggiungiProdotto: function() {
                    this.lista_spesa.push(this.prodotto);
                    this.prodotto = "";
                }
            }


        })
}