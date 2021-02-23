<template>
  <div class="pt-6">
    <div class="pt-6">
      <h1 class="font-black pt-4">CATEGORIES</h1>
      <Search />
      <Tiles />
      <Foot />
    </div>
  </div>
</template>

<script>
import Search from "@/components/search.vue";
import Tiles from "@/components/cat-tiles.vue";
import Foot from "@/components/foot.vue";

export default {
  name: "Categories",
  components: {
    Search,
    Tiles,
    Foot,
  },
};
</script>
