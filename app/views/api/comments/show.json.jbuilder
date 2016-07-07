json.extract!(
  @comment,
  :id, :user_id, :recipe_id, :body
)

json.author @comment.user
