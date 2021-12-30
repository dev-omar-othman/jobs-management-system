<template>
  <div>
    <header1 v-if="userType == 'not-user'" />
    <header2 v-else-if="userType == 'user'" />
    <header3 v-else-if="userType == 'recruiter'" />
    <jobcomponent       
       v-for="singlejob in job"
      :key="singlejob.index"
      :id="singlejob.id"
      :title="singlejob.title"
      :company="singlejob.company"
      :location="singlejob.location"
      :date="singlejob.date"
      :tags="singlejob.tags"
      :description="singlejob.description"
      :thumbnail="singlejob.thumbnail"
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
      job:[],
    };
  },
  created() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(endpoint + "job.json",requestOptions)
      .then((res) => res.json())
      .then((data) => (this.job = data));
  },
  name: "jobpage",
};
</script>
