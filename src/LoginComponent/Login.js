import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import 'animate.css';

const Login = () => {
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
        title: 'Wrong password!!',
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
    <div className="reg">
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={email}
          name="email"
          placeholder="Offical Email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        ></input>

        <input
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        ></input>
        <button type="submit">Login</button>
      </form>
      <div></div>
      <Link to="/reg">
        <p>New user ..Reg here</p>
      </Link>
    </div>
  );
};

export default Login;
