<template>
  <div class="pt-12">
    <div v-for="datas in data" :key="datas.title">
      <h1 class="pt-6 font-bold">{{ datas.title }}</h1>
      <div class="mx-auto p-12" style="display: inline-block">
        <h1 class="text-xl font-bold text-has-link">
          About {{ datas.company_name }}
        </h1>
        <div class="detail_view">
          <div class="pt-8">
            <h2 class="text-left has-text-link font-bold">
              {{ datas.website }}
            </h2>
            <p class="text-justify text-lg pt-2">
              {{ datas.job_description }}
            </p>
          </div>
          <div class="pt-5">
            <h2 class="text-left font-bold">Category</h2>
            <p class="text-justify text-lg pt-2">
              {{ datas.category }}
            </p>
          </div>
          <div class="pt-8">
            <h2 class="text-left font-bold">Qualification</h2>
            <p class="text-justify text-lg pt-2">
              {{ datas.job_requirements }}
            </p>
          </div>
          <div class="pt-8">
            <h2 class="text-left font-bold">Perks</h2>
            <div
              class="round_tabs_container"
              v-for="perks in datas"
              :key="perks"
            >
              <span class="round_tabs">{{ datas.perks }}</span>
            </div>
          </div>
          <div class="pt-8">
            <h2 class="text-left font-bold">Number of openings</h2>
            <div class="text-left pl-2">
              {{ datas.number_of_openings }}
            </div>
          </div>
          <div class="pt-8">
            <div class="buttons">
              <input type="hidden" id="status" value="active" />
              <router-link to="/apply">
                <button
                  class="btn btn-large button is-rounded has-text-white"
                  type="submit"
                >
                  Apply now
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foot />
  </div>
</template>
<script>
// @ is an alias to /src

import Foot from "@/components/foot.vue";

export default {
  name: "Detailsintern",
  components: {
    Foot,
  },
  data: function () {
    return { data: {} };
  },
  mounted() {
    this.axios
      .get("http://127.0.0.1:8000/api/job/list")
      .then((response) => (this.data = response.data.results));
  },
};
</script>
<style scoped>
.round_tabs_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.round_tabs {
  background: #bfbfbf;
  color: #666;
  padding: 6px 12px;
  border-radius: 14px;
  margin-right: 16px;
  margin-bottom: 8px;
  line-height: 16px;
}
.container {
  word-break: break-word;
  font-size: 14px;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  color: #484848;
}
.buttons .btn {
  max-width: 271px;
  margin-bottom: 24px;
  border-radius: 4px;
  padding: 12px 32px;
  border: none;
  min-width: 146px;
}
.button {
  background-color: #0073ff;
}
.detail_view {
  border: 3px solid rgb(175, 171, 171);
  border-radius: 10px;
  padding: 30px 30px 30px 30px;
}
</style>
