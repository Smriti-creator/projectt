<template>
  <div class="pb-4">
    <div class="col-md-8 divide-x divide-y divide-light-white-500">
      <carousel
        :items="1"
        :margin="20"
        :nav="false"
        :responsive="{
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        }"
      >
        <div
          class="container border border-black-200 mx-2"
          v-for="intern in interns"
          :key="intern.Type"
        >
          <div class="flex w-full" style="height: 200px">
            <div class="image">
              <img :src="intern.logo" :alt="intern.company" />
            </div>
            <div class="text-left pl-6">
              <h2 class="font-bold text-blue-600 text-opacity-75 text-xl">
                {{ intern.company }}
              </h2>
              <p class="pb-1 font-semibold text-sm">{{ intern.location }}</p>
              <h3 class="font-bold text-md">{{ intern.Type }}</h3>
              <div class="pt-2 has-text-black font-medium job-info">
                <div>
                  <span>Start date:</span
                  ><span class="ml-1">{{ intern.StartDate }}</span>
                </div>
                <div>
                  <span>Apply by:</span
                  ><span class="ml-3">{{ intern.applyDate }}</span>
                </div>
                <div>
                  <span>Stipend:</span
                  ><span class="ml-4">{{ intern.Stipend }}</span>
                </div>
                <div>
                  <span>Duration:</span
                  ><span class="ml-2">{{ intern.Duration }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </carousel>
    </div>
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";
import interns from "../assets/data.json";

export default {
  name: "Pop",
  components: { carousel },
  data: function () {
    return { interns };
  },
};
</script>

<style scoped>
.container {
  border-radius: 25px;
  padding: 10px;
  background-color: white;
}
.image {
  height: 50px;
  width: 50px;
}
.job-info {
  font-size: 16px;
}
</style>
