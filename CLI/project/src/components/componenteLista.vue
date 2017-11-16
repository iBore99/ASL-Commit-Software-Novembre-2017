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

<script src = "./codiceComponenteLista.js"></script>

<style scoped src = "./stileComponenteLista.css"></style>
