<template>
  <section id="content">
    <div class="section notopmargin notopborder">
      <div class="container clearfix">
        <div class="heading-block center nomargin">
          <h3>Checkout</h3>
        </div>
      </div>
    </div>
    <div class="row clearfix" id="checkout-bill">
      <div class="col-md-6 checkout-form">
        <h3>Billing Address</h3>
        <p>
          Enter your Name, Address, Email and Phone number here.<br />
          You must login to place your order.
        </p>

        <Form
          id="billing-form"
          name="billing-form"
          class="nobottommargin"
          @submit.prevent="onSubmit"
        >
          <div class="col_full">
            <label for="billing-form-name">Name:</label>
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

          <div class="col_full">
            <label for="billing-form-address">Address:</label>
            <Field
              type="text"
              id="billing-form-address"
              name="address"
              class="sm-form-control"
              v-model="user.address"
              :rules="isRequired"
            />
            <ErrorMessage name="address" />
          </div>
          <div class="col_half">
            <label for="billing-form-email">Email Address:</label>
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
          <div class="col_half col_last" id="checkout-page">
            <label for="billing-form-phone">Phone:</label>
            <Field
              type="text"
              id="billing-form-phone"
              name="phone"
              class="sm-form-control"
              v-model="user.phone"
              :rules="isRequired"
            />
            <ErrorMessage name="phone" />
          </div>
          <button
            class="button button-3d nomargin"
            id="register-form-submit"
            name="register-form-submit"
            @click="login"
          >
            place order
          </button>
        </Form>
      </div>
      <div class="col-md-6 checkout-information" id="checkout-information">
        <div class="table-responsive clearfix">
          <h3>Your Orders</h3>
          <table v-if="event" class="table cart">
            <thead>
              <tr>
                <th class="cart-product-thumbnail">&nbsp;</th>
                <th class="cart-product-name">Event</th>
                <th class="cart-product-quantity">Quantity</th>
                <th class="cart-product-subtotal">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr class="cart_item" v-for="(cart, i) in cartevent" :key="i">
                <td class="cart-product-thumbnail">
                  <a href="#"
                    ><img width="64" height="64" :src="cart.img1" alt=""
                  /></a>
                </td>
                <td class="cart-product-name">
                  <a href="#"> {{ cart.name }}</a>
                </td>
                <td class="cart-product-quantity">
                  <div class="quantity clearfix">{{}}</div>
                </td>
                <td class="cart-product-subtotal">
                  <span class="amount">{{ cart.price }}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table v-if="hotel" class="table cart">
            <thead>
              <tr>
                <th class="cart-product-thumbnail">&nbsp;</th>
                <th class="cart-product-name">Hotel</th>
                <th class="cart-product-quantity">Quantity</th>
                <th class="cart-product-subtotal">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr class="cart_item" v-for="(cart, i) in carthotel" :key="i">
                <td class="cart-product-thumbnail">
                  <a href="#"
                    ><img width="64" height="64" :src="cart.img1" alt=""
                  /></a>
                </td>
                <td class="cart-product-name">
                  <a href="#"> {{ cart.name }}</a>
                </td>
                <td class="cart-product-quantity">
                  <div class="quantity clearfix"></div>
                </td>
                <td class="cart-product-subtotal">
                  <span class="amount">{{ cart.price }}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table v-if="ticket" class="table cart">
            <thead>
              <tr>
                <th class="cart-product-thumbnail">&nbsp;</th>
                <th class="cart-product-name">Ticket</th>
                <th class="cart-product-quantity">Quantity</th>
                <th class="cart-product-subtotal">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr class="cart_item">
                <td class="cart-product-thumbnail">
                  <a href="#"
                    ><img width="64" height="64" :src="cartitem.img" alt=""
                  /></a>
                </td>
                <td class="cart-product-name">
                  <a href="#"> {{ cartitem.name }}</a>
                </td>
                <td class="cart-product-quantity">
                  <div class="quantity clearfix"></div>
                </td>
                <td class="cart-product-subtotal">
                  <span class="amount">{{ cartitem.price }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <div class="table-responsive">
            <h4>Cart Totals</h4>
            <table class="table cart">
              <tbody>
                <tr class="cart_item">
                  <td class="notopborder cart-product-name">
                    <strong>Cart Subtotal</strong>
                  </td>
                </tr>

                <tr class="cart_item">
                  <td class="cart-product-name">
                    <strong>Total</strong>
                  </td>

                  <td class="cart-product-name">
                    <span class="amount color lead"><strong></strong></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  data() {
    return {
      user: {
        name: "",
        address: "",
        email: "",
        phone: "",
      },

      event: null,
      hotel: null,
      ticket: null,
    };
  },

  components: {
    Field,
    Form,
    ErrorMessage,
  },
  mounted() {
    if (this.$route.query.type == "events") {
      this.event = true;
    }
    if (this.$route.query.type == "hotels") {
      this.hotel = true;
    }
  },
  methods: {
    onSubmit() {
      console.log(this.email);
    },
    isRequired(value) {
      return value ? true : "This field is required";
    },
    login() {
      if (
        this.user.name != "" &&
        this.user.email != "" &&
        this.user.address != "" &&
        this.user.phone != ""
      ) {
        this.$router.replace({ path: "/login" });
      }
    },
  },
  computed: {
    ...mapState("productbox", ["cartevent"]),
    ...mapState("productbox", ["carthotel"]),
  },
};
</script>

<style scoped>
#content {
  padding-bottom: 4%;
}
#checkout-bill {
  padding: 0 9%;
}
.checkout-form {
  text-align: left;
  padding: 0 6% 0 4%;
}
.checkout-information {
  text-align: left;
  position: relative;
  right: 0;
  padding: 0 3%;
}
.title {
  padding-bottom: 5%;
}
</style>
