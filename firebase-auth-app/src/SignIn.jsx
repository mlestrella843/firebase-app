import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Importa la instancia de Firebase Auth
import "./signing.css";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Por favor, llena todos los campos.");
            return;
        }

        setError("");
        try {
            // Autenticación con Firebase
            await signInWithEmailAndPassword(auth, email, password);
            alert("Inicio de sesión exitoso!");
            setEmail(""); // Limpia el campo email
            setPassword(""); // Limpia el campo password
        } catch (err) {
            setError(err.message); // Mostrar el mensaje de error
        }
    };

    return (
        <div className="signin-container">
            <h1>Sign In</h1>
            {/* Asegúrate de que todo esté dentro de la etiqueta <form> */}
            <form onSubmit={handleSignIn}>
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
                <button type="submit">Sign In</button>
            </form>
            {/* Mostrar el mensaje de error */}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default SignIn;
