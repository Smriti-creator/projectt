<template>
  <div class="footer mx-auto col-md-6 col-lg-4 col-xl-3">
    <span class="brand">
      <h1 class="logo pt-2">
        <div class="flex text-center w-1 md:w-32"><Logos /><Logotxt /></div>
      </h1>
    </span>
    <div class="footer-top p-10">
      <span class="newsletter ml-2">
        <div>Newsletter:</div>
        <div class="newsletter-email">
          <form class="pr-4">
            <input
              class="input is-rounded"
              type="email"
              name="email"
              placeholder="Email address"
              v-model="newsletter"
            />
          </form>
        </div>
      </span>
    </div>
    <hr />
    <div class="footer-content flex flex-shrink p-2">
      <div class="footer-section md:flex-1 location">
        <h1>Internships by Location:</h1>
        <ul>
          <li>Kathmandu</li>
          <li>Bhaktapur</li>
          <li>Lalitpur</li>
          <li>Pokhara</li>
        </ul>
      </div>
      <div class="footer-section md:flex-1 stream">
        <h1>Internships by Stream:</h1>
        <ul>
          <li>Computer Science</li>
          <li>Graphic Designing</li>
          <li>Marketing</li>
          <li>Finance</li>
        </ul>
      </div>
      <div class="footer-section md:flex-1 pages">
        <h1>Pages:</h1>
        <ul>
          <router-link to="/blog"><li>Blog</li></router-link>
          <router-link to="/categories"><li>Categories</li></router-link>
          <router-link to="/about"><li>About Us</li></router-link>
          <router-link to="/contact"><li>Contact Us</li></router-link>
          <router-link to="/privacy"><li>Privacy Policy</li></router-link>
        </ul>
      </div>
    </div>
    <hr />
    <div class="footer-bottom">
      <span class="social p-2">
        <!-- links for all the social medias -->
        <a
          class="nav-item nav-link p-2"
          href="https://www.facebook.com/interna1aya"
          target="_blank"
          ><i class="fa fa-facebook-official" aria-hidden="true"></i
        ></a>
        <a
          class="nav-item nav-link p-2"
          href="https://www.linkedin.com/company/internalaya/"
          target="_blank"
          ><i class="fa fa-linkedin-square" aria-hidden="true"></i
        ></a>
        <a
          class="nav-item nav-link p-2"
          href="https://www.instagram.com/internalaya/"
          target="_blank"
          ><i class="fa fa-instagram" aria-hidden="true"> </i></a
      ></span>
      <div class="col-md-6 col-lg-4 col-xl-3">
        <span class="copyright">Copyright 2021 Internalaya</span>
      </div>
    </div>
  </div>
</template>

<script>
import Logos from "@/components/icons/logos";
import Logotxt from "@/components/icons/logo-text";

export default {
  name: "Foot",
  components: {
    Logos,
    Logotxt,
  },
  data: function () {
    return { newsletter: "" };
  },
};
</script>

<style scoped>
.footer {
  background-color: #535353;
  color: white;
  position: relative;
  text-align: left;
  padding: 0.09rem 0.5rem 1rem;
}
hr {
  height: 3px;
  color: white;
}
.brand {
  position: absolute;
  left: 0;
  padding: 15px;
}
ul {
  font-size: 18px;
}
li {
  display: block;
  align-items: center;
}
a {
  color: white;
}
i {
  font-size: 20px;
  color: #3498db;
}
.newsletter {
  position: absolute;
  top: 25px;
  right: 5px;
  font-size: 20px;
}
input {
  width: 150%;
}
.newsletter-email {
  color: black;
}
h1 {
  font-size: 22px;
  font-weight: bolder;
}
.footer-section {
  padding: 15px;
}
.footer-bottom {
  display: flex;
  max-width: 100%;
  height: auto;
}
.copyright {
  bottom: 0;
  left: 0;
  position: absolute;
  padding: 10px 10px;
  display: flex;
  max-width: 100%;
  height: auto;
}
.social {
  position: absolute;
  right: 0px;
  bottom: 0px;
  padding: 20px 20px;
  max-width: 100%;
  height: auto;
}
.logo {
  padding: 0px;
  float: left;
  width: 55px;
}
</style>
