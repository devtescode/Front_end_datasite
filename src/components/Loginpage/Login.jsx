import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  localStorage.removeItem("useradminlogin")
  useEffect(() => {
    if (!localStorage.token) {
      navigate('/login');
    }
  }, []);
  
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
        const response = await axios.post('http://localhost:4000/userfunding/login', values);
        if (response.data.status) {
          Swal.fire({
            icon: 'success',
            // title: 'Login Successful',
            text: response.data.message || 'Welcome!',
          }).then(() => {
            localStorage.setItem("UserData", JSON.stringify(response.data.userData));
            localStorage.token = response.data.token
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard")
            localStorage.setItem("useradminlogin", true)

          });

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: response.data.message || 'Invalid Email or Password.',
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

  const GotoSignupBtn = () => {
    navigate("/register");
  };

  return (
    <div className='container_main'>
      <div className='main'>
        <div className='signup'>
          <form onSubmit={formik.handleSubmit}>
            <h2 className='labelstyle text-center'>Login</h2>
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
            <div>
              <span>Don't have an account yet? <span className='fw-bold' onClick={GotoSignupBtn} style={{ color: "#573b8a", cursor: "pointer" }}>Sign Up</span></span>
            </div>
            <div className='text-center'>
              <p style={{ color: "#573b8a", cursor: "pointer" }}>Forgot Password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
