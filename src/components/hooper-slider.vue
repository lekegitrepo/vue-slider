<template>
  <div class="carousel-wrapper">
    <!-- <button @click.prevent="slidePrev" class="prev" :class="{ display: hover }">
      prev
    </button> -->

    <hooper
      ref="carousel"
      @slide="updateCarousel"
      :settings="settings"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :transition="3000"
    >
      <slide v-for="(i, index) in items" :key="index" :index="index">
        <img :src="i" />
      </slide>
      <hooper-navigation
        slot="hooper-addons"
        class="hooper-nav"
      ></hooper-navigation>
      <hooper-pagination
        slot="hooper-addons"
        class="hooper-indicator"
      ></hooper-pagination>
    </hooper>
    <!-- <button @click.prevent="slideNext" class="next" :class="{ display: hover }">
      next
    </button> -->
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from "hooper";
//import "hooper/dist/hooper.css";
import "../assets/hooper.css";

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
  },
  props: {
    items: {
      type: Array,
      hover: false,
    },
  },
  data() {
    return {
      carouselData: 0,
      settings: {
        autoPlay: true,
        infiniteScroll: true,
      },
    };
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    },
  },
};
</script>

<style scoped>
.carousel-wrapper {
  position: relative;
  width: 400px;
}
</style>
