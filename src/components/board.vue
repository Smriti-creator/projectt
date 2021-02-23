<template>
  <div>
    <div
      v-for="job in jobs"
      :key="job.count"
      class="flex bg-white relative shadow-lg m-4 p-4 border border-black-200 rounded-xl"
    >
      <div class="text-left">
        <h3 class="font-bold text-xl text-color">{{ job.category }}</h3>
        <h2 class="font-bold text-blue-600 text-opacity-75">
          {{ job.company_name }}
        </h2>
        <br />
        <div class="flex mr-2">
          <p class="is-uppercase font-bold m-2">StartDate</p>
          <p class="is-uppercase font-bold m-2">Duration</p>
          <p class="is-uppercase font-bold m-2">Stipend</p>
          <p class="is-uppercase font-bold m-2">Apply By</p>
        </div>
        <div class="flex mr-2">
          <p class="is-uppercase m-4">{{ job.start_date }}</p>
          <p class="is-uppercase m-4">{{ job.Duration }}</p>
          <p class="is-uppercase m-4">{{ job.stipend }}</p>
          <p class="is-uppercase m-4">{{ job.apply_date }}</p>
        </div>
      </div>
      <div class="text-right absolute right-1 p-2 picture">
        <img :src="job.image" :alt="job.company_name" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return { jobs: {} };
  },
  mounted() {
    this.axios.get("http://127.0.0.1:8000/api/job/list").then((response) => {
      this.jobs = response.data.results;
    });
  },
};
</script>
<style scoped>
.picture {
  height: 100px;
  width: 100px;
}
.form {
  left: 30px;
  border: 2px solid #ced4da;
  border-radius: 15px;
}
.form-group {
  margin: 0 auto 0px auto;
  padding: 2px 45px;
  text-align: left;
}
.form-control {
  display: block;
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  color: #495057;
  background-color: #fff;
  box-shadow: 2px 2px 2px #ced4da;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (max-width: 768px) {
  .flex {
    flex-direction: column;
  }
  .picture {
    display: none;
  }
}
@media (max-width: 640px) {
  .picture {
    display: none;
  }
}
</style>
