<template>
  <section id="content">
    <div class="content-wrap">
      <div class="container clearfix">
        <div class="col_one_third nobottommargin col_last">
          <div class="feature-box media-box">
            <div class="fbox-media">
              <img style="width: 350px; height: 370px" :src="blog.img" alt="" />
            </div>
            <div class="fbox-desc" id="fbox-desc">
              <h3>{{ blog.title }}</h3>
              <span class="date">{{ blog.date }}</span>
              <p class="pt-2">
                {{ blog.short_description
                }}<router-link
                  :to="{ name: 'BlogDetails', params: { id: blog.id } }"
                  >...see more</router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["blog"],
};
</script>
<style scoped>
#fbox-desc {
  color: #42424299;
  text-align: left;
}
#fbox-desc span {
  font-family: "Lato", sans-serif;
}
#fbox-desc h3 {
  font-size: 2rem;
  font-family: "Lato", sans-serif;
}
#fbox-desc p {
  font-size: 1.8rem;
  margin: 0;
}
#content #title {
  font-family: "Lato", sans-serif;
  font-size: 2.5rem;
}
.content-wrap {
  padding: 0;
}
.fbox-media {
  margin: 0;
  padding: 0;
}
.container {
  padding: 0;
}
</style>
