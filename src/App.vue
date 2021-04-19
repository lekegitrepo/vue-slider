<template>
  <div>
    <item-slider :items="items" />
    <hooper-slider :items="items" />
    <swiper-slider :items="items" />
  </div>
</template>

<script>
import HooperSlider from "./components/hooper-slider.vue";
import ItemSlider from "./components/ItemSlider.vue";
import SwiperSlider from "./components/swiper-item-slider.vue";

export default {
  name: "App",

  components: {
    ItemSlider,
    HooperSlider,
    SwiperSlider,
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
