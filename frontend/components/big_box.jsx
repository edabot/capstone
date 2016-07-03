const React = require('react');
const Button = require('react-bootstrap').Button;
const Jumbotron = require('react-bootstrap').Jumbotron;

const BigBox = React.createClass({
  render(){
    return(
      <Jumbotron>
        <div className="promo-box">
          <h1 className="promo-title">Eat the best</h1>
          <h2 className="promo-subtitle">Foodium is a community of cooks
          of all kinds who want to make the best food they can.</h2>
          <h3 className="promo-text">Sign up to get started and find a
          whole new world of food.</h3>
          <p><Button onClick={this.props.signup}
                     bsSize="large"
                     bsStyle="success">get started</Button></p>
        </div>
      </Jumbotron>
    );
  }
});

module.exports = BigBox;
