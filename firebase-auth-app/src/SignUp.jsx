import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Importa la configuración de Firebase
import "./signup.css"; // Usa los mismos estilos del SignIn para consistencia


function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSingUp = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres.");
            return;
          }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("The user was created successfully");
            setEmail("");
            setPassword("");
            setError("");
        } catch (err) {
            setError(err.message);        
        }
    }

    return(
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSingUp}>
                <input 
                type="text" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                />
                <input 
                type="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                />
                <input 
                type="password" 
                name="confirmPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Confirm your password" 
                required
                />
                <button type="submit">Sign Up</button>
                <p>Already have an account? <a href="/">Sign In</a></p>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
       
    );

}
export default SignUp