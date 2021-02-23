import React, { useEffect } from "react";
import data from "../assets/data.json";
import JobBoardComponent from "./board.jsx";
import "@/components/App.css";

function FilterForm() {
  return (
    <form className="form">
      <fieldset>
        <div className="shadow-lg">
          <h1 className="text-md">Filters</h1>
          <div class="form-group">
            <label id="category-label" htmlFor="category">
              Industry:
            </label>
            <select
              id="Category"
              className="form-control is-medium shadow-lg"
            ><option value="Marketing">Marketing and Sales</option>
              <option value="IT">IT</option>
            </select>
          </div>
          {/* <div className="form-group">
            <label id="location-label" htmlFor="location">
              Location:
            </label>
            <input
              type="text"
              name="Location"
              id="Location"
              className="form-control"
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label for="Work">
              <input id="Work" type="radio" name="work-part" /> Work From Home
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="part">
              <input id="part" type="radio" name="work-part" />
              Part Time
            </label>
          </div>
          <br />
          <div className="form-group">
            <label id="starting-label" htmlFor="starting">
              Starting From:
            </label>
            <input
              type="text"
              name="Starting"
              id="Starting"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label id="max-label" htmlFor="max">
              Max Duration:
            </label>
            <input
              type="text"
              name="duration"
              id="duration"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label id="job-label" htmlFor="Internshi with Job Offer">
              <input type="radio" name="Job" id="Job" />
              Internship with Job Offer
            </label>
          </div> */}
          <hr />
          <h1 className="font-bold text-sm">OR</h1>
          <div className="search p-2 bg-2">
            <input type="text" className="searchTerm" placeholder="Search?" />
            <button className="searchButton" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

function App() {
  const [jobs, setJobs] = React.useState([]);

  useEffect(() => setJobs(data), []);

  return (
    <div className="mt-16 flex">
      <div
        id="filter-container"
        className="w-full max-w-xs flex-shrink-0 h-full relative top-0 md:sticky md:top-20 ml-12 mb-24 "
      >
        <FilterForm />
      </div>
      <div className="w-full -mt-0 md:-mt-16">
        <div className="w-full">
          <div>
            <h1 className="font-bold text-md text-center p-3">
              <span className="has-text-link">1000</span> Total Internships
            </h1>
          </div>
          <div className="max-w-2xl mx-auto">
            {jobs.length === 0 ? (
              <p>Jobs are fetching...</p>
            ) : (
                jobs.map(job => <JobBoardComponent job={job} key={job.id} />)
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;