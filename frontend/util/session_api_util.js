const SessionApiUtil = {
  signup(user, success, error){
    $.ajax({
      url: '/api/users',
      type: "POST",
      dataType: 'json',
      data: {user: user},
      success: function(resp) {
        success(resp);
      },
      error(xhr) {
				const errors = xhr.responseJSON;
				error("signup", errors);
			}
    });
  },
  login(user, success, error){
    $.ajax({
      url: '/api/session',
      type: "POST",
      dataType: 'json',
      data: {user: user},
      success: function(resp) {
        success(resp);
      },
      error(xhr) {
				const errors = xhr.responseJSON;
				error("login", errors);
			}
    });
  },
  delete(success, error){
    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      success: function(resp) {
        success(resp);
      },
      error: function(resp){
        error(resp);
      }
    });
  }
};

module.exports = SessionApiUtil;
