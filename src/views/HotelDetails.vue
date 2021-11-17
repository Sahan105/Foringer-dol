<template>
  <div>
    <Navbar />
    <div id="group">
      <button class="btn btn-light">
        <a href="#Activities">Activities</a>
      </button>
      <button class="btn btn-light">
        <a href=" #Inclusions"> Inclusions</a>
      </button>
      <button class="btn btn-light">
        <a href="#Exclusions">Exclusions</a>
      </button>
      <button class="btn btn-light"><a href="#Price">Price</a></button>
      <button class="btn btn-light">
        <a href="#Instructions">Instructions</a>
      </button>
    </div>
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="postcontent nobottommargin clearfix" style="width: 800px">
            <div v-for="hotel in hotels" :key="hotel.id">
              <div v-if="this.id == hotel.id">
                <div id="posts" style="text-align: left">
                  <div class="entry clearfix">
                    <img
                      :src="hotel.img1"
                      style="height: 500px; width: 800px"
                      alt=""
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
                    <div class="entry-title" v-if="hotel.name">
                      <h2>
                        <a href="#">{{ hotel.name }}</a>
                      </h2>
                    </div>
                    <div
                      class="entry-content short-description hotel"
                      v-if="hotel.location"
                    >
                      <div><h4>Location:</h4></div>
                      <div>{{ hotel.location }}</div>
                    </div>
                  </div>
                  <div class="entry clearfix" v-if="hotel.description">
                    <div class="entry-content description">
                      <p>{{ hotel.description }}</p>
                    </div>
                  </div>
                  <div>
                    <vueper-slides :bullets="false" :fixed-height="true" fade>
                      <vueper-slide
                        v-for="slide in hotel.slider_img"
                        :key="slide"
                        :image="slide.img"
                      />
                    </vueper-slides>
                  </div>
                  <div class="entry-content" v-if="hotel.features">
                    <h4>Features:</h4>
                    <div v-for="feat in hotel.features" :key="feat">
                      <p>
                        <i class="fas fa-vector-square"></i>{{ feat.feature }}
                      </p>
                    </div>
                  </div>
                  <div class="entry-content price product-price">
                    <div v-if="hotel.price"><h4>Price:</h4></div>
                    <div>
                      <ins v-if="hotel.price_details"
                        >৳ {{ hotel.price_details }}</ins
                      >
                    </div>
                  </div>
                  <div class="entry clearfix" id="review">
                    <button class="btn btn-block btn-danger" id="review-btn">
                      review
                    </button>

                    <div class="entry-image" id="review-frm">
                      <Form
                        id="billing-form"
                        name="billing-form"
                        class="nobottommargin"
                        @submit.prevent="onSubmit"
                      >
                        <div class="col_last">
                          <label>Name:</label>
                          <Field
                            type="text"
                            id="billing-form-name"
                            name="name"
                            class="sm-form-control"
                            v-model="user.name"
                            :rules="isRequired"
                          />
                          <ErrorMessage name="name" />
                        </div>

                        <div class="col_half">
                          <label>Email Address:</label>
                          <Field
                            type="email"
                            id="billing-form-email"
                            name="email"
                            class="sm-form-control"
                            v-model="user.email"
                            :rules="isRequired"
                          />
                          <ErrorMessage name="email" />
                        </div>
                        <div class="">
                          <label>review</label>
                          <Field
                            type="text"
                            id="billing-form-email"
                            name="review"
                            class="sm-form-control"
                            v-model="user.review"
                            :rules="isRequired"
                          />
                          <ErrorMessage name="review" />
                        </div>

                        <button
                          class="button button-3d nomargin"
                          id="register-form-submit"
                          name="register-form-submit"
                          @click="login"
                        >
                          send
                        </button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sidebar nobottommargin col_last clearfix">
            <div class="sidebar-widgets-wrap">
              <div class="widget widget-twitter-feed clearfix"></div>
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
import { Field, Form, ErrorMessage } from "vee-validate";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer1.vue";
export default {
  props: ["id"],
  computed: {
    ...mapState("productbox", ["hotels"]),
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        review: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.email);
    },
    isRequired(value) {
      return value ? true : "This field is required";
    },
  },
  components: {
    Navbar,
    Footer,
    VueperSlides,
    VueperSlide,
    Field,
    Form,
    ErrorMessage,
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
.content-wrap {
  padding: 0;
}
.entry-title {
  margin-top: 5%;
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
  align-items: flex-end;
}
.hotel div {
  padding: 0% 1% 0% 0%;
}
.description p {
  padding-bottom: 5%;
}
.price {
  padding-bottom: 5%;
  display: flex;
  align-items: flex-end;
}

.price div {
  padding: 0% 1% 0% 0%;
}
.entry-content i {
  font-size: 0.9rem;
  padding-right: 1%;
}
.product-price {
  margin: 0;
}
#shareB .btn {
  padding: 0 6%;
  margin: 0 0.5%;
}
#shareB .btn:hover {
  background-color: #979797;
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
#review {
  position: relative;
  display: inline-block;
}
#review-frm {
  background-color: #ccc;
  padding: 2% 5%;
  display: none;
  position: absolute;
  z-index: 10;
  min-width: 360px;
}
#review-btn:hover #review-frm {
  display: block;
}
</style>
