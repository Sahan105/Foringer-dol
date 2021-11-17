<template>
  <div class="product-box">
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="product">
            <div class="product-image">
              <a href="#">
                <img
                  style="width: 330px; height: 300px"
                  :src="hotel.img1"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  style="width: 330px; height: 300px"
                  :src="hotel.img2"
                  alt=""
                />
              </a>
              <div class="product-overlay">
                <router-link :to="{ name: 'Checkout' }" class="add-to-cart">
                  <i class="icon-shopping-cart"></i>
                </router-link>
                <router-link
                  :to="{
                    name: 'HotelDetails',
                    params: { id: hotel.id, loc: hotel.location },
                  }"
                  class="item-quick-view"
                  data-lightbox="ajax"
                  ><i class="icon-zoom-in"></i
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["hotel"],
  methods: {
    book() {
      localStorage.setItem("name", this.$props.hotel.name);
      localStorage.setItem("price", this.$props.hotel.price);
      localStorage.setItem("img", this.$props.hotel.img1);
    },
  },
};
</script>

<style scoped>
#text {
  text-align: left;
}
.product-box {
  width: 375px;
  padding: 3% 9%;
}
.product-price {
  margin: 0;
}
.container {
  display: grid;

  margin: 0;
  padding: 0;
}
.add-to-cart {
  border: 0.5px solid #ddd;
  background-color: #fafafa;
}
.content-wrap {
  padding: 0;
}
.product {
  padding: 0;
}
.product-overlay {
  width: 320px;
}
.add-to-cart i,
.item-quick-view i {
  font-size: 3rem;
  color: #5a5a5a;
}
.add-to-cart:hover,
.item-quick-view:hover {
  background-color: #ddd;
  color: #bdbdbd;
}
</style>
