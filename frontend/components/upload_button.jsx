var React = require("react");

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results){
      if(!error){
        this.props.imageChange(results[0].url);
      }
    }.bind(this));
  },
  buttonText(){
    let text = "Upload image";
    if (this.props.imageUrl !== "") {
      text = "Replace image";
    }
    return text;
  },
  render: function () {
    return (
        <button className="btn btn-upload btn-default"
                onClick={this.upload}>{this.buttonText()}</button>
    );
  }
});

module.exports = UploadButton;
