<template>
  <dir>
    <item-slider :items="items" />
    <hooper-slider :items="items" />
  </dir>
</template>

<script>
import HooperSlider from "./components/hooper-slider.vue";
import ItemSlider from "./components/ItemSlider.vue";

export default {
  name: "App",

  components: {
    ItemSlider,
    HooperSlider,
  },

  data() {
    return {
      items: [
        "https://www.linkpicture.com/q/Image-1_1.png",
        "https://www.linkpicture.com/q/Image-2_1.png",
        "https://www.linkpicture.com/q/Image-3_2.png",
        "https://www.linkpicture.com/q/Image-4.png",
        "https://www.linkpicture.com/q/Image-5.png",
      ],
    };
  },
};
</script>
