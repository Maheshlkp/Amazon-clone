import React from 'react'
import { Link } from "react-router-dom";
import "./Login.css"

function Login () {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://cloudfront-us-east-1.images.arcpublishing.com/ajc/KHBQ4LE6CJGQRA6LIKISDCCVHE.jpg" />
            </Link>
        </div>
    )
}

export default Login
