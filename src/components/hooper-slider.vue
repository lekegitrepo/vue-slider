<template>
  <div>
    <button @click.prevent="slidePrev">prev</button>
    <input v-model="carouselData" type="number" min="0" max="5" />
    <button @click.prevent="slideNext">next</button>

    <hooper ref="carousel" @slide="updateCarousel">
      <slide>
        slide 1
      </slide>
      <slide>
        slide 2
      </slide>
      <slide>
        slide 3
      </slide>
      <slide>
        slide 4
      </slide>
      <slide>
        slide 5
      </slide>
      <slide>
        slide 6
      </slide>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      carouselData: 0,
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
