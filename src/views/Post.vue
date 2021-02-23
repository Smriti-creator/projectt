<template>
  <div class="mt-12 pt-8">
    <h1 class="pt-8 font-bold">Post an Internship</h1>
    <h2 class="font-bold pb-12">
      All fields marked with
      <span class="has-text-link pl-10" style="font-size: 20px">
        &#10034;
      </span>
      are required.
    </h2>
    <Jobpost />
    <Foot />
  </div>
</template>

<script>
// @ is an alias to /src

import Foot from "@/components/foot.vue";
import Jobpost from "../components/job-post.vue";

export default {
  name: "post",
  components: {
    Jobpost,
    Foot,
  },
};
</script>

