<template>
  <div class="page-wrapper">
    <h1>Punk API WebPage</h1>
    <div class="select">
      <select @change="onSort($event)">
        <option disabled selected value>
          -- select an option --
        </option>
        <option
          v-for="(item, id) in sortOptions"
          :key="id"
          :value="id">
          {{ item.label }}
        </option>
      </select>
    </div>
    <div class="list-wrapper">
      <BasicAccordion
        v-for="beer in beersList"
        :key="beer.id"
        :beerData="beer" />
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
  data() {
    return {
      beersList: [],
      sortOptions: [
        {
          label: 'Sort By: Name A to Z',
        },
        {
          label: 'Sort By: Name Z to A',
        },
        {
          label: 'Sort By: ABV Low to High',
        },
        {
          label: 'Sort By: ABV High to Low',
        },
      ],
    };
  },
  methods: {
    onSort(event) {
      switch (event.target.value) {
        case '0':
          this.beersList.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case '1':
          this.beersList.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case '2':
          this.beersList.sort((a, b) => (a.abv - b.abv));
          break;
        case '3':
          this.beersList.sort((a, b) => (b.abv - a.abv));
          break;
        default:
          break;
      }
    },
  },
  async mounted() {
    this.beersList = await this.fetchData('https://api.punkapi.com/v2/beers');
  },
};
</script>

<style scoped lang="less">
  @import "../styles/wrappers.less";
  @import "../styles/select.less";
</style>
