<template>
  <div>
    <form class="form">
      <fieldset>
        <div class="shadow-lg">
          <h1 class="text-md">Filters</h1>
          <div class="form-group">
            <label id="category-label" htmlFor="category"> Industry: </label>
            <select id="Category" class="form-control is-medium shadow-lg">
              <option value="Marketing">Marketing and Sales</option>
              <option value="IT">IT</option>
            </select>
          </div>

          <!-- <div class="form-group">
            <label id="location-label" htmlFor="location"> Location: </label>
            <input
              type="text"
              name="Location"
              id="Location"
              class="form-control"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="Work">
              <input id="Work" type="radio" name="work-part" /> Work From Home
            </label>
          </div>
          <div class="form-group">
            <label htmlFor="part">
              <input id="part" type="radio" name="work-part" />
              Part Time
            </label>
          </div>
          <br />
          <div class="form-group">
            <label id="starting-label" htmlFor="starting">
              Starting From:
            </label>
            <input
              type="text"
              name="Starting"
              id="Starting"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label id="max-label" htmlFor="max"> Max Duration: </label>
            <input
              type="text"
              name="duration"
              id="duration"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label id="job-label" htmlFor="Internshi with Job Offer">
              <input type="radio" name="Job" id="Job" />
              Internship with Job Offer
            </label>
          </div> -->

          <hr />
          <h1 class="font-bold text-sm">OR</h1>
          <div class="search p-2 bg-2">
            <input type="text" class="searchTerm" placeholder="Search?" />
            <button class="searchButton" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<style scoped>
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