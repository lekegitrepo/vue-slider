<template>
  <div class="carousel-wrapper">
    <div>
      <VueSlickCarousel v-bind="settings" class="carousel">
        <!-- <div class="div-1">1</div>
        <div class="div-2">2</div>
        <div class="div-3">3</div>
        <div class="div-4">4</div> -->
        <!-- <div v-for="(item, index) in items" :key="index" class="img-wrapper">
          <img :src="item" />
        </div> -->
        <div v-for="(item, index) in items" :key="index">
          <div class="row">
            <h3><img :src="item" /></h3>
          </div>
        </div>
        <template #prevArrow="arrowOption">
          <div class="custom-arrow">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="custom-arrow">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
        /*...*/
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "ItemSlider",
  components: {
    VueSlickCarousel,
  },
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      settings: {
        dots: true,
        autoplay: true,
        swipeToSlide: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss" scoped>
/* .carousel-wrapper {
  width: 400px;
}
.custom-arrow {
  background-color: black;
  color: red;
}
.slick-prev {
  left: -15px;
  z-index: 10;
}
.slick-next {
  right: -12px;
}
.slick-dots .custom-dot-class {
  bottom: 20px;
}
.slick-dots {
  position: absolute;
  bottom: -25px;
  display: block;
  width: 100%;
  padding: 200px;
  margin: 0;
  list-style: none;
  text-align: center;
} */
/* .div-0 {
  height: 400px;
  width: 600px;
  background-color: rgb(62, 109, 236);
}
.div-1 {
  height: 400px;
  width: 600px;
  background-color: rgb(93, 180, 173);
}
.div-2 {
  height: 400px;
  width: 600px;
  background-color: rgb(128, 153, 60);
}
.div-3 {
  height: 400px;
  width: 600px;
  background-color: rgb(73, 84, 230);
}
.div-4 {
  height: 400px;
  width: 600px;
  background-color: rgb(236, 92, 128);
} */
</style>
