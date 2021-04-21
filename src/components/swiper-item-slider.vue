<template>
  <div class="container">
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
  </div>
</template>
<script>
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper/core";
// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
import "swiper/swiper-bundle.min.css";
// import "@/assets/swiper.css";
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
        autoHeight: true,
        centeredSlidesBounds: true,
        effect: "fade",
        loop: true,
        slideToClickedSlide: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
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
    this.slider = new SwiperCore(".swiper-container", this.mySliderOptions);
  },
};
</script>

<style scoped>
.container {
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
  border: none;
  height: auto;
}
.swiper-button-prev,
.swiper-button-next {
  border: none;
  border-radius: 10px;
  color: black;
  height: 20px;
  text-align: center;
  width: 20px;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 10px;
}
</style>
