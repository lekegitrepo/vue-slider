<template>
  <simple-carousel-container loop :watch-it="items">
    <simple-carousel-item v-for="(photo, index) in items" :key="index">
      <img :src="photo" />
    </simple-carousel-item>
  </simple-carousel-container>
</template>

<script>
import {
  SimpleCarouselContainer,
  SimpleCarouselItem,
} from "vue-simple-carousel";
export default {
  name: "ItemSlider",
  components: {
    SimpleCarouselContainer,
    SimpleCarouselItem,
  },
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss" scoped>
#example-custom-transition {
  .fade {
    &-enter-active,
    &-leave-active,
    &-leave-to {
      transition: 0.3s ease-out;
      position: absolute;
      top: 0;
      left: 0;
    }
    &-enter,
    &-leave,
    &-leave-to {
      opacity: 0;
    }
  }
}
</style>
