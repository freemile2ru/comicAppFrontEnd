import React from 'react'


const SignUp = (props)=> (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
                <input id="username" type="text" name="username" onChange={props.handleChange} className="validate"/>
                <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
                <input id="email" type="email" name="email"  onChange={props.handleChange} className="validate"/>
                <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
                <input id="password" type="password"  onChange={props.handleChange} name="password" className="validate"/>
                <label htmlFor="password">Password</label>
            </div>
          </div>
          <a className="waves-effect waves-light btn" disabled={props.disabled} onClick={props.signUp}>button</a>
        </form>
      </div>
    </div>
)

export default SignUp