<template>

    <div>
        <!--Form per aggiunta prodotto alla lista -->
        <div id = "idAggiuntaProdotto">
            <label>Aggiungi prodotti alla lista: </label>

            <input v-on:keyup.enter = "aggiuntaProdotto()" type ="text" v-model = "nuovoProdotto"/>
            <input v-on:click= "aggiuntaProdotto()" type = "submit" value = "Aggiungi"/>
        </div>

        <!--Stampa e controllo lista della spesa-->
        <div id ="idLista">
            <ul>
                <li v-for = "prodotto in listaSpesa">
                    <label v-bind:class = "'prodottoPreso-' + prodotto.preso">{{prodotto.testo}}</label>
                    <input  v-on:click = "aggiornamentoChecked(prodotto)"  v-bind:checked = "prodotto.preso" 
                            type = "checkbox" v-bind:value = "prodotto.testo"/>
                </li>
            </ul>
        </div>

        <div id = "idEliminazione" v-show = "numProdottiSelezionati != 0">
            <button v-on:click = "eliminazioneProdottiSelezionati()">Elimina {{numProdottiSelezionati}} prodotti selezionati</button>
        </div>
    
    </div>
</template>

<script>
    export default{
        data(){
            return {

                numProdottiSelezionati: 0,

                nuovoProdotto: "",

                listaSpesa: [
                    {
                        preso: false,
                        testo: "Latte"
                    }, 
                    {
                        preso: false,
                        testo: "Miele"
                    }, 
                    {
                        preso: false,
                        testo: "patatine"
                    }]
            }
        },

        methods:{
           aggiuntaProdotto: function(){
               this.listaSpesa.push(
                   {
                       preso: false,
                       testo: this.nuovoProdotto
                   }
               );

               this.nuovoProdotto = "";
           },

           aggiornamentoChecked: function(prodotto){
               prodotto.preso = !prodotto.preso;
               if(prodotto.preso ? this.numProdottiSelezionati++ :  this.numProdottiSelezionati--);
           },

           eliminazioneProdottiSelezionati: function(){
               
               if(window.confirm("Confermi l'eleminazione di " + this.numProdottiSelezionati + " prodotti?"))
               {
                   var nuovaLista = new Array;

                   for(var prodotto of this.listaSpesa){
                       if(!prodotto.preso){
                           nuovaLista.push(prodotto);
                       }
                    }
                    
                    this.listaSpesa = nuovaLista;
                    this.numProdottiSelezionati = 0;
               }

              
            }

        }
    }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #idAggiuntaProdotto label{
        display: block; 
        margin-bottom: 10px;
    }
    .prodottoPreso-true{
        text-decoration: line-through;
        color:grey;
    }
</style>
