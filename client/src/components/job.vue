<template>
    <div class="post__wrapper">
  <div class="container-fluid">

        <div class="post">
          <div class="img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png" alt="">
          </div>
          <h1>Senior UI/UX Designer</h1>
          <div class="location">evntoo Obour City, Cairo, Egypt</div>
          <div class="date">3 hours ago</div>

          <div class="input_btn">
            <a href="">Apply For job</a>
          </div>
        </div>
        <div class="job_details">
          <h2>Job Details</h2>
          <div class="row_details">
            <h5>Experience Needed:</h5>
            <span>1 To 2 Years</span>
          </div>
          <div class="row_details">
            <h5>Career Level:</h5>
            <span>Entry Level (Junior Level / Fresh Grad)</span>
          </div>
          <div class="row_details">
            <h5>Education Level:</h5>
            <span>Bachelor's Degree</span>
          </div>
          <div class="row_details">
            <h5>Salary:</h5>
            <span>6400 To 6500 EGP Per Month, Net Salary 6500+Commission+Laptop+Sim Card +Mobile Phone</span>
          </div>
          <div class="row_details">
            <h5>Job Categories:</h5>
            <span>Customer Service/Support | Sales/Retail</span>
          </div>
          <div class="skills mt-4">
            <h4>Skills And Tools:</h4>
            <div class="skill_tag">Sales</div>
            <div class="skill_tag">Outdoor Sales</div>
            <div class="skill_tag">Sales Skills</div>
            <div class="skill_tag">Sales Executive</div>
            <div class="skill_tag">Medicalrep</div>
            <div class="skill_tag">Call Center</div>
            <div class="skill_tag">Sales Agent</div>
            <div class="skill_tag">Sales Target</div>
            <div class="skill_tag">Telesales</div>
          </div>
        </div>
        <div class="job_inf">
          <h2>Job Description</h2>
          <ul>
            <li>Building and sustaining long-lasting relationships with new and existing customers based within an assigned sales territory.</li>
            <li>Conduct face-to-face meetings with existing and potential customers.</li>
            <li>Informing potential and existing customers of product features and benefits</li>
            <li>Resolving customer complaints.</li>
            <li>Submitting regular sales reports to management.</li>
          </ul>
        </div>
        <div class="job_inf">
          <h2>Job Requirements</h2>
          <ul>
            <li>At least 6 months' sales experience.</li>
            <li>Bachelor's degree</li>
            <li>Experience in telesales & Call Center & sales age</li>
          </ul>
        </div>

  </div>
</div>
</template>
<style scoped>
.post,.job_details,.job_inf {
position: relative;
    width: 100% !important;
    padding: 2% 5%;
    background: #efefef;
    margin: 2% 0;
}
.img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    position:absolute;
    right:5%;
}
.img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.row_details {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.skill_tag {
    display: inline-block;
    padding: 10px;
    background-color: #bfbfbf;
    margin: 5px;
    border-radius: 10px;
}
.tag {
    width: 100%;
    text-align: left;
    font-weight: 700;
    font-size: 0.7rem;
    overflow: hidden;
    border-radius: 5px;
}
span.job-tags {
    margin: 0% 1%;
    padding: 2%;
    background: #bfbfbf;
    border-radius: 5px;
}
</style>
<script>
export default {

    name:"jobcomponent",
}
</script>