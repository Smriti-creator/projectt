<template>
  <div id="about" class="pt-6">
    <h1 class="font-bold pt-6">About Us</h1>
    <AboutUstext />
    <Team />
    <Foot />
  </div>
</template>

<script>
import AboutUstext from "@/components/about-us.vue";
import Team from "@/components/team-card.vue";
import Foot from "@/components/foot.vue";

export default {
  components: { AboutUstext, Team, Foot },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>