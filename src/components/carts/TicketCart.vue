<template>
  <div class="product-box">
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div
            id="shop"
            class="shop grid-container clearfix"
            data-layout="fitRows"
          >
            <div class="product clearfix" id="product">
              <div class="product-image" id="product-image">
                <a href="#"
                  ><img
                    style="height: 280px; width: 370px"
                    :src="ticket.img1"
                    alt="Checked Short Dress"
                /></a>
                <a href="#"
                  ><img
                    style="height: 280px; width: 370px"
                    :src="ticket.img2"
                    alt="Checked Short Dress"
                /></a>
                <div class="product-overlay">
                  <router-link :to="{ name: 'Checkout'}" class="add-to-cart"
                    ><i class="icon-shopping-cart" @click="book"></i
                    ><span></span></router-link
                  >
                </div>
              </div>
              <div id="text">
                <div class="product-title">
                  <h3>
                    <a href="#">{{ ticket.bus }}</a>
                  </h3>
                </div>
                <div class="product-price">
                  <ins>৳ {{ ticket.price }}</ins>
                </div>
                <div>
                  <a href="#" class="icon-map-marker2" style="color: #999999">{{ ' ' + ticket.destination }}</a>
                </div>
                <div>
                  <a href="#" class="icon-time" style="color: #999999">{{ ' ' + ticket.date + ',' }}</a> <a href="#" style="color: #999999">{{ ticket.time }}</a>
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
  props: ["ticket"],
  methods: {
    book(){
      localStorage.setItem('name' , this.$props.ticket.bus) 
      localStorage.setItem('price', this.$props.ticket.price)
      localStorage.setItem('img', this.$props.ticket.img1)
    } 
  }
};
</script>

<style scoped>
#text {
  text-align: left;
}
.product-price {
  margin: 0;
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
.add-to-cart:hover,
.item-quick-view:hover {
  background-color: #ddd;
  color: #bdbdbd;
}
</style>
