<template>
  <div class="contact">
    <div class="section sec1">
      <h1 class="font-bold"><span class="has-text-link">I</span>nternalaya</h1>
      <div class="text-xl p-5">
        <div class="text-left p-2">
          <span class="text-has-link"
            ><i class="fa fa-map-marker" aria-hidden="true"></i></span
          >Heritage Plaza,Block C and D,Kamaladi,Kathmandu
        </div>
        <div class="text-left p-2">
          <span><i class="fa fa-clock" aria-hidden="true"></i></span>Sun-Fri
          10:00-4:00
        </div>
        <div class="text-left p-2">
          <span><i class="fa fa-mobile" aria-hidden="true"></i></span>+977
          9861595002
        </div>
        <div class="text-left p-2">
          <span><i class="fa fa-envelope" aria-hidden="true"></i></span
          >internalaya@gmail.com
        </div>
      </div>
    </div>
    <div class="section sec2">
      <h1 class="font-bold">Contact Us</h1>
      <form class="p-5">
        <div class="field">
          <label for="name" class="label p-1"
            ><input
              class="input is-rounded is-medium"
              type="text"
              name="name"
              id="signup-email"
              placeholder="Your name"
              required
          /></label>
        </div>
        <div class="field">
          <label for="email" class="label p-1">
            <input
              class="input is-rounded is-medium"
              type="email"
              name="email"
              placeholder="Email"
              required
          /></label>
        </div>
        <div class="field">
          <label for="phone" class="label p-1">
            <input
              class="input is-rounded is-medium"
              type="number"
              name="phone"
              placeholder="Phone"
          /></label>
        </div>
        <div class="field">
          <label for="comment" class="label p-1">
            <input
              class="input"
              type="textarea"
              name="comment"
              placeholder="Comment"
          /></label>
        </div>
        <div class="field">
          <button class="button is-rounded" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default { name: "Contact" };
</script>
<style scoped>
.contact {
  display: flex;
}
.section {
  flex: 1;
}
i {
  color: #00b2ee;
  padding: 5px;
  font-size: 20px;
}
.button {
  background-color: #00b2ee;
  color: whitesmoke;
  font-size: 16px;
}
</style>
