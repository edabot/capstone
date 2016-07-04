json.extract!(
  recipe,
  :id, :title, :description, :ingredients, :instructions, :user_id, :image_url
)

json.likers recipe.likers.map { |user| user.id }

json.comment_count recipe.comments.length
json.likes_count recipe.likes.length

json.author do
  json.username recipe.user.username
  json.image_url recipe.user.image_url
end

json.tags recipe.tags.map { |tag| tag.name }
