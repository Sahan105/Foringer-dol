<template>
  <div class="shoplayout">
    <Navbar />
    <Shop />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer1";
import Shop from "../views/shop/Shopdetails";
export default {
  components: {
    Navbar,
    Footer,
    Shop,
  },
};
</script>
