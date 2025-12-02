import React, { useState } from "react";

const Login = () => {
  const [mobileOrEmail, setMobileOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Mobile/Email:", mobileOrEmail);
    console.log("Password:", password);
    alert("Login Successful!"); // Popup on click
  };

  return (
    <div>
      <div className="border border-white bg-white-500 shadow-xl  ml-140 mt-15 h-80 w-100 rounded-lg p-10 text-white flex justify-center items-center bg-white-500">
        <div className="mb-30">
          <label className="text-white">
            <b>Enter mobile number or email:</b>
          </label>
          <br />
          <input
            type="text"
            className="text-white border p-1"
            value={mobileOrEmail}
            onChange={(e) => setMobileOrEmail(e.target.value)}
          />
          <br />

          <label className="text-white mt-5">
            <b>Password:</b>
          </label>
          <br />
          <input
            type="password"
            className="text-white border p-1 "
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button
            className="border border-black bg-yellow-500 w-50 mt-5 rounded-full text-black p-1"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
