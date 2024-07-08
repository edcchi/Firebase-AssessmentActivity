import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase/config";
import { setDoc, doc } from "firebase/firestore";
import './signup.css'; 

function SignUp({ setShowSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fn,
          lastName: ln,
        });
      }
      console.log("User Registered Successfully!!");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleRegister} className="signup-form">
        <h3 className="signup">Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setFn(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => setLn(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>

      <div className="login-link">
        <p>
          Already have an account?{" "}
          <button className="btn btn-secondary" onClick={() => setShowSignUp(false)}>
            Login Here
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;