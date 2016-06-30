const React = require('react');
const SessionStore = require('../stores/session_store');

const NavBar = React.createClass({
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
        <div>
        {user}
        <button onClick={this.props.logout} className="btn btn-default" >logout</button>
        </div>
      );
    } else {
      return(
        <div>
          <button className="btn btn-default navbar-btn" onClick={this.props.login}>Log In</button>
          <button className="btn btn-default navbar-btn" onClick={this.props.signup}>Sign Up</button>
        </div>
      );
    }
  },
  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Foodium</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <div className="nav navbar-nav navbar-right">
              {this.navUserSection()}
            </div>
          </div>
        </div>
      </nav>
    );
  }

});

module.exports = NavBar;
