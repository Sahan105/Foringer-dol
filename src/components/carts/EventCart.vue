<template>
  <div class="product-box">
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div id="shop" class="shop grid-container clearfix">
            <div class="product clearfix">
              <div class="product-image">
                <a href="#"
                  ><img
                    style="width: 390px; height: 300px"
                    :src="event.img1"
                    alt=""
                /></a>
                <a href="#"
                  ><img
                    style="width: 390px; height: 300px"
                    :src="event.img2"
                    alt=""
                /></a>
                <div class="product-overlay">
                  <router-link :to="{ name: 'Checkout' }" class="add-to-cart"
                    ><i class="icon-shopping-cart"></i
                    ><span @click="book"></span
                  ></router-link>
                  <router-link
                    :to="{ name: 'EventDetails', params: { id: event.id } }"
                    class="item-quick-view"
                    data-lightbox="ajax"
                    ><i class="icon-zoom-in2"></i><span></span>
                  </router-link>
                </div>
              </div>
              <div class="pt-3" id="text">
                <div class="product-title">
                  <h4>
                    <a href="#">{{ event.name }}</a>
                  </h4>
                </div>
                <div class="product-price">
                  <ins>৳ {{ event.price }}</ins>
                </div>
                <div class="product-rating"></div>
              </div>
            </div>
          </div>
          <!-- #shop end -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["event"],
  methods: {
    book() {
      localStorage.setItem("name", this.$props.event.name);
      localStorage.setItem("price", this.$props.event.price);
      localStorage.setItem("img", this.$props.event.img1);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#text {
  text-align: left;
}

.clearfix {
  margin: 0;
  padding: 0 5%;
}
.product-price {
  width: 200px;
  margin: 0;
}
.product-title h4 {
  margin: 0;
  width: 300px;
}
.product-overlay {
  width: 300px;
}

.container {
  margin: 0;
  padding: 0;
}
.content-wrap {
  padding: 0;
}
.product {
  padding: 0 0 6% 0;
}
.add-to-cart i,
.item-quick-view i {
  font-size: 3rem;
  color: #5a5a5a;
}
.product-box {
  padding: 0;
}
.add-to-cart:hover,
.item-quick-view:hover {
  background-color: #ddd;
  color: #bdbdbd;
}
</style>
