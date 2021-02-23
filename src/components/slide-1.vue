<template>
  <div class="box border border-gray-200 m-16">
    <div class="flex">
      <div>
        <h1 class="font-bold" style="margin-top: 30px">
          Get a Paid Internship
        </h1>
        <div>
          <div class="flex p-2">
            <Money />
            <h1 class="pl-2">Internship with Stipend</h1>
          </div>
          <div class="flex p-2">
            <Check />
            <h1 class="pl-2">100% verified</h1>
          </div>
          <div class="flex p-2">
            <Computer />
            <h1 class="pl-2">Apply for Free</h1>
          </div>
        </div>
      </div>
      <Homepagepeople />
    </div>
    <router-link to="/student"
      ><button type="submit" class="button is-rounded has-text-white Register">
        Register now
      </button></router-link
    >
  </div>
</template>
<script>
import Homepagepeople from "@/components/icons/home-page-people";
import Check from "@/components/icons/check";
import Money from "@/components/icons/money";
import Computer from "@/components/icons/computer";
export default {
  name: "Slide1",
  components: {
    Homepagepeople,
    Check,
    Money,
    Computer,
  },
};
</script>
<style scoped>
.button {
  margin-top: 20px;
  background-color: #0073ff;
}
</style>