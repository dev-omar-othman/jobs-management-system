<template>
  <div>
    <header1 v-if="userType == 'not-user'" />
    <header2 v-else-if="userType == 'user'" />
    <header3 v-else-if="userType == 'recruiter'" />
    <jobpost
      v-for="job in jobs"
      :key="job.id"
      :id="job.id"
      :title="job.title"
      :company="job.company"
      :location="job.location"
      :date="job.date"
      :tags="job.tags"
      :description="job.description"
      :thumbnail="job.thumbnail"
    />
  </div>
</template>
<style scoped></style>
<script>
const endpoint = "http://localhost:8081/";
export default {
  data: function () {
    return {
      userType: "not-user",
      jobs:[],
    };
  },
  created() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(endpoint + "jobs.json",requestOptions)
      .then((res) => res.json())
      .then((data) => (this.jobs = data));
  },
  name: "home",
};
</script>
