<template>
  <div>
    <form
      @submit="postData"
      method="POST"
      class="mx-auto p-12"
      style="display: inline-block"
    >
      <fieldset>
        <div class="box border rounded-xl border-black-200">
          <div class="field text-left">
            <label for="type" class="label"> Type </label>
            <br />
            <div class="container flex-row">
              <div class="typecontainer">
                <input type="radio" id="market" name="Type" value="market" />
                <label for="market">Market</label><br />
              </div>
              <div class="typecontainer">
                <input type="radio" id="it" name="Type" value="it" />
                <label for="it">IT</label><br />
              </div>
              <div class="typecontainer">
                <input
                  type="radio"
                  id="hospitality"
                  name="Type"
                  value="hospitality"
                />
                <label for="hospitality">Hospitality and tourism</label><br />
              </div>
              <div class="typecontainer">
                <input type="radio" id="arch" name="Type" value="arch" />
                <label for="arch">Architecture and construction</label><br />
              </div>
              <div class="typecontainer">
                <input type="radio" id="Finance" name="Type" value="Finance" />
                <label for="Finance">Finance</label><br />
              </div>
              <div class="typecontainer">
                <input
                  type="radio"
                  id="Education"
                  name="Type"
                  value="Education"
                />
                <label for="Education"> Education and Training</label><br />
              </div>
              <div class="typecontainer">
                <input type="radio" id="Science" name="Type" value="Science" />
                <label for="Science">Science and Technology</label><br />
              </div>
              <div class="typecontainer">
                <input type="radio" id="health" name="Type" value="health" />
                <label for="HEALTH"> Health Science </label><br />
              </div>
              <div class="typecontainer">
                <input
                  type="radio"
                  id="Business"
                  name="Type"
                  value="business"
                />
                <label for="Business"
                  >Business Management and Administration</label
                ><br />
              </div>
              <div class="typecontainer">
                <input
                  type="radio"
                  id="tansport"
                  name="Type"
                  value="transport"
                />
                <label for="transport">
                  Transportation, Distribution and Logistics </label
                ><br />
              </div>
              <div class="typecontainer">
                <input
                  type="radio"
                  id="manufacturing"
                  name="Type"
                  value="manufacturing"
                />
                <label for="manufacturing"> Manufacturing</label><br />
              </div>
            </div>

            <label class="label" id="company-label" htmlFor="company">
              Company Name <span class="has-text-link"> &#10034; </span>
            </label>
            <div class="control rounded-md pb-5">
              <input
                type="text"
                name="CompanyName"
                id="Name"
                class="input"
                v-model="jobPost.company_name"
              />
            </div>
            <label class="label" id="upload-label" htmlFor="upload">
              Company Logo <span class="has-text-link"> &#10034; </span>
            </label>
            <div class="control rounded-md pb-5">
              <p>
                Drag and drop your logo or
                <span class="p-10">
                  <button
                    type=""
                    class="button is-rounded has-text-white signup"
                    v-bind="jobPost.image"
                  >
                    UPLOAD
                  </button></span
                >
              </p>
            </div>
            <label class="label" id="job-title" htmlFor="job-title">
              Job/Industry Title <span class="has-text-link"> &#10034; </span>
            </label>
            <div class="control rounded-md pb-5">
              <input
                type="text"
                name="Jobtitle"
                id="title"
                class="input"
                v-model="jobPost.title"
              />
            </div>

            <label class="label" id="job-desc" htmlFor="descritpion">
              Job/Internship Description
              <span class="has-text-link"> &#10034; </span></label
            >
            <div class="control rounded-md pb-5">
              <textarea
                type="textarea"
                name="Jobdesc"
                rows="50"
                cols="30"
                id="desc"
                class="input"
                v-model="jobPost.job_description"
              >
              </textarea>
            </div>
            <label class="label" id="Jobreq" htmlFor="requirement">
              Job/Internship Requirements
              <span class="has-text-link"> &#10034; </span>
            </label>
            <div class="control rounded-md pb-5">
              <textarea
                type="text"
                name="Jobreq"
                rows="40"
                cols="30"
                id="desc"
                class="input"
                v-model="jobPost.job_requirements"
              >
              </textarea>
            </div>
            <label class="label"
              >Start date: <span class="has-text-link"> &#10034; </span></label
            >
            <div class="control rounded-md pb-5">
              <input
                type="date"
                id="start"
                name="start"
                class="input"
                v-model="jobPost.start_date"
              />
            </div>
            <label class="label"
              >Apply By: <span class="has-text-link"> &#10034; </span></label
            >
            <div class="control rounded-md pb-5">
              <input
                type="date"
                id="Deadline"
                name="Deadline"
                class="input"
                v-model="jobPost.apply_date"
              />
            </div>
            <label class="label" id="stipend" htmlFor="stipend">
              Stipend
            </label>
            <div class="control rounded-md pb-5">
              <input
                type="number"
                name="stipend"
                id="stipend"
                class="input"
                v-model="jobPost.stipend"
              />
            </div>
            <label class="label" id="jobcagtegory" htmlFor="jobcategory">
              Job/Internship Category
              <span class="has-text-link"> &#10034; </span>
            </label>
            <div class="control pb-5">
              <input
                type="text"
                name="jobcategory"
                id="jobcategory"
                class="input"
                v-model="jobPost.category"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="button is-rounded has-text-white signup"
            >
              Post Job
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script>
export default {
  name: "Postcomponent",

  data: function () {
    return {
      jobPost: {
        company_name: null,
        image: null,
        title: null,
        job_description: null,
        job_requirements: null,
        start_date: null,
        apply_date: null,
        stipend: null,
        category: null,
      },
    };
  },
  methods: {
    postData(e) {
      this.axios
        .post("http://127.0.0.1:8000/api/job/create", this.jobPost)
        .then((result) => {
          console.warn(result);
        });
      e.preventDefault();
    },
  },
};
</script>
<style scoped>
.input {
  border-radius: 10px;
  width: 100%;
}
.button {
  background-color: #0073ff;
}
.typecontainer {
  margin-bottom: 24px;
  width: 50%;
}
.flex-row {
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  flex-wrap: wrap;
  margin-bottom: 0;
}
</style>
