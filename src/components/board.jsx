// eslint-disable-next-line no-unused-vars
import React from "react";
import "@/components/App.css";

const JobBoardComponent = ({ job }) => (
  <div className="flex bg-white relative shadow-lg m-4 p-4 border border-black-200 rounded-xl">
    <div className="text-left">
      <h3 className="font-bold text-xl text-color">{job.Type}</h3>
      <h2 className="font-bold text-blue-600 text-opacity-75">{job.company}</h2>
      <br></br>
      <div class="flex mr-2">
          <p class="is-uppercase font-bold m-2">StartDate</p>
          <p class="is-uppercase font-bold m-2">Duration</p>
          <p class="is-uppercase font-bold m-2">Stipend</p>
          <p class="is-uppercase font-bold m-2">Location</p>
          </div>
       <div class="flex mr-2">
        <p class="is-uppercase  m-4">{job.StartDate}</p>
        <p class="is-uppercase  m-4">{job.Duration}</p>
        <p class="is-uppercase  m-4">{job.Stipend}</p>
        <p class="is-uppercase  m-4">{job.location}</p>
          
          </div>
      </div>
    <div
      className="text-right absolute right-1 p-2 picture"
      style={{ height: "100px", width: "100px" }}
    >
      <img src={job.logo} alt={job.company}></img>
    </div>
  </div>

);

export default JobBoardComponent;