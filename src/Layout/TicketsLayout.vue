<template>
  <div>
    <Navbar />
    <Form />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
// import Tickets from "../components/AllTickets";
import Footer from "../components/Footer1";
import Form from "../views/Tform.vue";
export default {
  components: {
    Navbar,

    Footer,
    Form,
  },
};
</script>

<style></style>
