<template>
  <div>
    <h1>{{title}}</h1>
    <cLista/>
  </div>

</template>

<script>
  import componenteLista from "./components/componenteLista.vue"
  
  export default{
    components: {
      'cLista': componenteLista
    },
    data(){
      return {
        title: 'Lista della spesa'
      }
    }
  }

</script>

<style>

</style>
