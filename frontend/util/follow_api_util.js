const FollowApiUtil = {
  create(data, success, error){
    $.ajax({
      url: '/api/follows',
      type: "POST",
      dataType: 'json',
      data: {follow: data},
      success: function(resp) {
        success(resp);
      }
    });
  },
  destroy(data, success, error){
    $.ajax({
      url: '/api/follows',
      type: 'DELETE',
      data: {follow: data},
      success: function(resp) {
        success(resp);
      }
    });
  }
};

module.exports = FollowApiUtil;
