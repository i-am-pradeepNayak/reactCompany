import React from 'react';
import './CssFile1/Login.css';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import 'animate.css';

function Login1() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setvalid] = useState('');
  var item = { email, password };

  const handleClick = async e => {
    e.preventDefault();
    if (formValidation()) {
      let result = await axios.post('http://localhost:8000/api/login', item);
      console.log(result.data);
      setvalid(result.data);
      store.addNotification({
        title: 'Wrong password!',
        message: 'Dont have an account? Sign up',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 2500,
          onScreen: true
        }
      });
    }
  };

  //validation

  const formValidation = () => {
    // password
    if (document.getElementsByName('password')[0].value === '') {
      alert('Enter password ');
      return false;
    }

    // email
    if (document.getElementsByName('email')[0].value === '') {
      alert('Enter email');
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (valid.error) {
      console.log(valid);
      history.push(`/showlist/${valid.id}`, { valid });
    }
  }, [valid]);

  return (
    <div>
      <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div class="card card0 border-0">
          <div class="row d-flex">
            <div class="col-lg-6">
              <div class="card1 pb-5">
                <div class="row">
                  {' '}
                  <img
                    src="https://i.imgur.com/CXQmsmF.png"
                    class="logo"
                  />{' '}
                </div>
                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                  {' '}
                  <img
                    src="data:image/jpeg;base64,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"
                    class="image"
                  />{' '}
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <form onSubmit={handleClick}>
                <div class="card2 card border-0 px-4 py-5">
                  <div class="row px-3">
                    {' '}
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Email Address</h6>
                    </label>{' '}
                    <input
                      className="loginInput"
                      type="text"
                      value={email}
                      name="email"
                      placeholder="Offical Email"
                      onChange={e => {
                        setEmail(e.target.value);
                      }}
                    />{' '}
                  </div>
                  <div class="row px-3">
                    {' '}
                    <label class="mb-1">
                      <h6 class="mb-0 text-sm">Password</h6>
                    </label>{' '}
                    <input
                      className="loginInput"
                      type="password"
                      value={password}
                      name="password"
                      placeholder="Password"
                      onChange={e => {
                        setPassword(e.target.value);
                      }}
                    />{' '}
                  </div>
                  <div class="row px-3 mb-4">
                    <div class="custom-control custom-checkbox custom-control-inline">
                      {' '}
                      <input
                        id="chk1"
                        type="checkbox"
                        name="chk"
                        class="custom-control-input"
                      />{' '}
                      <label for="chk1" class="custom-control-label text-sm">
                        Remember me
                      </label>{' '}
                    </div>{' '}
                    <a href="#" class="ml-auto mb-0 text-sm">
                      Forgot Password?
                    </a>
                  </div>
                  <div class="row mb-3 px-3">
                    {' '}
                    <button type="submit" class="btn btn-blue text-center">
                      Login
                    </button>{' '}
                  </div>
                  <div class="row mb-4 px-3">
                    {' '}
                    <Link to="/reg">
                      <p>New user ..Reg here</p>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login1;
