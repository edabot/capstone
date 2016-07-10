# Foodium

[Foodium live][heroku]

[heroku]: http://foodium.space/

Foodium is a recipe-focused single-page application inspired by Medium that cleanly displays recipes for cooks and lets them engage with the community through following and liking.

## Features & Implementation


### Single-Page App

Foodium is a single-page app with all content  delivered on one static page.  The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`.  Sensitive information is kept out of the frontend of the app by making an API call to `SessionsController#current_user`.

```ruby
class Api::SessionsController < ApplicationController
  def show
    if current_user
      render json: current_user
    else
      render json: {
          base: ["Nobody signed in"]
        }, status: 404
    end
  end
end
  ```

### Recipe Rendering

  Recipes are stored in two tables in the database. The `recipes` table contains columns for `id`, `user_id`, `title`, `description`, `instructions`, `image_url`, `cook_time`, `oven_temp`, and `updated_at`. This is joined with a `comments` table for the `Recipe` view.

  Recipes are rendered in two different components: the `Index` components and the `Recipe` components.

  The `Index` components show the author picture, author name, recipe picture, recipe title, abbreviated description, likes count, and comment count.

The `Recipe` component shows the full comments for each recipe as well as an inline `Comment Form`. New comments appear right away. Huzzah!

### Recipe editing

The recipe editor uses the `draft-js` library for a rich-editor for the ingredients and instructions. This is needed so that it's easy for users to add lists of ingredients as well as numbered steps for instruction.

`draft-js` has its own content system that I didn't quite understand. It's very, very fancy. I also couldn't get html in or out of it on my own.

So thank goodness for the `draft-js-import-html` and `draft-js-export-html` packages! Real life savers.

The menu bar for the editor was made with icons from Font Awesome.

![editor]

[editor]: ./gifs/editor.gif

### Liking

The magic of liking something takes place in your heart. Or your head, really, the heart thing is a metaphor. On the site, likes are done with a simple `tags` table the includes `user_id` and `recipe_id`.

The likes information is included as an array of user_ids with each recipe. This allows for tracking of likes in the index views as well as the recipe view.

The hearts are animated with CSS for a nice bloopy feel.

![heart-bloop]

[heart-bloop]: ./gifs/heart-bloop.gif

### Tags

Tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `taggings` table is the associated join table, which contains three columns: `id`, `tag_id`, and `recipe_id`.  

Tags are currently hard-coded with no option of adding new ones or adding them to recipes. This is to be changed to a modal that is linked to from the recipe edit page as there's already a lot of information on the recipe form.

### Images in the cloud

Foodium uses Cloudinary to host every image on the site. The uploader is used for adding images to recipes as well as profile pictures for users.

Figaro is used to hide the API keys from being visible on Github.

## Future Directions for the Project

When I have time again I plan on adding more features to Foodium. This thing isn't over yet!

### Tag modal

Just like how this was mentioned a couple sentences ago, this is needed for users to add tags and not clutter up the recipe form.

### Search

The seed data is pretty small right now and so search doesn't make much sense. I want to add more seed data either myself or by connecting to a recipe site's API. Then I can add a search function that would mean something.  

### Ingredients as checklists

The ingredients are simple `li` items right now. That's cool and all because people expect that. Screw expectations! Screw them right in the ear. I want to turn them into divs with on/off states. That way you can click  or tap on them to turn them off so you know if you have it or have added it to the bowl or pan already. Super useful for baking.

### Ingredients in each steps

No clue how to automate this, but want to have the option to have these on/off ingredients in each step. That way ALL of the relevant information is right where you need it. What the hell is up with separation of instruction and quantity information. Are we reading this stuff off of index cards? No! we have the freakin' infinite space of the internet! Let's evolve, people.

### Bookmarks

Want to save a recipe for later? We can do that! Well, not right now. We can do that in the future.

### Doubling of recipes

A `2x`and maybe a `3x` button to double or triple the ingredient amounts. Feed your hood! Cookies by the dozens of dozens!

### Forking of a recipe

Oh, this is the big stuff right here. This is the future. If you like a recipe, but you think it needs a small change you can fork it like a github repo. You get your own version of the recipe that you can edit.

Tired of having to read the comments for any improvements? You should be, that's bullshit.

We shouldn't have to recompile a recipe in our heads. Are we savages? Have we given up on life and resort to eating cereal for dinner, washed down with cheap whiskey? Hells no.

No, we should be able to fork a recipe and have it link back to the original. That way both authors get credit.

### Optimizing of the content upon submission

The draft.js editor is sweetness on a stick for Facebook. It's kinda OK for recipes. When you hit enter it inserts a `br` tag.

The hell?!?

Give me a new `p` tag or give me death.

I don't want to die so maybe this can be cleaned up on submission to the backend.
