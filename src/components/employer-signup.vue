<template>
  <div class="box bg-white shadow-lg border border-black-200 rounded-xl">
    <div class="">
      <button v-google-signin-button="clientId" class="button is-rounded">
        <svg
          viewBox="0 0 22 22"
          width="22px"
          height="22px"
          x="0"
          y="0"
          preserveAspectRatio="xMinYMin meet"
          class="third-party-join__google-icon"
        >
          <g class="color-icon">
            <path
              style="fill: #e94435"
              d="M12.1,5.8c1.6-0.1,3.1,0.5,4.3,1.6l2.6-2.7c-1.9-1.8-4.4-2.7-6.9-2.7c-3.8,0-7.2,2-9,5.3l3,2.4C7.1,7.2,9.5,5.7,12.1,5.8z"
            ></path>
            <path
              style="fill: #f8bb15"
              d="M5.8,12c0-0.8,0.1-1.6,0.4-2.3l-3-2.4C2.4,8.7,2,10.4,2,12c0,1.6,0.4,3.3,1.1,4.7l3.1-2.4C5.9,13.6,5.8,12.8,5.8,12z"
            ></path>
            <path
              style="fill: #34a751"
              d="M15.8,17.3c-1.2,0.6-2.5,1-3.8,0.9c-2.6,0-4.9-1.5-5.8-3.9l-3.1,2.4C4.9,20,8.3,22.1,12,22c2.5,0.1,4.9-0.8,6.8-2.3L15.8,17.3z"
            ></path>
            <path
              style="fill: #547dbe"
              d="M22,12c0-0.7-0.1-1.3-0.2-2H12v4h6.1v0.2c-0.3,1.3-1.1,2.4-2.2,3.1l3,2.4C21,17.7,22.1,14.9,22,12z"
            ></path>
          </g>
        </svg>
        <div class="ml-2">Signup with Google</div>
      </button>
    </div>
    <hr />
    <form @submit="postData" method="POST" class="">
      <div class="field">
        <label for="email" class="label text-left p-0.5"
          >Email:<input
            class="input is-rounded is-small"
            type="email"
            name="email"
            id="signup-email"
            placeholder="example@email.com"
            required
            v-model="employerSignUp.email"
        /></label>
      </div>
      <div class="field">
        <label for="password" class="label text-left p-0.5"
          >Password:<input
            class="input is-rounded is-small"
            type="password"
            name="password"
            id="password"
            placeholder="Must be 6 characters or more"
            required
            v-model="employerSignUp.password"
        /></label>
      </div>
      <div class="field">
        <label for="password" class="label text-left p-0.5"
          >Confirm password:<input
            class="input is-rounded is-small"
            type="password"
            name="password"
            id="password"
            placeholder="Must match above password"
            required
            v-model="employerSignUp.password2"
        /></label>
      </div>
      <div class="field is-grouped is-grouped-centered">
        <label for="firstname" class="label text-left p-0.5"
          >First name:<input
            class="input is-rounded is-small"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Jon"
            v-model="employerSignUp.firstname"
        /></label>
        <label for="lastname" class="label text-left p-0.5"
          >Last name:<input
            class="input is-rounded is-small"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Doe"
            v-model="employerSignUp.lastname"
        /></label>
      </div>
      <div class="field">
        <label for="phone" class="label text-left p-0.5"
          >Phone number:
          <input
            class="input is-rounded is-small"
            type="numeric"
            name="phone"
            id="phone"
            placeholder="+977-XXXXXXXXXX"
            v-model="employerSignUp.phone"
          />
        </label>
      </div>
      <div class="field mb-1">
        <label class="checkbox">
          <input type="checkbox" required />
          By signing up, you agree to our
          <router-link to="/terms">terms and conditions</router-link>
        </label>
      </div>
      <div class="mb-1">
        <button class="button is-rounded signup" type="submit">Sign up</button>
      </div>
    </form>
    <span class=""
      ><p>
        Already registered?
        <router-link to="/login"
          ><a href="#modal" class="has-text-link">Log in</a></router-link
        >
      </p></span
    >
  </div>
</template>

<script>
export default {
  name: "employer-signup",

  methods: {
    OnGoogleAuthSuccess(idToken) {
      console.log(idToken);
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    },
     postData(e) {
      this.axios.post('http://127.0.0.1:8000/api/account/employer_register', this.employerSignUp)
      .then((result)=>{
        console.warn(result)
      
      })
        e.preventDefault();
      }
  },

  data: function () {
    return {
      employerSignUp: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
        phone: "",
      },
      clientId:
        "661825092162-f30s3qge0tc7pscgohlm9ceon62ivi2c.apps.googleusercontent.com",
    };
  },
};
</script>

<style scoped>
hr {
  color: grey;
}
.signup {
  background-color: hsl(217, 71%, 53%);
  color: aliceblue;
}
.google-signin-button {
  color: white;
  background-color: hsl(217, 71%, 53%);
  height: 50px;

  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
