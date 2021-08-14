<template>
  <div class="basic-accordion">
    <div
      @click="isShow = !isShow"
      class="basic-accordion__title">
      <h2>
        {{ beerData.name }}
      </h2>
    </div>
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
        <div class="basic-accordion__description">
          <h3>
            {{ beerData.tagline }}
          </h3>
          <p>
            {{ beerData.description }}
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
};
</script>

<style scoped lang="less">
  @import "../styles/basic-accordion.less";
  @import "../styles/slide-transition.less";
</style>
