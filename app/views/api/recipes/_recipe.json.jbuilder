json.extract!(
  recipe,
  :id, :title, :description, :ingredients, :instructions, :user_id, :image_url
)

recipe_likers = recipe.likers.map { |user| user.id }

json.likers recipe_likers

show_heart = false

if recipe_likers.include?(current_user.id)
  show_heart = true
end

json.show_heart show_heart

json.comment_count recipe.comments.length

json.author do
  json.username recipe.user.username
  json.image_url recipe.user.image_url

end
