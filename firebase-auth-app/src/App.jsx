import React, { useEffect } from "react";
import { auth } from "./firebase";
import './App.css'

// Importing components
import SignIn from './SignIn'
import SignUp from './SignUp'

function App() {
  
  useEffect(() => {
    console.log("Firebase Auth Object:", auth);
  }, []);

  return (
    <div id="root">
      <h1>Firebase Auth App</h1>
      <div className="card-container">
        <div className="card">
          <SignUp />
        </div>
        <div className="card">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
export default App
