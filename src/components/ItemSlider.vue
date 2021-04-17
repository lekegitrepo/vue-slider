<template>
  <div>
    <v-app id="inspire">
      <v-carousel :cycle="true">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "ItemSlider",
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style style lang="scss" scoped>
#example-custom-transition {
  .fade {
    &-enter-active,
    &-leave-active,
    &-leave-to {
      transition: 0.3s ease-out;
      position: absolute;
      top: 0;
      left: 0;
    }
    &-enter,
    &-leave,
    &-leave-to {
      opacity: 0;
    }
  }
}
</style>
