import React, { useRef } from 'react';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { FaUserAlt,FaKey } from "react-icons/fa";

const Loginpage = () => {
  
  // const refinput=useRef()
  // const keyshow=()=>{
  //   if(refinput.current.value=="password"){
  //     refinput.current.value.type="text"
  //   }else{
  //     refinput.current.value.type="password"
  //   }
  // }
 return (

  <div className='main-form'>
    <h1>Login </h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className='child-form '>
          <div className=''>
          <div className='input-div1'>
            <FaUserAlt className='text-muted fauser'/>
          <input
            placeholder='Email'
            type="email"
            name="email"
            className='form-control-lg'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          </div>
          {errors.email && touched.email && errors.email}
          <br/>
          <div className="input-div2">
            <FaKey className='fkey'
            //  onClick={keyshow}
             />
          <input
            placeholder='Password'
            // ref={refinput} 
            type="password"
            name="password"
            className='form-control-lg'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <br />
          </div>
          {errors.password && touched.password && errors.password}
          <div className='d-block'>

          <button className='bt-css2 mt-5' type="submit" disabled={isSubmitting}>
            LOGIN
          </button>
          <h1 className='text-light'>OR</h1>
          <NavLink to={`/register`}>

          <button className='bt-css2'>
            REGISTER
          </button>
          </NavLink>
          </div>
          </div>
        </form>
      )}
    </Formik>
  </div>
)};

export default Loginpage;