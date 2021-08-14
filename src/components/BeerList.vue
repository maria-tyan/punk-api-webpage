<template>
  <div class="">
    <h1>Punk API WebPage</h1>
    <div v-for="(beer, i) in beersList" :key="i">
      <BasicAccordion :beerData="beer"/>
    </div>
  </div>
</template>

<script>
import fetchData from '../mixins/fetchData';
import BasicAccordion from './BasicAccordion.vue';

export default {
  name: 'BeerList',
  mixins: [
    fetchData,
  ],
  components: {
    BasicAccordion,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      beersList: [],
    };
  },
  async mounted() {
    this.beersList = await this.fetchData('https://api.punkapi.com/v2/beers');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
