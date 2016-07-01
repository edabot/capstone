json.partial! 'api/users/user', user: @user

json.liked_recipes @user.liked_recipes.map { |recipe| recipe.id }
