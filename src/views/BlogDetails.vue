<template>
  <div>
    <Navbar />
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="postcontent nobottommargin clearfix" style="width: 800px">
            <div v-for="blog in blogs" :key="blog.id">
              <div v-if="this.id == blog.id">
                <div id="posts" style="text-align: left">
                  <div class="entry clearfix">
                    <img :src="blog.img" alt="" />
                    <div class="entry-title">
                      <h2>
                        <a href="#">{{ blog.title }}</a>
                      </h2>
                    </div>
                    <ul class="entry-meta clearfix">
                      <li><i class="icon-calendar3"></i>{{ blog.date }}</li>
                      <li>
                        <a href="#"><i class="icon-user"></i> admin</a>
                      </li>
                      <li>
                        <a href="#"><i class="icon-camera-retro"></i></a>
                      </li>
                    </ul>
                    <div class="entry-content short-description">
                      <p>{{ blog.short_description }}</p>
                    </div>
                  </div>
                  <div class="entry clearfix">
                    <div class="entry-image">
                      <iframe
                        :src="blog.video"
                        width="800"
                        height="581"
                        frameborder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="entry-content description">
                      <p>{{ blog.description }}</p>
                    </div>
                  </div>
                  <div>
                    <vueper-slides :bullets="false" :fixed-height="true" fade>
                      <vueper-slide
                        v-for="slide in blog.slider_img"
                        :key="slide"
                        :image="slide.img"
                      />
                    </vueper-slides>
                  </div>
                  <div class="entry clearfix facebook">
                    <div class="entry-image">
                      <a
                        href="https://www.facebook.com/groups/foringerdol/"
                        class="entry-link"
                        target="_blank"
                      >
                        Join Our Facebook Group
                        <span
                          >https://www.facebook.com/groups/foringerdol/</span
                        >
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sidebar nobottommargin col_last clearfix">
            <div class="sidebar-widgets-wrap">
              <div class="widget widget-twitter-feed clearfix">
                <h4>Facebook Feed</h4>
                <ul
                  class="iconlist twitter-feed"
                  data-username="envato"
                  data-count="2"
                >
                  <li></li>
                </ul>
                <a
                  href="https://www.facebook.com/travelforing/"
                  target="_blank"
                  class="btn btn-default btn-sm fright"
                  >Follow Us on Facebook</a
                >
              </div>
              <div class="widget clearfix">
                <div class="tabs nobottommargin clearfix" id="sidebar-tabs">
                  <h4>Recent Blogs</h4>
                  <div class="tab-container">
                    <div class="tab-content clearfix" id="tabs-1">
                      <div id="popular-post-list-sidebar">
                        <div
                          class="spost clearfix"
                          v-for="blog in blogs"
                          :key="blog"
                        >
                          <router-link
                            :to="{
                              name: 'BlogDetails',
                              params: { id: blog.id },
                            }"
                          >
                            <div class="entry-image">
                              <a href="#" class="nobg"
                                ><img class="img-circle" :src="blog.img" alt=""
                              /></a>
                            </div>
                            <div class="entry-c">
                              <div class="entry-title">
                                <h4>
                                  <a href="#">{{ blog.short_description }}</a>
                                </h4>
                              </div>
                            </div>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget clearfix">
                <h4>Tag Cloud</h4>
                <div class="tagcloud">
                  <a href="#">general</a>
                  <a href="#">videos</a>
                  <a href="#">music</a>
                  <a href="#">media</a>
                  <a href="#">photography</a>
                  <a href="#">parallax</a>
                  <a href="#">ecommerce</a>
                  <a href="#">terms</a>
                  <a href="#">coupons</a>
                  <a href="#">modern</a>
                </div>
              </div>
            </div>
          </div>
          <!-- .sidebar end -->
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer1.vue";
export default {
  props: ["id"],
  computed: {
    ...mapState("productbox", ["blogs"]),
  },
  components: {
    Navbar,
    Footer,
    VueperSlides,
    VueperSlide,
  },
};
</script>

<style scoped>
.vueperslides--fixed-height {
  height: 65vh;
  width: 800px;
}
.container {
  display: flex;
}
.entry-title {
  margin-top: 5%;
}
.entry {
  margin: 0;
  padding: 0;
}
.facebook {
  padding-top: 8%;
  width: 800px;
}
.short-description p {
  margin: 0;
}
.description p {
  margin-top: -5%;
}
</style>
