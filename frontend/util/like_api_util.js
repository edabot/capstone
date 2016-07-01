const LikeApiUtil = {
  create(data, success, error){
    $.ajax({
      url: '/api/likes',
      type: "POST",
      dataType: 'json',
      data: {like: data},
      success: function(resp) {
        success(resp);
      }
    });
  },
  destroy(data, success, error){
    $.ajax({
      url: '/api/likes/',
      type: 'DELETE',
      data: {like: data},
      success: function(resp) {
        success(resp);
      }
    });
  }
};

module.exports = LikeApiUtil;
