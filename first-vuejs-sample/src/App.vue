<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App. I am developing for the first time."/>
    <First msg="First Component"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import First from './components/First.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    First
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
