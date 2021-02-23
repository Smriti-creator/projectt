<template>
  <div class="pt-6">
    <div class="mt-16 flex">
      <div
        id="filter-container"
        class="w-full bg-white max-w-xs flex-shrink-0 h-full relative top-0 md:sticky md:top-20 ml-12 mb-24"
      >
        <FilterForm />
      </div>
      <div class="w-full -mt-0 md:-mt-16">
        <div class="w-full">
          <div>
            <h1 class="font-bold text-md text-center pt-6">
              <span class="has-text-link">1000</span> Total Internships
            </h1>
          </div>
          <div class="max-w-2xl mx-auto">
            <router-link to="/details"><JobBoardComponent /></router-link>
          </div>
        </div>
      </div>
    </div>
    <Foot /><router-view />
  </div>
</template>

<script>
// import { ReactWrapper } from "vuera";

import Foot from "@/components/foot.vue";
import FilterForm from "@/components/Filterform.vue";
import JobBoardComponent from "@/components/board.vue";

export default {
  name: "Internships",

  components: { JobBoardComponent, FilterForm, Foot },

  // data: function () {
  //   return {
  //     app: ReactApp,
  //   };
};
</script>
