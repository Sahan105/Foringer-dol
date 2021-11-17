<template>
  <div class="product-box">
    <div class="section notopmargin notopborder">
      <div class="container clearfix">
        <div class="heading-block center nomargin" id="heading">
          <h3>Featured Hotels</h3>
        </div>
      </div>
    </div>
    <Carousel :items-to-show="4" :itemsToScroll="2.5">
      <Slide class="productB" v-for="hotel in hotels" :key="hotel">
        <div class="product clearfix">
          <div class="product-image">
            <a href="">
              <img
                style="width: 370px; height: 300px"
                :src="hotel.img1"
                alt=""
              />
            </a>
            <a href="">
              <img
                style="width: 370px; height: 300px"
                :src="hotel.img2"
                alt=""
              />
            </a>
            <div class="product-overlay">
              <span class="add-to-cart" @click="toCheckout(hotel)"
                ><i class="icon-shopping-cart"></i
              ></span>
              <router-link
                :to="{
                  name: 'HotelDetails',
                  params: { id: hotel.id, loc: hotel.location },
                }"
                class="item-quick-view"
                data-lightbox="ajax"
                ><i class="icon-zoom-in"></i><span></span
              ></router-link>
            </div>
          </div>
          <div id="text">
            <div class="product-title">
              <h3>
                <a href="#">{{ hotel.name }}</a>
              </h3>
            </div>
            <div class="product-price">
              <ins>৳ {{ hotel.price }}</ins>
            </div>
            <div>
              <a href="#" class="icon-map-marker2" style="color: #999999">{{
                " " + hotel.location
              }}</a>
            </div>
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
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default {
  name: "productbox",
  computed: {
    ...mapState("productbox", ["hotels"]),
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  methods: {
    toCheckout(hotel) {
      this.$router.push({ name: "Checkout", query: { type: "hotels" } });
      this.$store.dispatch("productbox/addhotel", hotel);
    },
  },
};
</script>

<style scoped>
#text {
  text-align: left;
  padding: 0 0 13% 0;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.carousel__slide {
  background-color: #f9f9f9;
}
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
.product-price {
  margin: 0;
}
.section {
  margin: 0;
}
.productB {
  padding: 0 1.5%;
}
.clearfix {
  margin: 0;
}
.container {
  margin: 0;
  padding: 0;
}
.content-wrap {
  padding: 0;
}

.add-to-cart {
  padding: 7.2% 20%;
  border: 0.5px solid #ddd;
  background-color: #fafafa;
}
.add-to-cart i,
.item-quick-view i {
  font-size: 3rem;
  color: #5a5a5a;
}
.product-box {
  padding: 0 5%;
  margin-bottom: 2%;
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
