const React = require('react');
const Button = require('react-bootstrap').Button;
const Jumbotron = require('react-bootstrap').Jumbotron;

const BigBox = React.createClass({
  render(){
    return(
      <Jumbotron>
        <div className="promo-box">
          <h1 className="promo-title">Move thinking forward.</h1>
          <h2 className="promo-subtitle">Medium is a community of readers
            and writers offering unique perspectives on ideas large and
            small.</h2>
          <h3 className="promo-text">Sign up to read and interact
            with what matters most to you.</h3>
          <p><Button onClick={this.props.signup}
                     bsSize="large"
                     bsStyle="success">get started</Button></p>
        </div>
      </Jumbotron>
    );
  }
});

module.exports = BigBox;
