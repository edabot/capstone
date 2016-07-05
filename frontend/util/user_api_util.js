const UserApiUtil = {
  userPage(userId, success, error){
    $.ajax({
      url: '/api/users/' + userId,
      dataType: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp){
        error(resp);
      }
    });
  }
};

module.exports = UserApiUtil;
