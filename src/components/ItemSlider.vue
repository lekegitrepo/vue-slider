<template>
  <div>
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell" v-for="(i, index) in items" :key="index">
        <img :src="i" />
      </div>
    </flickity>
  </div>
</template>

<script>
import Flickity from "vue-flickity";
export default {
  name: "ItemSlider",
  components: {
    Flickity,
  },
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
  },
  data() {
    return {
      flickityOptions: {
        pageDots: true,
        wrapAround: true,
        autoPlay: true,
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss">
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.carousel {
  background: #eee;
}

.carousel-cell {
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: #8c8;
  border-radius: 5px;
  counter-increment: gallery-cell;
}

/* cell number */
// .carousel-cell:before {
//   display: block;
//   text-align: center;
//   content: counter(gallery-cell);
//   line-height: 200px;
//   font-size: 80px;
//   color: white;
// }
</style>
