<template>
  <div class="product-box" id="allhotels">
    <div class="section notopmargin notopborder" id="section">
      <div>
        <div class="heading-block center nomargin">
          <h3>Hotels</h3>
        </div>
      </div>
    </div>
    <div id="shop">
      <div v-for="hotel in hotels" :key="hotel" id="product">
        <HotelCart :hotel="hotel" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HotelCart from "../components/carts/HotelCart";
export default {
  computed: {
    ...mapState("productbox", ["hotels"]),
  },
  components: {
    HotelCart,
  },
};
</script>
<style scoped>
#shop {
  padding: 0;
  display: grid;
  width: 300px;
  grid-template-columns: repeat(4, 1fr);
}

#section {
  margin: 0;
}

.product {
  padding: 0;
}
.clearfix {
  padding: 0;
}
</style>
