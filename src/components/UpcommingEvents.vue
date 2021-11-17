<template>
  <div class="container clearfix" id="upcomming-events">
    <div class="col_three_fifth bothsidebar nobottommargin">
      <div id="title">
        <h3>Upcoming Events</h3>
      </div>
      <div id="posts" class="events small-thumbs">
        <div v-for="event in events" :key="event">
          <div class="entry clearfix" style="text-align: left">
            <div class="entry-image hidden-sm">
              <router-link
                :to="{ name: 'EventDetails', params: { id: event.id } }"
              >
                <img :src="event.img1" alt="" style="height: 250px" />
              </router-link>
            </div>
            <div class="entry-c">
              <div class="entry-title">
                <h2>
                  <router-link
                    :to="{ name: 'EventDetails', params: { id: event.id } }"
                  >
                    {{ event.name }}
                  </router-link>
                </h2>
              </div>
              <div>
                <ul class="">
                  <li v-if="event.date">
                    <i class="icon-time"></i> {{ event.date }}
                  </li>
                  <li><i class="icon-map-marker2"></i> {{ event.location }}</li>
                </ul>
              </div>
              <div class="event-p">
                <p style="text-align: left">{{ event.short_description }}</p>
              </div>
              <div class="entry-content">
                <router-link
                  :to="{ name: 'Checkout' }"
                  class="btn btn-default"
                  disabled="disabled"
                  @click="book(event)"
                  >Book Event</router-link
                >
                <router-link
                  :to="{ name: 'EventDetails', params: { id: event.id } }"
                  class="btn"
                  id="button"
                  >Read More</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col_two_fifth nobottommargin col_last" id="gallery">
      <div class="search">
        <form>
          <input
            type="text"
            v-model="search"
            @input="filterSearch"
            placeholder="Search for events..."
            name="search"
          />
          <button id="myButton" @click="filterSearch" type="submit">
            Search
          </button>
        </form>
      </div>
      <div class="fancy-title title-border">
        <h4>Video</h4>
      </div>
      <div>
        <iframe
          width="500"
          height="315"
          src="https://www.youtube.com/embed/58LJm8O6QhM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import "@fontsource/alike";
export default {
  name: "productbox",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState("productbox", ["events"]),
  },
  methods: {
    book(event) {
      localStorage.setItem("name", event.name);
      localStorage.setItem("price", event.price);
      localStorage.setItem("img", event.img1);
    },

    filterSearch(e) {
      let temp = this.search.trim().toLowerCase();
      return this.events.filter((event) => {
        console.log(temp);
        console.log(event);
        const serched = event.title.includes(temp);
        console.log(serched);
      });
      // console.log(this.events[0]);
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Alike";
}
.clearfix {
  padding: 0;
}
.entry-c {
  margin: 0;
  padding: 4% 3%;
}
.event-p {
  margin: 0;
}
#upcomming-events {
  padding: 0 0 3% 0;
}
#title {
  padding-top: 10%;
  font-family: "Alike";
}
#gallery {
  padding-top: 4%;
}
.search {
  margin-top: 8px;
  margin-right: 16px;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  padding-bottom: 6px;
}
#myButton {
  display: inline-block;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 7px 14px 3px 14px;
  background-color: #42b983;
  color: white;
  border: none;
}
#myButton:hover {
  background-color: #2cac72;
}
#button {
  color: white;
  background-color: #2cac72;
  border-color: #42b983;
}
#button:focus {
  outline: 0 !important;
  border: 0;
}
</style>
