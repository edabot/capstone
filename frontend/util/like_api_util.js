const LikeApiUtil = {
  create(recipeId, success, error){
    $.ajax({
      url: '/api/likes',
      type: "POST",
      dataType: 'json',
      data: {like: {recipe_id: recipeId}},
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
      url: '/api/likes/'+id,
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

module.exports = LikeApiUtil;
