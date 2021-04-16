import React, { createContext } from 'react';
export const infoProvider = createContext();

function RegValidation(props) {
  const formValidation = () => {
    // password
    if (document.getElementsByName('name')[0].value === '') {
      alert('Enter name ');
      return false;
    }

    // email
    if (document.getElementsByName('email')[0].value === '') {
      alert('Enter email');
      return false;
    }

    if (document.getElementsByName('email')[0].value === '') {
      alert('Enter email');
      return false;
    }

    if (document.getElementsByName('password')[0].value === '') {
      alert('Enter password');
      return false;
    }

    if (document.getElementsByName('mobileno')[0].value === '') {
      alert('Enter mobileno');
      return false;
    }

    if (document.getElementsByName('ctype')[0].value === '') {
      alert('Enter ctype');
      return false;
    }

    if (document.getElementsByName('csector')[0].value === '') {
      alert('Enter csector');
      return false;
    }

    if (document.getElementsByName('pincode')[0].value === '') {
      alert('Enter pincode');
      return false;
    }

    if (document.getElementsByName('gstin')[0].value === '') {
      alert('Enter gstin');
      return false;
    }
    return true;
  };
  return (
    <div>
      <infoProvider.Provider value={{ formValidation }}>
        {props.children}
      </infoProvider.Provider>
    </div>
  );
}

export default RegValidation;
