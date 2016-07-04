const TaggingApiUtil = {
  create(tagging, success, error){
    $.ajax({
      url: '/api/taggings',
      type: "POST",
      dataType: 'json',
      data: {tagging: tagging},
      success: function(resp) {
        success(resp);
      },
      error(xhr) {
				const errors = xhr.responseJSON;
				error("signup", errors);
			}
    });
  },
  delete(tagging, success, error){
    $.ajax({
      url: '/api/taggings',
      type: 'DELETE',
      data: {tagging: tagging},
      success: function(resp) {
        success(resp);
      },
      error: function(resp){
        error(resp);
      }
    });
  }
};

module.exports = TaggingApiUtil;
