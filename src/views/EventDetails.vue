<template>
  <div id="eventdetails">
    <Navbar />
    <div id="group">
      <button class="btn btn-outline-info">
        <a href="#Activities">Activities</a>
      </button>
      <button class="btn btn-outline-info">
        <a href=" #Inclusions"> Inclusions</a>
      </button>
      <button class="btn btn-outline-info">
        <a href="#Exclusions">Exclusions</a>
      </button>
      <button class="btn btn-outline-info"><a href="#Price">Price</a></button>
      <button class="btn btn-outline-info">
        <a href="#Instructions">Instructions</a>
      </button>
    </div>
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="postcontent nobottommargin clearfix" style="width: 800px">
            <div v-for="event in events" :key="event.id">
              <div v-if="this.id == event.id">
                <div id="posts" style="text-align: left">
                  <div class="entry clearfix">
                    <img
                      :src="event.img1"
                      alt=""
                      style="height: 500px; width: 800px"
                    />
                    <div id="shareB">
                      <button class="btn btnF">
                        <a href=""><i class="fab fa-facebook"></i></a>
                      </button>
                      <button class="btn btnT">
                        <a href=""><i class="fab fa-twitter"></i></a>
                      </button>
                      <button class="btn btnW">
                        <a href=""><i class="fab fa-whatsapp"></i></a>
                      </button>
                      <button class="btn btnE">
                        <a href=""><i class="far fa-envelope"></i></a>
                      </button>
                      <button class="btn btnI">
                        <a href=""><i class="fab fa-instagram"></i></a>
                      </button>

                      <button class="btn btnP">
                        <a href=""><i class="fab fa-pinterest"></i></a>
                      </button>
                    </div>
                    <div class="entry-title">
                      <h2>
                        <a href="#">{{ event.name }}</a>
                      </h2>
                    </div>
                    <ul class="entry-meta clearfix">
                      <li v-if="event.date">
                        <i class="icon-calendar3"></i>{{ event.date }}
                      </li>
                      <li>
                        <a href="#"><i class="icon-user"></i> admin</a>
                      </li>
                      <li>
                        <a href="#"><i class="icon-camera-retro"></i></a>
                      </li>
                    </ul>
                    <div class="entry-content">
                      <p>{{ event.short_description }}</p>
                    </div>
                    <div class="entry-content">
                      <h4 v-if="event.event_duration">
                        Event Duration: {{ event.event_duration }}
                      </h4>
                    </div>
                    <div class="entry-content description">
                      <p>{{ event.description }}</p>
                    </div>
                    <div>
                      <vueper-slides :bullets="false" :fixed-height="true" fade>
                        <vueper-slide
                          v-for="slide in event.slider_img"
                          :key="slide"
                          :image="slide.img"
                        />
                      </vueper-slides>
                    </div>
                    <div class="entry-content hotel">
                      <div><h4 v-if="event.hotel">Hotel:</h4></div>
                      <div>{{ event.hotel }}</div>
                    </div>
                    <div class="entry-content" id="Activities">
                      <h4 v-if="event.activities">Activities:</h4>
                      <div v-for="activity in event.activities" :key="activity">
                        <p>{{ activity.title }}: {{ activity.activity }}</p>
                      </div>
                    </div>
                    <div class="entry-content" id="Inclusions">
                      <h4>Inclusions:</h4>
                      <div
                        v-for="inclusion in event.inclusions"
                        :key="inclusion"
                      >
                        <p>
                          <i class="fas fa-vector-square"></i
                          >{{ inclusion.inc }}
                        </p>
                      </div>
                    </div>
                    <div class="entry-content" id="Exclusions">
                      <h4>Exclusions:</h4>
                      <div
                        v-for="exclusion in event.exclusions"
                        :key="exclusion"
                      >
                        <p>
                          <i class="fas fa-vector-square"></i
                          >{{ exclusion.exc }}
                        </p>
                      </div>
                    </div>
                    <div class="entry-content hotel" id="Price">
                      <div>
                        <h4 v-if="event.price_details">Price:</h4>
                        <div>{{ event.price_details }}</div>
                      </div>
                    </div>
                    <div class="entry-content price" id="Instructions">
                      <h4>Instructions:</h4>
                      <div v-for="pol in event.Policy" :key="pol">
                        <p>
                          <i class="fas fa-vector-square"></i>{{ pol.policy }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="entry clearfix">
                    <h1>Hey</h1>
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
                  <h4>Upcomming Events</h4>
                  <div class="tab-container">
                    <div class="tab-content clearfix" id="tabs-1">
                      <div id="popular-post-list-sidebar">
                        <div
                          class="spost clearfix"
                          v-for="event in events"
                          :key="event"
                        >
                          <router-link
                            :to="{
                              name: 'EventDetails',
                              params: { id: event.id },
                            }"
                          >
                            <div class="entry-image">
                              <a href="#" class="nobg"
                                ><img
                                  class="img-circle"
                                  :src="event.img1"
                                  alt=""
                              /></a>
                            </div>
                            <div class="entry-c">
                              <div class="entry-title">
                                <h4>
                                  <a href="#">{{ event.short_description }}</a>
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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer1";

export default {
  props: ["id"],
  computed: {
    ...mapState("productbox", ["events"]),
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
html {
  scroll-behavior: smooth;
}
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
.content-wrap {
  padding: 0;
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
#shareB .btn {
  padding: 0 6%;
  margin: 0 0.5%;
}

#shareB {
  padding: 1% 0;
  margin-right: -3%;
}
#shareB .btnF {
  background-color: #4267b2;
}
#shareB .btnW {
  background-color: #25d366;
}
#shareB .btnT {
  background-color: #55acee;
}
#shareB .btnE {
  background-color: #7d7d7d;
}
#shareB .btnI {
  background-color: #f67878;
}

#shareB .btnP {
  background-color: #cb2027;
}
#shareB a {
  padding: 2% 15%;
  font-size: 2.5rem;
  color: #fff;
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
