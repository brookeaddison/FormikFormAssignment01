import React from 'react';
import './App.css';
import {Formik, useFormik} from 'formik';


function App() {
  const formik  = useFormik({
    initialValues: {
      name: '',
      emailField: '',
      pswField: ''
    },
    onSubmit: values  => {
      console.log('form: ', values);
    },
    validate: values => {
      let errors = {};
      if (!values.name) errors.name = 'Field required';
      if (!values.emailField) {
        errors.emailField = 'Field Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = 'Username should be an email';
      };
      if (!values.pswField) errors.pswField = 'Field required';
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input id="name" type="text" onChange={formik.handleChange} value={formik.values.name}></input>
        <div>Email</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}></input>
        {formik.errors.emailField ? <div style={{color: "red"}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}></input>
        {formik.errors.pswField ? <div style={{color: "red"}}>{formik.errors.pswField}</div>: null}
        <button id="submitBtn" type="submit">Submit</button>
        
      </form>
      
    </div>
  );
}

export default App;
