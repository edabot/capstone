const CommentApiUtil = {
  create(comment, success, error){
    $.ajax({
      url: '/api/comments',
      type: "POST",
      dataType: 'json',
      data: {comment: comment},
      success: function(resp) {
        success(resp);
      },
      error(xhr) {
				const errors = xhr.responseJSON;
				error("signup", errors);
			}
    });
  },
  destroy(id, success, error){
    $.ajax({
      url: '/api/comments/'+id,
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

module.exports = CommentApiUtil;
