import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);



    const submitLogin = (e) => {
        e.preventDefault();
        const data = { email, password };
        console.log(data);
        setError("");

        fetch('https://workoutapi-fjcr.onrender.com/api/user/login',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            .then((res) => {
                if (res.ok) {
                    console.log(res);
                    console.log("Successfully Logged in");
                    return res.json();
                }
                else {
                    setEmail("");
                    setPassword("");
                    setError("Invalid Email or Password");
                    console.log(error);
                }
            })
            .then((res) => {
                console.log(res);
                setToken(res.token);
            })
    }



    return (

        <div className="Login">
            <h2>Please Login!</h2>

            <form onSubmit={submitLogin}>
                <label >Email:</label>
                <input type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input type="text"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="login-error">{error}</div>
                <button>Login</button>
            </form>
            <Link to="/Register">Register</Link>
        </div>


    );
}

export default Login;