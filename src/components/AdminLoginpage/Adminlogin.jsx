import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Email: '',
      Password: '',
    },
    validationSchema: Yup.object({
      Email: Yup.string().email('Invalid email address').required('Email is required'),
      Password: Yup.string().min(4, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post('http://localhost:4000/userfunding/adminlogin', values);        
        if (response.data.status) {
          Swal.fire({
            icon: 'success',
            title: 'Welcome Admin!',
            text: response.data.message,
          }).then(() => {
            localStorage.setItem('adminToken', response.data.token);
            navigate('/admin/dashboard'); // Redirect to admin dashboard
          });

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: response.data.message || 'Something went wrong.',
          });
        }
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 200 range
          console.log('Response error:', error.response.data);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data.message || 'An error occurred.',
          });
        } else if (error.request) {
          // Request was made but no response received
          console.log('Request error:', error.request);
          Swal.fire({
            icon: 'error',
            title: 'Network Error',
            text: 'Unable to connect to the server. Please try again later.',
          });
        } else {
          // Something happened in setting up the request
          console.log('Error:', error.message);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An unexpected error occurred.',
          });
        }
      }
       finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div className='container_main'>
      <div className='main'>
        <div className='signup'>
          <form onSubmit={formik.handleSubmit}>
            <h2 className='labelstyle text-center'>Admin Login</h2>
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
                {formik.isSubmitting ? 'Loading...' : 'Login'}
              </button>
            </div>
          </form>

          <div className='mt-4'>
            {/* <div>
              <span>Don't have an account yet? <span className='fw-bold' onClick={GotoSignupBtn} style={{ color: "#573b8a", cursor: "pointer" }}>Sign Up</span></span>
            </div> */}
            <div className='text-center'>
              <p style={{ color: "#573b8a", cursor: "pointer" }}>Forgot Password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adminlogin