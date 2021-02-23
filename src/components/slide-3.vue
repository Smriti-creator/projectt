<template>
  <div class="box border border-gray-200 m-12">
    <h1 class="font-bold" style="margin-top: 50px;">Internship opportunity 
      <div class="font-bold">Across All Domains</div></h1>
    <div class="flex container pt-12 ">
      <Doctor />
      <Nurse />
      <Studentsvg />
      <Responsive />
      <Waiter />
      <Engineer />
    </div>
    <router-link to="/internships"
      ><button type="submit" class="button is-rounded has-text-white View">View internships</button></router-link
    >
  </div>
</template>
<script>
import Doctor from "@/components/icons/doctor";
import Nurse from "@/components/icons/nurse";
import Studentsvg from "@/components/icons/student-svg";
import Responsive from "@/components/icons/responsive";
import Waiter from "@/components/icons/waiter";
import Engineer from "@/components/icons/engineer";

export default {
  name: "Slide1",
  components: {
    Doctor,
    Nurse,
    Studentsvg,
    Responsive,
    Waiter,
    Engineer,
  },
};
</script>
<style scoped>
.container{
  margin-left: 235px;
}
.button {
  margin-top:40px;
  background-color: #0073ff;
}
</style>
