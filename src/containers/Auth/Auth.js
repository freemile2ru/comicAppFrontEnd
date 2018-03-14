import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import toastr from 'toastr';
import { loginAction, signUpAction, resetUserError } from '../../actions/user'
import Login from '../../components/login';
import SignUp from '../../components/signup';

class AuthPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLogin: true
    }
  }
  componentWillReceiveProps(nextProps){
    if(!this.props.user && nextProps.user){
      this.context.router.history.push('/comics')
    }

    if(nextProps.userError){
      toastr.clear();
      toastr.error(nextProps.userError);
      this.props.resetUserError()
    }
  }

  togglePage(e){
    e.preventDefault()
    this.setState({
      showLogin: !this.state.showLogin,
      username: '',
      password: '',
      email: ''
    })
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login(e){
    e.preventDefault();
    this.props.loginAction({
      username: this.state.username,
      password: this.state.password
    })
  }
  signUp(e){
    e.preventDefault();
    this.props.signUpAction({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    })
  }

  render(){
    const { showLogin, username, password, email } = this.state

    return(
      <div className="row">
        <div className="col s12 m8 offset-m2">
          {showLogin?
            <Login 
              handleChange={this.handleChange.bind(this)}
              login={this.login.bind(this)}
              disabled={!(username && password)}
            />:
            <SignUp
              handleChange={this.handleChange.bind(this)}
              signUp={this.signUp.bind(this)}
              disabled={!(username && password && email)}
            />
          }
        </div>
        <a className="waves-effect waves-light btn" onClick={this.togglePage.bind(this)}>{!this.showLogin? "SignUp": "Login"}</a>
      </div>
    )
  }
}

AuthPage.contextTypes = {
  router: propTypes.object.isRequired
}

const mapStateToProps = ({loader, user}) => {
  return {
    user: user.user,
    userError: user.error,
    loader: loader.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (credentials) => dispatch(loginAction(credentials)),
    signUpAction: (credentials) => dispatch(signUpAction(credentials)),
    resetUserError: () => dispatch(resetUserError()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);