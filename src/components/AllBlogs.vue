<template>
  <div class="container clearfix" id="all-blogs">
    <div class="col_three_fifth bothsidebar nobottommargin">
      <div class="fancy-title title-border" id="title">
        <h3>Blogs</h3>
      </div>
      <div id="posts" class="events small-thumbs">
        <div v-for="blog in blogs" :key="blog">
          <div class="entry clearfix" style="text-align: left">
            <div class="entry-image hidden-sm">
              <router-link
                :to="{ name: 'BlogDetails', params: { id: blog.id } }"
              >
                <img :src="blog.img" alt="" style="height: 260px" />
              </router-link>
            </div>
            <div class="entry-c">
              <div class="entry-title">
                <h2>
                  <router-link
                    :to="{ name: 'BlogDetails', params: { id: blog.id } }"
                  >
                    {{ blog.title }}
                  </router-link>
                </h2>
              </div>
              <div>
                <ul class="">
                  <li><i class="icon-time"></i> {{ blog.date }}</li>
                </ul>
              </div>
              <div>
                <p style="text-align: left">{{ blog.short_description }}</p>
              </div>
              <div class="entry-content">
                <router-link
                  :to="{ name: 'BlogDetails', params: { id: blog.id } }"
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
          <input type="text" placeholder="Search for blogs..." name="search" />
          <button id="myButton" type="submit">Search</button>
        </form>
      </div>
      <div class="fancy-title title-border">
        <h4>Video</h4>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oXNVtSEhS-Q"
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
export default {
  name: "productbox",
  computed: {
    ...mapState("productbox", ["blogs"]),
  },
};
</script>

<style scoped>
#all-blogs {
  padding: 0 0 3% 0;
}
.clearfix {
  padding: 0;
}
.entry-c {
  margin: 0;
  padding: 4% 3%;
}
.img {
  height: 100px;
}
#title {
  padding-top: 10%;
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
  padding: 6px 14px 4px 14px;
  background-color: #42b983;
  border-radius: 3px;
  color: white;
  border: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#myButton:hover {
  background-color: #2cac72;
}
#button {
  color: white;
  background-color: #2cac72;
  border-color: #42b983;
}
</style>
