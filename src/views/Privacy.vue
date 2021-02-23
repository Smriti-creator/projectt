<template>
  <div class="pt-6">
    <Privacy />
    <Foot />
  </div>
</template>

<script>
import Foot from "@/components/foot.vue";
import Privacy from "@/components/privacy-policies.vue";
export default {
  name: "Privacy Policy",
  components: {
    Foot,
    Privacy,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>