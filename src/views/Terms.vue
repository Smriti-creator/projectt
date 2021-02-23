<template>
  <div class="pt-6">
    <TermsandConditions />
    <Foot />
  </div>
</template>
<script>
import Foot from "@/components/foot.vue";
import TermsandConditions from "@/components/terms-condition.vue";
export default {
  name: "Terms",
  components: {
    TermsandConditions,
    Foot,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>