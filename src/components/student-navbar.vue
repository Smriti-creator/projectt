<template>
  <div id="nav" class="navbar is-fixed-top">
    <div class="navbar-brand">
      <div class="flex text-center w-2 md:w-32">
        <router-link to="/application"><Logos /></router-link
        ><router-link to="/application"><Logotxt /></router-link>
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
    <div class="navbar-menu navbar-end" :class="{ 'is-active': showNav }">
      <router-link id="myapplication" class="navbar-item" to="/application"
        >My Application</router-link
      >
      <router-link id="apply" class="navbar-item" to="/apply"
        >Apply</router-link
      >
      <router-link class="navbar-item" to="/internships"
        >Internships</router-link
      >
      <router-link class="navbar-item" to="/blog">Blog</router-link>
      <div class="navbar-item dropdown is-right is-hoverable">
        <div class="dropdown-trigger">
          <button
            class="button is-rounded drop"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>{{ userName }}</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item text-left">
              <router-link to="/application" class="p-2"
                >My Application</router-link
              ><br />
              <router-link to="/resume" class="p-2"> Resume</router-link>
              <br />
              <router-link to="/" class="p-2"> Log out</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logos from "@/components/icons/logos.vue";
import Logotxt from "@/components/icons/logo-text.vue";
export default {
  components: {
    Logos,
    Logotxt,
  },
  data: function () {
    return {
      showNav: false,
      userName: undefined,
    };
    // eslint-disable-next-line prettier/prettier
  },
  mounted() {
    this.axios
      .get("http://127.0.0.1:8000/api/account/properties")
      .then((response) => {
        this.userName = response.firstname;
      });
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
