json.extract!(
  recipe,
  :id, :title, :description, :ingredients, :instructions, :user_id, :image_url
)
json.author do
  json.username recipe.user.username
  json.image_url recipe.user.image_url
  json.id recipe.user.id
end

json.likers recipe.likers.map { |user| user.id }

json.comment_count recipe.comments.length
json.likes_count recipe.likes.length

json.tags recipe.tags.map { |tag| tag.name }
