import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Username: '',
      Number: '',
      Email: '',
      Password: '',
    },
    validationSchema: Yup.object({
      Username: Yup.string().required('Username is required'),
      Number: Yup.string().required('Phone number is required'),
      Email: Yup.string().email('Invalid email address').required('Email is required'),
      Password: Yup.string().min(4, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      // console.log( "vsds",values);

      try {
        const response = await axios.post('http://localhost:4000/userfunding/register', values);
        if (response.data.status) {
          Swal.fire({
            icon: 'success',
            title: '',
            text: response.data.message || 'Welcome!',
          }).then(() => {
            navigate('/login'); // Navigate to login page
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: response.data.message || 'Something went wrong.',
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Network Error',
          text: 'Unable to connect to the server. Please try again later.',
        });
      } finally {
        setSubmitting(false);
      }
    },
  });


  const GotoSignBTN =()=>{
    navigate('/login')
  }

  return (
    <div className='container_main'>
      <div className='main'>
        <div className='signup'>
          <form onSubmit={formik.handleSubmit}>
            <h2 className='labelstyle text-center'>Sign-Up</h2>
            <input
              type='text'
              className={`input_text ${formik.touched.Username && formik.errors.Username ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name='Username'
              value={formik.values.Username}
              placeholder='Username'
            />
            {formik.touched.Username && formik.errors.Username ? (
              <div className='invalid-feedback'>{formik.errors.Username}</div>
            ) : null}
            <input
              type='text'
              className={`input_text ${formik.touched.Number && formik.errors.Number ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name='Number'
              value={formik.values.Number}
              placeholder='Phone'
            />
            {formik.touched.Number && formik.errors.Number ? (
              <div className='invalid-feedback'>{formik.errors.Number}</div>
            ) : null}
            <input
              type='email'
              className={`input_text ${formik.touched.Email && formik.errors.Email ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name='Email'
              value={formik.values.Email}
              placeholder='Email'
            />
            {formik.touched.Email && formik.errors.Email ? (
              <div className='invalid-feedback'>{formik.errors.Email}</div>
            ) : null}
            <input
              type='password'
              className={`input_text ${formik.touched.Password && formik.errors.Password ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name='Password'
              value={formik.values.Password}
              placeholder='Password'
            />
            {formik.touched.Password && formik.errors.Password ? (
              <div className='invalid-feedback'>{formik.errors.Password}</div>
            ) : null}
            <div className='text-center'>
              <button type='submit' className='button_submit' disabled={formik.isSubmitting}>
                {formik.isSubmitting ? 'Loading...' : 'Sign-Up'}
              </button>
            </div>
          </form>
          <div className='mt-3'>
            <span>Already a member? <span className='fw-bold' style={{ color: "#573b8a", cursor:"pointer"}} onClick={GotoSignBTN}>Sign In</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
