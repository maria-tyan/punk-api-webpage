<template>
  <div class="hello">
    <h1>Punk API WebPage</h1>
    <div v-for="(beer, i) in beersList" :key="i">
      <img :src="beer.image_url" :alt="beer.name" />
      {{ beer.name }}
    </div>
  </div>
</template>

<script>
import fetchData from '../mixins/fetchData';

export default {
  name: 'BeerList',
  mixins: [
    fetchData,
  ],
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
