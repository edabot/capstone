const React = require('react');
const SessionStore = require('../stores/session_store');

const Navbar = require('react-bootstrap').Navbar;
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;
const Button = require('react-bootstrap').Button;


const TopNav = React.createClass({
  getInitialState(){
    return {
      currentUser: SessionStore.currentUser(),
    };
  },
  componentDidMount(){
    SessionStore.addListener(this._updateUser);
  },
  _updateUser(){
    this.setState({
      currentUser: SessionStore.currentUser()
    });
  },
  navUserSection(){
    let user = this.state.currentUser.username;
    if (user !== undefined) {
      return(
        <div className="flex-end flex-center">
        {user}
        <img src={this.state.currentUser.image_url.replace("upload",
          "upload/w_400,h_400,c_crop,g_face,r_max/w_40").replace('png', 'jpg')} />
        <button onClick={this.props.logout} className="btn btn-default navbar-btn" >logout</button>
        </div>
      );
    } else {
      return(
        <div>
          <Button className="btn btn-default navbar-btn" onClick={this.props.login}>Log In</Button>
          <Button className="btn btn-default navbar-btn" onClick={this.props.signup}>Sign Up</Button>
        </div>
      );
    }
  },
  render(){
    return(
      <Navbar>
        <div className="navbar-container">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Foodium</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.navUserSection()}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }

});

module.exports = TopNav;
