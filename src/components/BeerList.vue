<template>
  <div>
    <h1>Punk API WebPage</h1>
    <div class="list-wrapper">
      <BasicAccordion
        v-for="(beer, i) in beersList"
        :key="i"
        :beerData="beer"/>
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

<style scoped lang="less">
.list-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
