<template>
  <BeerList />
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
  color: #000;
  margin-top: 60px;
}
</style>
