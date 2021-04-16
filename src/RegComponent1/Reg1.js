import React from 'react';
//import './CssFile2/Reg.css';

function Reg1() {
  return (
    <div className="reg-comp">
      <div class="container bg-white mt-sm-4 mb-5">
        <div class="wrapper d-flex justify-content-center flex-column px-md-5 px-1">
          <div class="h3 text-center font-weight-bold">
            Register for a free demo
          </div>
          <div class="row my-4">
            <div class="col-md-6">
              {' '}
              <label>Full Name</label>{' '}
              <input type="text" placeholder="Jhon Smith" />{' '}
            </div>
            <div class="col-md-6 pt-md-0 pt-4">
              {' '}
              <label>Job Title</label>{' '}
              <input type="text" placeholder="Manager" />{' '}
            </div>
          </div>
          <div class="row my-md-4 my-2">
            <div class="col-md-6">
              {' '}
              <label>Mail</label>{' '}
              <input type="email" placeholder="jhon19@mail.com" />{' '}
            </div>
            <div class="col-md-6 pt-md-0 pt-4">
              {' '}
              <label>Phone</label>{' '}
              <input type="tel" placeholder="+7 483 779 90 60" />{' '}
            </div>
          </div>
          <div class="row my-md-4 my-2">
            <div class="col-md-6">
              {' '}
              <label>Mail</label>{' '}
              <input type="email" placeholder="jhon19@mail.com" />{' '}
            </div>
            <div class="col-md-6 pt-md-0 pt-4">
              {' '}
              <label>Phone</label>{' '}
              <input type="tel" placeholder="+7 483 779 90 60" />{' '}
            </div>
          </div>
          <div class="row my-md-4 my-2">
            <div class="col-md-6">
              {' '}
              <label>Mail</label>{' '}
              <input type="email" placeholder="jhon19@mail.com" />{' '}
            </div>
            <div class="col-md-6 pt-md-0 pt-4">
              {' '}
              <label>Phone</label>{' '}
              <input type="tel" placeholder="+7 483 779 90 60" />{' '}
            </div>
          </div>
          <div class="row my-md-4 my-2">
            <div class="col-md-6">
              {' '}
              <label>Company</label>{' '}
              <input type="email" placeholder="Company Name" />{' '}
            </div>
            <div class="col-md-6 pt-md-0 pt-4">
              {' '}
              <label>Country</label>{' '}
              <select name="country" id="country">
                <option value="ind">India</option>
                <option value="us">USA</option>
                <option value="uk">UK</option>
                <option value="aus">Australia</option>
              </select>{' '}
            </div>
          </div>{' '}
          <button className="btn btn success">add</button>
        </div>
      </div>
    </div>
  );
}

export default Reg1;
