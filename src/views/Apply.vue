<template>
  <div class="pt-6">
    <div class="pt-6">
      <h1 class="font-bold">Apply</h1>
      <p class="font-bold text-xl p-2">
        All fields marked with<span class="has-text-link text-2xl"> * </span>
        are required.
      </p>
      <Applycomponent />
      <Foot />
    </div>
  </div>
</template>
<script>
import Foot from "@/components/foot.vue";
import Applycomponent from "@/components/apply-component.vue";
export default {
  name: "Apply",
  components: {
    Applycomponent,
    Foot,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

