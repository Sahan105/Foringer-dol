<template>
  <div class="product-box">
    <div class="section notopmargin notopborder">
      <div class="container clearfix">
        <div class="heading-block center nomargin" id="heading">
          <h3>Featured Events</h3>
        </div>
      </div>
    </div>
    <Carousel :items-to-show="4" :itemsToScroll="2.5">
      <Slide v-for="event in events" :key="event" class="productB">
        <div class="product clearfix">
          <div class="product-image">
            <a href=""
              ><img
                style="width: 370px; height: 300px"
                :src="event.img1"
                alt=""
            /></a>
            <a href=""
              ><img
                style="width: 370px; height: 300px"
                :src="event.img2"
                alt=""
            /></a>
            <div class="product-overlay">
              <span class="add-to-cart" @click="toCheckout(event)"
                ><i class="icon-shopping-cart"></i
              ></span>
              <!-- </router-link> -->
              <router-link
                :to="{ name: 'EventDetails', params: { id: event.id } }"
                class="item-quick-view"
                data-lightbox="ajax"
                ><i class="icon-zoom-in2"></i><span></span>
              </router-link>
            </div>
          </div>
          <div id="text">
            <div class="product-title">
              <h5>
                <a href="">{{ event.name }}</a>
              </h5>
            </div>
            <div class="product-price">
              <ins>৳ {{ event.price }}</ins>
            </div>
            <div class="product-rating"></div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  methods: {
    toCheckout(event) {
      this.$router.push({ name: "Checkout", query: { type: "events" } });
      this.$store.dispatch("productbox/addevent", event);
      console.log(event);
    },
  },
  computed: {
    ...mapState("productbox", ["events"]),
  },
});
</script>

<style scoped>
.carousel__item {
  width: 100%;
  background-color: #1c3df6;
  color: #ffecec;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  background-color: #f9f9f9;
}
.section {
  margin: 0;
}
.add-to-cart {
  padding: 7.2% 20%;
  border: 0.5px solid #ddd;
  background-color: #fafafa;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.productB {
  padding: 0 1.5%;
}
#text {
  text-align: left;
  padding: 0 0 13% 0;
}

.clearfix {
  margin: 0;
}
.product-price {
  margin: 0;
}
.product-title h4 {
  margin: 0;
  width: 300px;
}

.container {
  margin: 0;
  padding: 0;
}
.content-wrap {
  padding: 0;
}

.add-to-cart i,
.item-quick-view i {
  font-size: 3rem;
  color: #5a5a5a;
}
.product-box {
  padding: 0 5%;
}
.add-to-cart:hover,
.item-quick-view:hover {
  background-color: #ddd;
  color: #bdbdbd;
}
#heading {
  padding-left: 25%;
}
</style>
