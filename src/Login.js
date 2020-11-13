import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import alien from './png/alien.png';
import { auth } from "./Firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(e => alert(e.message));
    };
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(e => alert(e.message));
    };
    // let history = useHistory();
    return <div className="login">
        <Link to="/">
            <img
                className="login__logo"
                src={alien}
                alt=""
            />
        </Link>
        <div className="login__container">
            <h1>Sing in</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                <h5>Password</h5>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                <button onClick={login} type="submit" className="login__singIn">Sing In</button>
            </form>

            <p>
                By signing-in you agree to PGL Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} type="submit" className="login__create">Create your PGL Account</button>
        </div>
    </div>;
}

export default Login
