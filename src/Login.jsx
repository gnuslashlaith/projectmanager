import React, {useState} from 'react'
import './Login.css'

function Login() {

    function getUsername() {

    }
    function handleInput() {

    }


    return (
        <div class="main">
            <h1>Project Manager</h1>

            <div class="login-box">
                <h2>Log-in</h2>
                <input 
                type="text"
                placeholder='Enter Username...'
                value={getUsername}
                onChange={handleInput}>
                </input>
                <br></br>
                <input type="text"
                placeholder='Enter Password...'
                value={getUsername}
                onChange={handleInput}>

                </input>
                <br></br>

                <button class="submit">Submit</button>
                <br></br>

                <a href="https://github.com"> Or Create a New Account</a>
                
            </div>

        </div>
    
    
    
    
    
    );
}

export default Login;