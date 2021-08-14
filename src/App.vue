<template>
  <BeerList msg="Welcome to Your Vue.js App"/>
</template>

<script>
import BeerList from './components/BeerList.vue';

export default {
  name: 'App',
  components: {
    BeerList,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
