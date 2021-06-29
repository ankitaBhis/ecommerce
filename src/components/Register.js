import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";


function RegisterForm() {
    let history = useHistory();


    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });


    const handleClick=(e)=>{
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        localStorage.setItem('user',JSON.stringify(user));
        history.push('/');
        
    }

    return (
        <div class="page-login">
            <div class="ui centered grid container">
                <div class="nine wide column">
                    <div class="ui icon warning message">
                        <i class="lock icon"></i>
                        <div class="content">
                            <div class="header">
                                Register Form
                            </div>
                        </div>
                    </div>
                    <div class="ui fluid card">
                        <div class="content">
                            <form class="ui form">
                                <div class="field">
                                    <label>First Name</label>
                                    <input type="text" name="firstName" placeholder="First Name" onChange={handleClick} value={user.firstName} required={true}/>
                                </div>
                                <div class="field">
                                    <label>Last Name</label>
                                    <input type="text" name="lastName" placeholder="Last Name" onChange={handleClick} value={user.lastName} required={true} />
                                </div>
                                <div class="field">
                                    <label>Username</label>
                                    <input type="text" name="username" placeholder="Username" onChange={handleClick} value={user.username} required={true} />
                                </div>
                                <div class="field">
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="Password" onChange={handleClick} value={user.passward} required={true} />
                                </div>
                                <button class="ui primary labeled icon button" onClick={handleSubmit}>
                                     Register
                                </button>
                                <button class="ui primary labeled icon button" onClick={()=>history.push('/')}>
                                     Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm