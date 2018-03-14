import React from 'react';


const Login = (props)=> (
        <div>
            <div className="row">
                <form className="col s12">
                  <div className="row">
                      <div className="input-field col s12">
                        <input id="username" type="text" name="username" onChange={props.handleChange} className="validate"/>
                        <label htmlFor="first_name">Username</label>
                      </div>
                  </div>
                  <div className="row">
                      <div className="input-field col s12">
                        <input id="password" type="password"  onChange={props.handleChange} name="password" className="validate"/>
                        <label htmlFor="password">Password</label>
                      </div>
                  </div>
                  <a className="waves-effect waves-light btn" disabled={props.disabled} onClick={props.login}>button</a>
              </form>
          </div>
      </div>
)

export default Login