import React, { useState } from 'react';
import './LoginPage.css'; // Import the styles

function LoginPage() {
  // State to manage which form is visible (true for login, false for register)
  const [isLoginForm, setIsLoginForm] = useState(true);

  // State for login form inputs
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // State for register form inputs
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  
  const handleLoginSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Login submitted:", { identifier: loginIdentifier, password: loginPassword });
    // TODO: Add your API call for login here
  };
  
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log("Register submitted:", { name: registerName, email: registerEmail, phone: registerPhone, password: registerPassword });
    // TODO: Add your API call for registration here
  };

  return (
    <div className="split-screen-container">
      <div className="left-pane">
        <div className="left-pane-content">
          <h1>Welcome to GoCar</h1>
          <p>Your journey begins here. Rent the car of your dreams with just a few clicks.</p>
        </div>
      </div>

      <div className="right-pane">
        {/* Conditionally render the Login Form */}
        {isLoginForm && (
          <div id="login-form" className="form-wrapper">
            <h1>Sign In</h1>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="login-identifier">Email or Phone Number</label>
                <input 
                  type="text" 
                  id="login-identifier"
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input 
                  type="password" 
                  id="login-password" 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required 
                />
              </div>
              <button type="submit" className="submit-btn">Sign In</button>
            </form>
            <p className="toggle-link">
              Don't have an account? <a href="#" onClick={() => setIsLoginForm(false)}>Sign up</a>
            </p>
          </div>
        )}
        
        {/* Conditionally render the Register Form */}
        {!isLoginForm && (
          <div id="register-form" className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label htmlFor="register-name">Full Name</label>
                <input 
                  type="text" 
                  id="register-name" 
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-email">Email</label>
                <input 
                  type="email" 
                  id="register-email" 
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="register-phone" 
                  value={registerPhone}
                  onChange={(e) => setRegisterPhone(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-password">Password</label>
                <input 
                  type="password" 
                  id="register-password" 
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required 
                />
              </div>
              <button type="submit" className="submit-btn">Create Account</button>
            </form>
            <p className="toggle-link">
              Already have an account? <a href="#" onClick={() => setIsLoginForm(true)}>Sign in</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default LoginPage;