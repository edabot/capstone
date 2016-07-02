json.partial! 'api/recipes/recipe', recipe: @recipe

comments = @recipe.comments.sort { |x,y| y.created_at <=> x.created_at }

json.comments comments do |comment|
  json.body comment.body
  json.author comment.user.username
end
