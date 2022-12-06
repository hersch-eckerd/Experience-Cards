import React, { useState } from 'react';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import axios from 'axios';

axios.defaults.timeout = 1000;

function SignInForm () {
    const [token, setToken] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.defaults.headers = {"Authorization":`Bearer ${event.target.value}`};
        axios.post('https://its.jitbit.com/helpdesk/api/Authorization/', {})
            .then(response => {
                if (response.status == 200) {
                        console.log(response)
                        setToken(event.target.value)
                    }
                else if (response.status == 401) {
                        console.log(response)
                    }
                }
            )
            .catch(error => {console.log(error)});
        };
    return (
        <form onSubmit={handleSubmit}>
            <a href="https://its.jitbit.com/helpdesk/User/Token">Get your Token here</a>
            <br></br>
            <label>Enter your JitBit token: <br></br>
                <input
                    type="text"
                    value={token}
                    onChange={e => setToken(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )
}
export default SignInForm;