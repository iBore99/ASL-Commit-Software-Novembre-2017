<template>
  <div>
    <h1>{{title}}</h1>
    <pComp/>
  </div>

</template>

<script>
  import provaComponent from "./components/provaComponent.vue"
  
  export default{
    components: {
      'pComp': provaComponent
    },
    data(){
      return {
        title: 'Prima app'
      }
    }
  }

</script>

<style>

</style>
