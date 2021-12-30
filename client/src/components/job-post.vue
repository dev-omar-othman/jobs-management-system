<template>
  <div class="post">
    <div class="img">
      <img
        :src="thumbnail"
        alt=""
      />
    </div>
    <div class="inf1">
      <h2>
        <a>{{title}}</a>
      </h2>
      <div class="location">{{company}}  {{location}}</div>
      <div class="date">{{date}}</div>
    </div>
    <div class="inf2">
      <div class="tag" >
        <span class="job-tags" v-for="tag in tags" :key="tag.index">{{tag}}</span>
      </div>
      <p>
       {{ description}}
      </p>
    </div>
  </div>
</template>
<style scoped>
.img {
  width: 100px;
  overflow: hidden;
  height: 100px;
  position: absolute;
  right: 5%;
  top: 15%;
}
.img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.post {
  display: flex;
  flex-direction: column;
  padding: 2%;
  justify-content: center;
  align-items: flex-start;
  align-content: space-around;
  position: relative;
  margin: 2% 15%;
}
.tag {
    width: 100%;
    text-align: left;
    font-weight: 700;
    font-size: 0.7rem;
}
span.job-tags {
    margin: 0% 1%;
    padding: 2%;
    background: #efefef;
    border-radius: 5px;
}
</style>
<script>
export default {
  data: function () {
    return {};
  },
  props: [
    "id",
    "title",
    "company",
    "location",
    "date",
    "tags",
    "description",
    "thumbnail",
  ],
  name: "jobpost",
};
</script>
