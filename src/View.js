import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

const View = () => {
  const [userInfo, setuserInfo] = useState([]);
  const { id } = useParams();

  useEffect(async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/viewjob/${id}`);
    setuserInfo([res.data]);
  }, []);
  console.log(userInfo);

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">View User</h2>
        <form>
          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Company Id"
              readOnly
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Company Name"
              readOnly
            ></input>
          </div>

          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              type="text"
              placeholder="Job Type"
            ></textarea>
          </div>

          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              placeholder="Job Specification"
            ></textarea>
          </div>

          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              placeholder="Qualification"
            ></textarea>
          </div>

          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              placeholder="Skills Required"
            ></textarea>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="number"
              placeholder="How many Hires"
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Work Experience"
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Job Location"
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="number"
              placeholder=" Anual Package "
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="number"
              placeholder=" Timings "
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default View;
