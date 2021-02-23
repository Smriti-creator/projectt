<template>
  <div class="box border border-gray-200 m-12">
    <div class="flex">
      <div>
        <h1 class="font-bold" style="margin-top: 40px">Hire an intern</h1>
        <div>
          <div class="flex p-2">
            <Computer />
            <h1 class="pl-2">Post for Free</h1>
          </div>
          <div class="flex p-2">
            <Check />
            <h1 class="pl-2">100% verified</h1>
          </div>
        </div>
      </div>
      <Hire />
    </div>
    <router-link to="/employer"
      ><button type="submit" class="button is-rounded has-text-white Post">
        Post now
      </button></router-link
    >
  </div>
</template>
<script>
import Hire from "@/components/icons/hire";
import Check from "@/components/icons/check";

import Computer from "@/components/icons/computer";
export default {
  name: "Slide1",
  components: {
    Hire,
    Check,
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
