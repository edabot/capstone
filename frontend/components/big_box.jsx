const React = require('react');

const BigBox = React.createClass({
  render(){
    return(
      <div className="jumbotron">
        <div className="promo-box">
          <h1 className="promo-title">Move thinking forward.</h1>
          <h2 className="promo-subtitle">Medium is a community of readers
            and writers offering unique perspectives on ideas large and
            small.</h2>
          <h3 className="promo-text">Sign up to read and interact
            with what matters most to you.</h3>
          <p><button onClick={this.props.signup}
                     className="btn btn-success btn-lg"
                     role="button">get started</button></p>
        </div>
      </div>
    );
  }
});

module.exports = BigBox;
