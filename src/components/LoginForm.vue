<template>
  <section id="content">
    <div class="section notopmargin notopborder" id="section">
      <div class="container clearfix">
        <div class="heading-block center nomargin">
          <h3>My Account</h3>
        </div>
      </div>
    </div>
    <div class="content-wrap">
      <div class="container clearfix">
        <div class="col_one_third nobottommargin login">
          <div class="well well-lg nobottommargin">
            <Form
              id="login-form"
              name="login-form"
              class="nobottommargin"
              style="text-align: left"
              @submit.prevent="onSubmit"
            >
              <h3>Login to your Account</h3>
              <div class="col_full">
                <label for="login-form-username">Username:</label>
                <Field
                  name="username"
                  :rules="isRequired"
                  type="text"
                  class="form-control"
                  v-model="input.username"
                />
                <ErrorMessage name="username" />
              </div>
              <div class="col_full">
                <label for="login-form-password">Password:</label>
                <Field
                  name="password"
                  :rules="isRequired"
                  type="password"
                  class="form-control"
                  v-model="input.password"
                />
                <ErrorMessage name="password" />
              </div>
              <div class="col_full nobottommargin">
                <button
                  type="submit"
                  class="button button-3d nomargin"
                  id="login-form-submit"
                  name="login-form-submit"
                  value="login"
                  @click="signUp"
                >
                  Login
                </button>
                <a href="#" class="fright">Forgot Password?</a>
              </div>
            </Form>
          </div>
        </div>
        <div class="col_two_third col_last nobottommargin register">
          <h3>Don't have an Account? Register Now.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel
            odio non dicta provident sint ex autem mollitia dolorem illum
            repellat ipsum aliquid illo similique sapiente fugiat minus ratione.
          </p>
          <Form
            id="register-form"
            name="register-form"
            class="nobottommargin"
            style="text-align: left"
            @submit.prevent="onSubmit"
          >
            <div class="col_half">
              <label for="register-form-name">Name:</label>
              <Field
                name="name"
                :rules="isRequired"
                type="text"
                class="form-control"
              />
              <ErrorMessage name="name" />
            </div>
            <div class="col_half col_last">
              <label for="register-form-email">Email Address:</label>
              <Field
                name="email"
                :rules="isRequired"
                type="text"
                class="form-control"
              />
              <ErrorMessage name="email" />
            </div>
            <div class="clear"></div>
            <div class="col_half">
              <label for="register-form-username">Enter Your Username:</label>
              <Field
                name="username"
                :rules="isRequired"
                type="text"
                class="form-control"
              />
              <ErrorMessage name="username" />
            </div>
            <div class="col_half col_last">
              <label for="register-form-phone">Phone:</label>
              <Field
                name="phone"
                :rules="isRequired"
                type="text"
                class="form-control"
              />
              <ErrorMessage name="phone" />
            </div>
            <div class="clear"></div>
            <div class="col_half">
              <label for="register-form-password">Enter Password:</label>
              <Field
                name="password"
                :rules="isRequired"
                type="password"
                class="form-control"
              />
              <ErrorMessage name="password" />
            </div>
            <div class="col_half col_last">
              <label for="register-form-repassword">Re-enter Password:</label>
              <Field
                name="password"
                :rules="isRequired"
                type="password"
                class="form-control"
              />
              <ErrorMessage name="password" />
            </div>
            <div class="clear"></div>
            <div class="col_full nobottommargin">
              <button
                class="button button-3d nomargin"
                id="register-form-submit"
                name="register-form-submit"
                value="register"
              >
                Register Now
              </button>
            </div>
          </Form>
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
      input: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  computed: {
    ...mapState({
      username: (state) => state.login.username,
      password: (state) => state.login.password,
    }),
  },
  methods: {
    // Validator function
    isRequired(value) {
      return value ? true : "This field is required";
    },
    onSubmit() {
      console.log("Form has been submitted");
    },
    signUp: function () {
      if (
        this.input.username == this.username &&
        this.input.password == this.password
      ) {
        this.$store.commit("login/setAuthentication", true);
        this.$router.replace({ path: "/checkout" });
      }
    },
  },
};
</script>

<style scoped>
.content-wrap {
  padding-top: 0;
}
.register {
  padding-left: 6%;
}
.login {
  padding-top: 5%;
}
</style>
