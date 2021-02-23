<template>
  <div>
    <Pic />
    <br />
    <div>
      <h1 class="font-black" style="margin-top: 30px; padding-top: 10px">
        GET STARTED
      </h1>
    </div>
    <Search />
    <h1 class="font-black p-6">NEWEST INTERNSHIPS</h1>
    <Pop />
    <Tiles />
    <div class="pt-4 pb-6">
      <button class="button is-rounded p-4">
        <router-link to="/categories">
          <span>All Categories</span>
          <span class="icon is-small">
            <i class="fas fa-angle-right"></i>
          </span>
        </router-link>
      </button>
    </div>
    <Foot />
  </div>
</template>

<script>
// @ is an alias to /src

import Tiles from "@/components/cat-tiles.vue";
import Foot from "@/components/foot.vue";
import Pic from "@/components/pic.vue";
import Search from "@/components/search.vue";
import Pop from "@/components/popular.vue";

export default {
  name: "Home",
  components: {
    Tiles,
    Foot,
    Pic,
    Search,
    Pop,
  },
};
</script>

<style scoped>
.button {
  border: 3px solid hsl(217, 71%, 53%);
  font-size: 22px;
  font-weight: bolder;
}
</style>
