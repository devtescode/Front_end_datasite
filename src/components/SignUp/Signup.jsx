import React from 'react'
import "./Signup.css"

const Signup = () => {
  const SignupBtn=()=>{
    alert("Submit...")
  }
  return (
    <>
    <div className='container_main'>
      <div className='main'>
        <input type="checkbox" id='chk' aria-hidden="true"/>
        <div className="signup">
          <form>
            <label htmlFor="" for="chk" aria-hidden="true" className='labelstyle'>Sign Up</label>
            <input className='input_text' type="text" placeholder='User name' required/>
            <input className='input_text' type="text"  placeholder='Email' required/>
            <input className='input_text' type="text"  placeholder='Phone' required/>
            <input className='input_text' type="text" placeholder='Password' required/>
            <button className='button_submit' onClick={SignupBtn}>Sign-Up</button>
          </form>
        </div>


        <div className="login">
          <form>
            <label htmlFor="" for="chk" aria-hidden="true" className='labelstyle'>Login</label>
            <input type="text" className='input_text'  placeholder='Email' required/>
            <input type="text" className='input_text' placeholder='Password' required/>
            <button className='button_submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup