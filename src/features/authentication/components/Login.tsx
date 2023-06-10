import React, { useState } from 'react';
import { postAPI } from '../services/loginSignupService';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [reenterpassword, setReenterpassword] = useState('');
  const [err, setErr] = useState("");

  interface Response {
    isSuccess: boolean;
    data: any;
    msg:String
  }

  const handleLogin = ()=>{
    if(!username || !email){
      setErr("Add Correct Info First");
    }
    const data = {
      userNameEmail: username,
      password: password,
    };
    postAPI("/users/login", data).then((res: Response) => {
      if (res.isSuccess) {
        // TODO handle Success
      } else {
        setErr("Invalid Credentials");
      }
    });
  }

  const handleSignUp = () => {
    if (reenterpassword !== password) {
      setErr("Password dont match");
      return;
    }
    const data = {
      name: username,
      email: email,
      password: password,
    };
    postAPI("/users/create", data).then((res:Response) => {
      if (res.isSuccess) {
        // TODO handle Success
      } else {
        setErr("User Creation Failed");
      }
    });
  };

  return (
    <div className='center max-height'>
    <div className='medium-shadow p-a-15'>
        {isLogin ? 
          <div>
            <input
              type="text"
              name="usernameOrEmail"
              placeholder="Username or Email"
              required
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <br />
            {err ? <div className="err">{err}</div> : ""}
            <br />
            <button className="common-button" onClick={handleLogin}>Login</button>

          </div> :
        <div>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <br />
            <input type="email" name="email" placeholder="Email Address" />
            <br />
            <input type="password" name="password" placeholder="Password" />
            <br />
            <input
              type="password"
              name="reenterPassword"
              placeholder="Reenter-Password"
            />
            <br />
            {err ? <div className="err">{err}</div> : ""}
            <br />
            <button className="common-button" onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>}
        Switch to <button className='common-button' onClick={()=>setIsLogin(1-isLogin)}>{isLogin ? "Sign Up": "Sign In"}</button>
    </div>
    </div>
  );
};

export default LoginPage;