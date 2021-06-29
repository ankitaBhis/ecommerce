import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";


function Login(){
  let history = useHistory();

  const [user, setUser] = useState({
    username: '',
    password: ''
});

const handleChange=(e)=>{
  const { name, value } = e.target;
  setUser(user => ({ ...user, [name]: value }));
}



const handleSubmit=(e)=>{
  debugger;
  let data=localStorage.getItem('user')
  let data1=JSON.parse(data)
  console.log(data1)
  if(user.username && user.password!=""&& user.username===data1.username && user.password===data1.password){
    history.push('/ProductList');

  }
  else if(user.username && user.password!=""){
    alert("You might have misspelled your username or password!")
  }
}
    return(
        <div class="page-login">
        <div class="ui centered grid container">
          <div class="nine wide column">
            <div class="ui icon warning message">
                <i class="lock icon"></i>
                <div class="content">
                  <div class="header">
                    Login Form
                  </div>
                </div>
              </div>
            <div class="ui fluid card">
              <div class="content">
              <form class="ui form">
                <div class="field">
                  <label>User</label>
                  <input type="text" name="username" placeholder="User" onChange={handleChange} value={user.username} required={true}/>
                </div>
                <div class="field">
                  <label>Password</label>
                  <input type="password" name="password" placeholder="Password" onChange={handleChange} value={user.password} required={true}/>
                </div>
                <button class="ui primary labeled icon button" onClick={handleSubmit}>
                  <i class="unlock alternate icon"></i>
                  Login
                </button>
                <button class="ui primary labeled icon button" onClick={()=>history.push('/RegisterForm')}>
                  <i class="unlock alternate icon"></i>
                  Register
                </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    )
}

export default Login