<template>

    <div>
        <!--Form per aggiunta prodotto alla lista -->
        <div id = "idAggiuntaProdotto">
            <input type ="text" class="form-control" placeholder = "Nome del prodotto..." v-on:keyup.enter = "aggiuntaProdotto()"  v-model = "nuovoProdotto"/>
            <input type = "submit" class = "btn btn-primary" v-on:click= "aggiuntaProdotto()" value = "Aggiungi"/>
        </div>

        <!--Stampa e controllo lista della spesa-->
        
        <div id ="idLista">
            <div v-if = "listaSpesa.length == 0">Non sono presenti prodotti nella lista.</div> <!--Se non ci sono oggetti nell'array-->
            <div v-else>           <!--Se nell'array ci sono degli oggetti, stampa tutti gli elementi-->
                
                    <draggable v-model="listaSpesa"  @start="drag=true" @end="drag=false">    
                        <li v-for = "prodotto in listaSpesa">  <!--ogni prodotto stampato diventa un li-->
                            <label class = "testoProdotto" v-bind:class = "'prodottoPreso-' + prodotto.preso">{{prodotto.testo}}</label>
                            <input v-on:keyup.delete = "eliminazioneProdottiSelezionati()" v-on:click = "aggiornamentoChecked(prodotto)"  v-bind:checked = "prodotto.preso" 
                                    type = "checkbox"/>
                        </li>
                    </draggable>
            </div>
        </div>

        <div id = "idEliminazione" v-show = "numProdottiSelezionati != 0"> <!--se c'è almeno un prodotto selezionato, appare il pulsante per l'eliminazione-->
            <button class = "btn btn-danger" v-on:click = "eliminazioneProdottiSelezionati()">Elimina {{numProdottiSelezionati}} prodotti selezionati</button>
        </div>
    </div>
</template>

<script>

    import draggable from 'vuedraggable'

    export default{
         components:{
             draggable
         } ,

        data(){
            return {

                numProdottiSelezionati: 0,

                nuovoProdotto: "",

                listaSpesa: [
                    {
                        preso: false,      //oggetti hanno due variabili. preso indica se è stato selezionato 
                        testo: "Latte"         //testo identifica il prodotto
                    }, 
                    {
                        preso: false,
                        testo: "Miele"
                    }, 
                    {
                        preso: false,
                        testo: "Patatine"
                    }]
            }
        },

        methods:{
            
           aggiuntaProdotto: function(){
               if(this.nuovoProdotto){
                 this.listaSpesa.push(     //funzione che aggiunge l'elemento preso all'array di oggetti
                    {
                        preso: false,    //false di default         
                        testo: this.nuovoProdotto    //tramite il v-model assegno a testo il nome digitato
                    }
                );
                this.nuovoProdotto = "";      //alla fine reinizializzo la variabile 
               }
               else    //se non viene inserito niente e si preme invio, avverto l'utente tramite l'alert
                {
                    alert("Devi prima inserire il nome del prodotto!")
               }
           },



           aggiornamentoChecked: function(prodotto){         
               prodotto.preso = !prodotto.preso;  //cambia la condizione del prodotto da false a true e viceversa
               //a seconda se è selezionato o meno aumento o diminuisco il numero dei prodotti selezionati
               if(prodotto.preso ? this.numProdottiSelezionati++ :  this.numProdottiSelezionati--); 

           },

           eliminazioneProdottiSelezionati: function(){
        
               if(window.confirm("Confermi l'eliminazione di " + this.numProdottiSelezionati + " prodotti?"))
               {
                   var nuovaLista = new Array;   //viene creato un nuovo array 

                   for(var prodotto of this.listaSpesa)
                   {
                       if(!prodotto.preso){        //faccio nel nuovo array il push solo degli elementi che non sono spuntati
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
<style>

.prodottoPreso-true {       /**quando un prodotto è selezionato, viene sbarrato il nome e cambia il colore in grigio */
    text-decoration: line-through;
    color: grey;
}

.container {
    padding-top: 30px;
}

div#app {
    padding: 15px;
    border-radius: 20px;
    background-color: rgba(200, 207, 211, 0.212);
    display: table;
    margin: 0 auto;
}

li:nth-last-child() {
    border-radius: 5px;
}

li:nth-child(even) {
    background-color: rgba(208, 222, 231, 0.644);
}

.testoProdotto {
    max-width: 245px;
    word-break: break-all;
}

h1 {
    text-align: center;
}

li {
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 5px;
    display: block;
    background-color: rgb(188, 210, 226);
}

#idLista li{
    cursor: move;
}

label {
    margin-bottom: 0px;
}

input[type=checkbox] {
    float: right;
    width: 18px;
    height: 18px;
    margin-top: 1px;
}

.form-control {
    margin-right: 2px;
    display: inline-block;
    width: auto;
}

div#idAggiuntaProdotto {
    margin-top: 50px;
}

div#idLista {
    margin-top: 35px;
    margin-bottom: 15px;
}

div#idEliminazione {
    margin-top: 25px;
}

input[type=submit].btn{
    margin-bottom: 1px;
}
</style>
