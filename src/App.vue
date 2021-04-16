<template>
  <div id="app">
    <item-slider />
  </div>
</template>

<script>
import ItemSlider from "./components/ItemSlider.vue";

export default {
  name: "App",
  components: {
    ItemSlider,
  },
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
