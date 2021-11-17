<template>
  <div>
    <h1>I am from TabA</h1>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  props: ["id"],
  computed: {
    ...mapState("productbox", ["events"]),
  },
  components: {
    VueperSlides,
    VueperSlide,
  },
};
</script>

<style scoped>
.vueperslides--fixed-height {
  height: 500px;
  width: 800px;
}
.container {
  display: flex;
}
.entry-title {
  margin-top: 5%;
}
.entry-title h4 {
  text-align: center;
}
.entry {
  margin: 0;
  padding: 0;
}
.entry-content p {
  margin: 0;
  padding: 0.9% 0;
}
.entry-content h4 {
  margin: 0;
}
.hotel {
  display: flex;
}
.hotel div {
  padding: 0% 1% 0% 0%;
}
.description p {
  padding-bottom: 5%;
}
.price {
  padding-bottom: 5%;
}
.entry-content i {
  font-size: 0.9rem;
  padding-right: 1%;
}
</style>
