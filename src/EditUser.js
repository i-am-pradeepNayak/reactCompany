import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';

const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();

  const [user, setuser] = useState({
    cid: '',
    cname: '',
    jobtype: '',
    jobspec: '',
    skills: '',
    jqualy: '',
    jhires: '',
    jexpo: '',
    jloc: '',
    jpack: '',
    jtime: ''
  });

  const {
    cid,
    cname,
    jobtype,
    jobspec,
    skills,
    jqualy,
    jhires,
    jexpo,
    jloc,
    jpack,
    jtime
  } = user;

  useEffect(() => {
    loadUser();
    console.log(user);
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      `http://127.0.0.1:8000/api/getjob/showpost/${id}`
    );
    const result1 = result.data;
    console.log(result1);

    setuser(result1);
  };

  const inputChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/api/modify/${id}`, user);
    history.push(`/showlist/${cid}`);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Job post details</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder=" enter Company Id"
              defaultValue={cid}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Company Name"
              defaultValue={cname}
              readonly
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Job Type"
              value={jobtype}
              name="jobtype"
              onChange={e => inputChange(e)}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              placeholder="Job Specification"
              value={jobspec}
              name="jobspec"
              onChange={e => inputChange(e)}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              placeholder="Qualification"
              value={jqualy}
              name="jqualy"
              onChange={e => inputChange(e)}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              placeholder="Skills Required"
              value={skills}
              name="skills"
              onChange={e => inputChange(e)}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="number"
              placeholder="How many Hires"
              value={jhires}
              name="jhires"
              onChange={e => inputChange(e)}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Work Experience"
              value={jexpo}
              name="jexpo"
              onChange={e => inputChange(e)}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Job Location"
              value={jloc}
              name="jloc"
              onChange={e => inputChange(e)}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="number"
              placeholder=" Anual Package "
              value={jpack}
              name="jpack"
              onChange={e => inputChange(e)}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="number"
              placeholder=" Timings "
              value={jtime}
              name="jtime"
              onChange={e => inputChange(e)}
            ></input>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
