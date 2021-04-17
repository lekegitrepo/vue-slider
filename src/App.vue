<template>
  <dir>
    <item-slider :items="items" />
  </dir>
</template>

<script>
import ItemSlider from "./components/ItemSlider.vue";

export default {
  name: "App",

  components: {
    ItemSlider,
  },

  data() {
    return {
      items: [
        "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      ],
    };
  },
};
</script>
