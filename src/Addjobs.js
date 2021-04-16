import { useLocation, useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Addjobs = () => {
  const history = useHistory();
  const hello = useParams();
  console.log(hello);
  const { cid } = useParams();

  console.log(cid);

  useEffect(async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/showUserName/${cid}`
    );
    setname(res.data);
  }, []);

  const [cname, setname] = useState('');
  const [jobtype, setctype] = useState('');
  const [jobspec, setcspec] = useState('');
  const [skills, setcskill] = useState('');
  const [jqualy, setcqualy] = useState('');
  const [jhires, setchire] = useState('');
  const [jexpo, setcwork] = useState('');
  const [jloc, setcloc] = useState('');
  const [jpack, setcpack] = useState('');
  const [jtime, setctime] = useState('');

  async function submitHandler(e) {
    e.preventDefault();
    let jobs = {
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
    };

    const result = await axios.post(
      `http://127.0.0.1:8000/api/addjob/${cid}`,
      jobs
    );
    const result1 = result.data;
    console.log(result1);
    history.push(`/showlist/${cid}`);
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Company Id"
              defaultValue={cid}
              readOnly
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Company Name"
              defaultValue={cname}
              readOnly
            ></input>
          </div>

          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              type="text"
              placeholder="Job Type"
              value={jobtype}
              onChange={e => {
                setctype(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              placeholder="Job Specification"
              value={jobspec}
              onChange={e => {
                setcspec(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              placeholder="Qualification"
              value={jqualy}
              onChange={e => {
                setcqualy(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              placeholder="Skills Required"
              value={skills}
              onChange={e => {
                setcskill(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="number"
              placeholder="How many Hires"
              value={jhires}
              onChange={e => {
                setchire(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Work Experience"
              value={jexpo}
              onChange={e => {
                setcwork(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Job Location"
              value={jloc}
              onChange={e => {
                setcloc(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="number"
              placeholder=" Anual Package "
              value={jpack}
              onChange={e => {
                setcpack(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              type="number"
              placeholder=" Timings "
              value={jtime}
              onChange={e => {
                setctime(e.target.value);
              }}
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

export default Addjobs;
