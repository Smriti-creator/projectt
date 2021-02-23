<template>
  <div class="pt-12">
    <h1 class="pt-12 pb-2">My Application</h1>
    <div class="p-4">
      <div
        class="grid grid-cols-4 text-center px-12 py-4 bg-gray-300 font-semibold text-lg"
      >
        <div>Company</div>
        <div>Profile</div>
        <div>Applied On</div>
        <div>Application status</div>
      </div>
    </div>
    <!-- <div>
      <ul>
        <li v-for="people in team" :key="people.id">
          <Atable
            :name="people.name"
            :id="people.id"
            :position="people.position"
          />
        </li>
      </ul>
    </div> -->
    <Foot />
  </div>
</template>
<script>
import Foot from "@/components/foot.vue";
// import Atable from "@/components/application-table.vue";
// import team from "../assets/team.json";
// ************Need to GET API from backend***********

export default {
  components: { Foot },
  data: function () {
    return {};
  },
};
</script>


