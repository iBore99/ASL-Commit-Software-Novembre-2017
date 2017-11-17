<template>
  
  <div class = "container">
    <div id ="app">
      
        <h1>{{title}}</h1>
        <button @click = "stampaAlert()">CLICCAMI</button>
      <cLista/>
      
    </div>
  </div>
</template>

<script>

  import componenteLista from "./components/componenteLista.vue"
   var myJsFile = require('./funzioniJS.js');
 // import funzioniJS from "./funzioniJS.js"

  export default{
    components: {
      'cLista': componenteLista
    },
    data(){
      return {
        title: 'Lista della spesa'
      }
    },
    methods:{
      stampaAlert: () => {
           var a = myJsFile.mostraAlertJS();
           
      }
    }
  }

</script>

<style>
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

h1 {
    text-align: center;
}

</style>
