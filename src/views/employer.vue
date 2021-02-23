<template>
  <div>
    <div class="container sec1 pt-6">
      <div class="section txtsvg">
        <div class="text">
          <h1 class="font-bold">Find the best interns</h1>
          <h2 class="font-bold">
            Register and post your internships for free!
          </h2>
          <p>1M+ internship seekers from 10000+ colleges across Nepal.</p>
        </div>
        <div class="tsvg">
          <RegEmployer />
        </div>
      </div>
      <div class="section signupbox"><Employersignup /></div>
    </div>
    <div class="container p-4">
      <h1 class="font-black p-4">Hire Interns in 3 Easy Steps:</h1>
      <br />
      <div class="svg-section pb-12 mb-5 flex justify-center w-full">
        <div>
          <Registeremployer class="svg" />

          <h2 class="font-bold">1.Register</h2>
          <p>Get started by creating your account</p>
        </div>
        <div>
          <Postemployer class="svg" />
          <div>
            <h2 class="font-bold">2.Post</h2>
            <p>Post internships for any profile and location</p>
          </div>
        </div>
        <div>
          <Hireemployer class="svg" />
          <div>
            <h2 class="font-bold">3.Hire</h2>
            <p>Screen and hire at your fingertips</p>
          </div>
        </div>
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import RegEmployer from "../components/icons/reg-employer";
import Employersignup from "@/components/employer-signup.vue";
import Foot from "@/components/foot.vue";
import Registeremployer from "@/components/icons/register-employer.vue";
import Postemployer from "@/components/icons/post-employer.vue";
import Hireemployer from "@/components/icons/hire-employer.vue";

export default {
  name: "Employer",
  components: {
    Employersignup,
    Foot,
    RegEmployer,
    Registeremployer,
    Postemployer,
    Hireemployer,
  },
};
</script>

<style scoped>
.sec1 {
  display: flex;
}
.section {
  flex: 1;
  padding: auto;
}
.txtsvg {
  flex: 50%;
}
.signupbox {
  flex: 50%;
}
.svg {
  width: 250px;
  height: 100%;
  padding: 0px 50px 0px 100px;
  margin-right: 100px;
  margin-left: 50px;
}
h2 {
  font-size: 21px;
  color: black;
  padding-bottom: 20px;
}
p {
  color: black;
  font-weight: 200;
}
@media (max-width: 800px) {
  .sec1 {
    flex-direction: column;
  }
  p {
    font-size: 12px;
  }
  .svg {
    width: 250px;
    height: 40%;
    /* padding: 10px 10px 0px 0px; */
    margin-right: 30px;
    margin-left: 150px;
  }
}
</style>
