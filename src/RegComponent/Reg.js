import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { infoProvider } from './RegValidation';
import '../RegComponent/reg.css';

const Reg = () => {
  const { formValidation } = useContext(infoProvider);

  const history = useHistory();
  const [reg, setReg] = useState({
    name: '',
    email: '',
    password: '',
    mobileno: '',
    ctype: '',
    csector: '',
    pincode: '',
    gstin: ''
  });

  //await fetch('http://localhost:8000/api/register'

  const {
    name,
    email,
    password,
    mobileno,
    ctype,
    csector,
    pincode,
    gstin
  } = reg;

  const onSubmit = async e => {
    e.preventDefault();
    if (formValidation()) {
      let result = await axios.post('http://localhost:8000/api/register', reg);
      console.log(result.data);
      history.push('/');
    }
  };

  const inputChange = e => {
    setReg({ ...reg, [e.target.name]: e.target.value });
  };

  return (
    <div className="reg">
      <form onSubmit={onSubmit}>
        <input
          className="regInput"
          type="text"
          placeholder="Company Name"
          value={name}
          name="name"
          onChange={e => inputChange(e)}
        ></input>

        <input
          type="text"
          className="regInput"
          value={email}
          placeholder="Offical Email"
          name="email"
          onChange={e => inputChange(e)}
        ></input>

        <input
          className="regInput"
          type="password"
          value={password}
          placeholder="Enter password"
          name="password"
          onChange={e => inputChange(e)}
        ></input>

        <input
          className="regInput"
          type="number"
          value={mobileno}
          placeholder="Enter Mobile no"
          name="mobileno"
          onChange={e => inputChange(e)}
        ></input>

        <input
          className="regInput"
          type="text"
          value={ctype}
          placeholder="Comapnt type"
          name="ctype"
          onChange={e => inputChange(e)}
        ></input>
        <input
          className="regInput"
          type="text"
          value={csector}
          placeholder="Comapany Sector"
          name="csector"
          onChange={e => inputChange(e)}
        ></input>

        <input
          className="regInput"
          type="number"
          value={pincode}
          placeholder="Pincode"
          name="pincode"
          onChange={e => inputChange(e)}
        ></input>

        <input
          className="regInput"
          type="number"
          value={gstin}
          placeholder="Enter GSTIN"
          name="gstin"
          onChange={e => inputChange(e)}
        ></input>
        <button className="btnreg" type="Submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Reg;
