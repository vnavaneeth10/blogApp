import React from 'react';
import '../logs/Signup.css';
import Validation from './Validation';

function Signup(props) {

  const switchers = [...document.querySelectorAll('.switcher')] 

  switchers.forEach(item => {
      item.addEventListener('click', function() {
          switchers.forEach(item => item.parentElement.classList.remove('is-active'))
          this.parentElement.classList.add('is-active')
      })
  })

  return (
    <div id='cover'>
      
    <section className="forms-section">
    <h1 className="section-title">Join the Community</h1>
      <div className="forms">
        <div className="form-wrapper is-active">
         <button type="button" className="switcher switcher-login">
          Login
         <span className="underline"></span>
         </button>
    <form className="form form-login">
<fieldset>
  <legend>Please, enter your email and password for login.</legend>
  <div className="input-block">
    <label for="login-email">E-mail</label>
    <input id="login-email" type="email" required />
  </div>
  <div className="input-block">
    <label for="login-password">Password</label>
    <input id="login-password" type="password" required />
  </div>
</fieldset>
<button type="submit" className="btn-login">Login</button>
    </form>
    </div>
    <div className="form-wrapper">
    <button type="button" className="switcher switcher-signup">
    Sign Up
    <span className="underline"></span>
    </button>
    <form className="form form-signup">
    <fieldset>
    <legend>Please, enter your email, password and password confirmation for sign up.</legend>
    <div className="input-block">
    <label for="signup-email">User name</label>
    <input id="signup-email" type="text" required />
    </div>
    <div className="input-block">
    <label for="signup-password">Password</label>
    <input id="signup-password" type="password" required />
    </div>
    <div className="input-block">
    <label for="signup-password-confirm">E-mail</label>
    <input id="signup-password-confirm" type="email" required />
    </div>
    </fieldset>
    <button type="submit" className="btn-signup">Continue</button>
    </form>
    </div>
    </div>
    </section>
</div>


    
);
}

export default Signup;


        

       

        

    
    
       
        

