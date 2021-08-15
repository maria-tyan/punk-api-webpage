<template>
  <div class="basic-accordion">
    <button
      @click="toogleItem"
      :data-state="isShow ? '+' : '-'"
      class="basic-accordion__btn">
      {{ beerData.name }}
    </button>
    <transition name="slide">
      <div
        v-if="isShow"
        class="basic-accordion__content">
        <div class="basic-accordion__img-container">
          <img
            :src="beerData.image_url"
            :alt="beerData.name"
            class="basic-accordion__img"
          />
        </div>
        <div class="basic-accordion__text">
          <h3 class="basic-accordion__tagline">
            {{ beerData.tagline }}
          </h3>
          <p class="basic-accordion__description">
            {{ beerData.description }}
          </p>
          <p class="basic-accordion__description">
            <b>Date first brewed:</b>
            {{ beerData.first_brewed }}
          </p>
          <p class="basic-accordion__description">
            <b>Alcohol by Volume:</b>
            {{ beerData.abv }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BasicAccordion',

  props: {
    beerData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toogleItem() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped lang="less">
  @import "../styles/basic-accordion.less";
  @import "../styles/slide-transition.less";
</style>
