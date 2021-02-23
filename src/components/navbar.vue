<template>
  <div id="nav" class="navbar is-fixed-top text-left">
    <div class="navbar-brand">
      <div class="flex text-center w-2 md:w-32">
        <router-link to="/"><Logos /></router-link
        ><router-link to="/"><Logotxt /></router-link>
      </div>
      <a
        role="button"
        class="navbar-burger"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu pt-4 navbar-end" :class="{ 'is-active': showNav }">
      <router-link class="navbar-item" to="/internships"
        >Internships</router-link
      >
      <router-link id="categories" class="navbar-item" to="/categories"
        >Categories</router-link
      >
      <router-link class="navbar-item" to="/blog">Blog</router-link>
      <div class="navbar-item dropdown is-hoverable">
        <a class="navbar-link">Register</a>
        <div class="navbar-dropdown">
          <router-link to="/student" class="navbar-item"
            >As a student</router-link
          >
          <router-link to="/employer" class="navbar-item"
            >As an employer</router-link
          >
        </div>
      </div>
      <div class="navbar-item">
        <router-link to="/login"
          ><button class="button is-rounded log navbar-end">
            Log in
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Logos from "@/components/icons/logos";
import Logotxt from "@/components/icons/logo-text";
export default {
  components: {
    Logos,
    Logotxt,
  },
  data: function () {
    return {
      showNav: false,
    };
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

#nav {
  padding: 8px;
}
h1 {
  font-size: 35px;
}
.navbar-menu {
  padding: 3px;
}
#nav a {
  font-size: 14px;
  font-weight: bold;
  color: black;
  text-decoration: none;
}
/* .navbar-menu {
  height: 75px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
  margin-bottom: 1px;
} */

.log {
  border: 3px solid hsl(217, 71%, 53%);
  font-size: 14px;
  font-weight: bold;
}
.drop {
  background-color: hsl(217, 71%, 53%);
  color: aliceblue;
  font-size: 14px;
  font-weight: bold;
}
#nav .router-link-exact-active {
  color: hsl(217, 71%, 53%);
}
input:focus {
  outline: none;
}
.logo {
  padding: 10px 5px;
  margin: 0px 10px;
  height: 20px;
  width: 65px;
}
</style>
