<template>
  <div class="slider">
    <Carousel :items-to-show="1">
      <Slide v-for="slide in slides" :key="slide">
        <img :src="slide.image" alt="" />
      </Slide>
      <template #addons>
        <Navigation class="button" />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "slider",
  computed: {
    ...mapState("slider", ["slides"]),
  },
  components: { Carousel, Navigation, Pagination, Slide },
};
</script>
<style scoped>
.carousel__slide {
  height: 70vh;
}

.carousel__prev,
.carousel__next {
  box-sizing: border-box;
  border: 40px solid white;
}
</style>
