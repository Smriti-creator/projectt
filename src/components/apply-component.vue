<template>
  <div class="justify-center">
    <form
      @submit="postData"
      method="post"
      class="container mx-auto p-12 inline-block"
    >
      <div class="box border rounded-xl border-black-200">
        <div class="field text-left">
          <div class="">
            <label for="applicantname" class="label p-2"
              >Applicant's Name <span class="has-text-link">*</span>
            </label>
            <div class="control">
              <input
                type="text"
                class="input is-medium"
                id="name"
                v-model="applicant.name"
                required
              />
            </div>
          </div>
          <div class="">
            <label for="appliedposition" class="label p-2"
              >Applied Position <span class="has-text-link">*</span>
            </label>
            <div class="control">
              <input
                type="text"
                class="input is-medium"
                id="position"
                v-model="applicant.position"
                required
              />
            </div>
          </div>
          <div class="">
            <label for="phone" class="label p-2"
              >Phone No. <span class="has-text-link">*</span>
            </label>
            <div class="control">
              <input
                type="numeric"
                class="input is-medium"
                id="phone"
                v-model="applicant.phone"
                required
              />
            </div>
          </div>
          <div class="">
            <label for="address" class="label p-2"
              >Address <span class="has-text-link">*</span>
            </label>
            <div class="control">
              <input
                type="text"
                class="input is-medium"
                id="address"
                v-model="applicant.address"
                required
              />
            </div>
          </div>
          <div class="">
            <label for="resume" class="label p-2"
              >Resume / CV <span class="has-text-link">*</span>
              <div>
                <p class="p-2">
                  Drag and drop your resume or
                  <span class="p-1">
                    <button
                      class="button has-text-white p-2"
                      type="button"
                      v-bind="applicant.resume"
                    >
                      Upload
                    </button></span
                  >
                </p>
              </div>
              <p class="italic font-light">
                Supported format: PNG,JPG, DOCX, PDF <br />Maximum File Size: 10
                MB
              </p>
            </label>
          </div>
          <div class="control">
            <button class="button is-rounded has-text-white" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Applycomponent",
  methods: {
    postData(e) {
      this.axios.post("", this.applicant).then((result) => {
        console.warn(result);
      });
      e.preventDefault();
    },
  },
  data: function () {
    return {
      applicant: {
        name: null,
        position: null,
        phone: null,
        address: null,
        resume: null,
      },
    };
  },
};
</script>
<style scoped>
.button {
  background-color: hsl(217, 71%, 53%);
  font-size: 20px;
}
input {
  border-radius: 15px;
}
</style>
