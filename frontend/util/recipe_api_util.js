const RecipeApiUtil = {
  create(recipe, success, error){
    $.ajax({
      url: '/api/recipes',
      type: "POST",
      dataType: 'json',
      data: {recipe: recipe},
      success: function(resp) {
        success(resp);
      },
      error(xhr) {
				const errors = xhr.responseJSON;
				error("signup", errors);
			}
    });
  },
  show(id, success, error){
    $.ajax({
      url: '/api/recipes/' + id,
      dataType: 'json',
      success: function(resp) {
        success(resp);
      },
      error(xhr) {
				const errors = xhr.responseJSON;
				error("login", errors);
			}
    });
  },
  index(success, error){
    $.ajax({
      url: '/api/recipes',
      dataType: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp){
        error(resp);
      }
    });
  },
  update(recipe, success, error){
    $.ajax({
      url: '/api/recipes/'+recipe.id,
      type: 'PATCH',
      dataType: 'json',
      data: {recipe: recipe},
      success: function(resp) {
        success(resp);
      },
      error: function(resp){
        error(resp);
      }
    });
  },
  destroy(id, success, error){
    $.ajax({
      url: '/api/recipes/'+id,
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

module.exports = RecipeApiUtil;
