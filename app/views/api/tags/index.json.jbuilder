json.tags @tags do |tag|
  json.name tag.name
  json.recipes tag.recipes[-3..-1] do |recipe|
    json.author recipe.user.username
    json.image_url recipe.image_url
    json.title recipe.title
    json.description recipe.description
    json.id recipe.id
  end
end
