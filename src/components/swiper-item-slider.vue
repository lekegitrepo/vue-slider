<template>
  <!-- Slider main container -->
  <div ref="mySlider" class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <img
        class="swiper-slide"
        v-for="(i, index) in items"
        :key="index"
        :src="i"
      />
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <button @click="prev" class="swiper-button-prev"></button>
    <button @click="next" class="swiper-button-next"></button>
    <!-- If we need scrollbar -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>
<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "../assets/swiper.css";
export default {
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      slider: null,
      mySliderOptions: {
        autoplay: true,
        loop: true,
        speed: 400,
        spaceBetween: 30,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  methods: {
    prev() {
      this.slider.slidePrev();
    },
    next() {
      this.slider.slideNext();
    },
  },
  mounted() {
    this.slider = new Swiper(this.$refs.mySlider, this.mySliderOptions);
  },
};
</script>

<style scoped>
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 400px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  border: solid 2px rgb(170, 53, 53);
  height: auto;
}
.swiper-button-prev,
.swiper-button-next {
  border: none;
  border-radius: 10px;
  height: 20px;
  text-align: center;
  width: 20px;
}
</style>
