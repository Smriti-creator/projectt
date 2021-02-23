<template>
  <div id="app">
    <div class="is-fixed-top">
      <Studentnav />
    </div>
    <router-view />
  </div>
</template>

<script>
import Studentnav from "@/components/student-navbar.vue";
export default {
  components: {
    Studentnav,
  },
  data: function () {
    return {};
    // eslint-disable-next-line prettier/prettier
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
