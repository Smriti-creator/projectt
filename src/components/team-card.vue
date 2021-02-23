<template>
  <div class="text-left p-6 w-full ml-2">
    <h1 class="text-xl font-bold has-text-black ml-6 p-2">Our Team</h1>
    <div v-for="person in team" :key="person.id" class="max-w-6xl mx-auto mb-6">
      <div class="border-2 border-black-300 flex rounded-xl shadow-lg mx-auto">
        <div class="p-3">
          <img :src="person.pic" class="image" alt="Smiling team member" />
        </div>
        <div class="p-5">
          <h3 class="font-extrabold text-xl">
            {{ person.name }}
            <a
              class="nav-item nav-link p-2"
              :href="person.linkedin"
              target="_blank"
              ><i class="fa fa-linkedin-square" aria-hidden="true"></i
            ></a>
            <!-- <a
              class="nav-item nav-link p-2"
              :href="person.facebook"
              target="_blank"
              ><i class="fa fa-facebook-square" aria-hidden="true"></i
            ></a> -->
          </h3>
          <h4 class="font-bold text-lg p-1">
            {{ person.position }}
          </h4>
          <p class="font-light">{{ person.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import team from "../assets/team.json";

export default {
  data: function () {
    return { team, images: require("@/assets/team.json") };
  },
};
</script>
<style scoped>
.image {
  border-radius: 50%;
  width: 200px;
  height: 100px;
}
</style>
