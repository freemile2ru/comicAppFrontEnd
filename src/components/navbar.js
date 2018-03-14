import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

class Navbar extends Component{
  constructor(props){
    super(props);
    this.token = window.localStorage.getItem('token');
  }
  logout(){
    window.localStorage.removeItem('token');
    this.context.router.history.push('/');
  }
  render(){
    return (
      <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper blue darken-2">        
                <Link to="/comics" className="brand-logo"><img style={{height: '70px', width: '100px'}} src={'https://netdna.webdesignerdepot.com/uploads/circular_logos/Accelrys.jpg'} alt="logo" /></Link>
                <ul>
                 <li style={{ marginLeft: '45%'}}>
                   <Link to="/bookmarks" className="center"><a className="waves-effect waves-light btn">My Movies</a></Link>
                </li>
              </ul>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <a id="dropbtn" className="dropdown-button" data-activates="dropdown1">
                      {this.props.username || jwtDecode(this.token).username}
                    </a>
                  </li>
                    <ul id="dropdown1" className="dropdown-content">
                    <li className="divider"></li>
                    <li>
                      <a id="logout" onClick={this.logout.bind(this)}>
                          Sign Out
                      </a>
                    </li>
                  </ul>
              </ul>
            </div>
        </nav>        
      </div>
    )
  }
}
Navbar.contextTypes = {
  router: propTypes.object.isRequired
}

const mapStateToProps = ({user})=> {
  return {
    username: user.user && user.user.username
  }
}

export default connect(mapStateToProps, null)(Navbar)