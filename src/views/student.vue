<template>
  <div>
    <div class="container sec1 pt-6">
      <div class="section text">
        <div>
          Get one step closer to your
          <span class="has-text-link">Dream <br />Career</span><br />
          Register and apply to <span class="has-text-link">10000+</span><br />
          opportunities
        </div>
      </div>
      <div class="section signbox">
        <Signup />
      </div>
    </div>
    <div class="svg-section pb-12 flex justify-center w-full">
      <div>
        <Studentwork class="svg" />
        <h2 class="font-bold">Internships</h2>
      </div>
      <div>
        <Studentwork class="svg" />
        <h2 class="font-bold">Internships with Job Offer</h2>
      </div>
      <div>
        <Studentworkhome class="svg" />
        <h2 class="font-bold justify-center">Work From Home</h2>
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import Signup from "@/components/signup.vue";
import Foot from "@/components/foot.vue";
import Studentwork from "@/components/icons/student-work.vue";
import Studentworkhome from "@/components/icons/student-work-from-home.vue";

export default {
  name: "Student",
  components: {
    Signup,
    Foot,
    Studentwork,
    Studentworkhome,
  },
};
</script>

<style scoped>
.sec1 {
  display: flex;
  flex-direction: row;
}
.signbox {
  flex: 50%;
}
.svg {
  width: 250px;
  height: 100%;
  padding: 50px 50px 0px 100px;
  margin-right: 100px;
  margin-left: 50px;
}
h2 {
  font-size: 21px;
  color: black;
  padding-bottom: 20px;
}
.text {
  flex: 50%;
  color: black;
  font-size: 26px;
  font-weight: bolder;
  text-align: left;
  margin-top: 200px;
}

@media (max-width: 800px) {
  .sec1 {
    flex-direction: column;
  }
  .svg {
    margin-right: 30px;
    margin-left: 200px;
  }
}
</style>