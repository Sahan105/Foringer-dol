<template>
  <div class="blog" id="leatestblog">
    <div class="section notopmargin notopborder" id="section">
      <div class="container clearfix">
        <div class="heading-block center nomargin">
          <h3>Latest from the Blog</h3>
        </div>
      </div>
    </div>
    <div id="shop" class="shop grid-container clearfix">
      <div
        class="product clearfix"
        v-for="blog in blogs.slice(0,4)"
        :key="blog"
        id="product"
      >
        <BlogCart :blog="blog" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import BlogCart from "../components/carts/BlogCart";
export default {
  computed: {
    ...mapState("productbox", ["blogs"]),
  },
  components: {
    BlogCart,
  },
};
</script>
<style scoped>
.blog {
  text-align: center;
}
#leatestblog {
  padding-bottom: 5%;
}
.shop {
  padding: 0 10%;
}
</style>
