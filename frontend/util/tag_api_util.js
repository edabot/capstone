const TagApiUtil = {
  index(tagName, success, error){
    $.ajax({
      url: '/api/tags/' + tagName,
      dataType: 'json',
      success: function(resp) {
        success(tagName, resp);
      },
      error: function(resp){
        error(resp);
      }
    });
  }
};

module.exports = TagApiUtil;
