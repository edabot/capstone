json.partial! 'api/users/user', user: @user

json.liked_recipes @user.liked_recipes.map { |recipe| recipe.id }

json.recipes @user.recipes do |recipe|
  json.title recipe.title
  json.image_url recipe.image_url
  json.id recipe.id
end
