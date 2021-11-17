<template>
  <div id="nav">
    <router-link :to="{ path: '/' }">
      <img
        alt="logo"
        src="../assets/images/icons/Foringer-Dol.png"
        style="height: 70px; width: 100px"
      />
    </router-link>
    <div class="main-nav">
      <router-link v-for="item in list" :key="item" :to="item.to">{{
        item.title
      }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "navbar",
  computed: {
    ...mapState("navbar", ["list"]),
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  outline: 0;
}
#nav {
  padding: 2.5% 5%;
  display: flex;
  z-index: 10;
}
.main-nav {
  margin-left: 35%;
  font-size: 1.8rem;
  display: flex;
}
.brand {
  font-size: 2.3rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.main-nav a {
  color: #121413;
  padding: 2rem;
}
</style>
