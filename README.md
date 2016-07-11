# Foodium

![home]

[home]: ./docs/images/foodium-home.png



[Foodium live][heroku]

[heroku]: http://foodium.space/

Foodium is a recipe-focused single-page application inspired by Medium that cleanly displays recipes for cooks and lets them engage with the community through following and liking.

## Features & Implementation


### Single-Page App

Foodium is a single-page app with all content  delivered on one static page.  The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`.  Sensitive information is kept out of the frontend of the app by making an API call to `SessionsController#current_user`.

### Recipe Rendering

  Recipes are stored in two tables in the database. The `recipes` table contains columns for `id`, `user_id`, `title`, `description`, `instructions`, `image_url`, `cook_time`, `oven_temp`, and `updated_at`. This is joined with a `comments` table for the `Recipe` view.

  Recipes are rendered in two different components: the `Index` components and the `Recipe` components.

  The `Index` components show the author picture, author name, recipe picture, recipe title, abbreviated description, likes count, and comment count.

The `Recipe` component shows the full comments for each recipe as well as an inline `Comment Form`. New comments appear as soon as they are submitted.

![recipe]

[recipe]: ./docs/images/foodium-recipe.png

### Recipe editing

The recipe editor uses the `draft-js` library for a rich-editor. This is needed so that it's easy for users to add lists of ingredients as well as numbered steps for instructions.

`draft-js` is being helped here with the `draft-js-import-html` and `draft-js-export-html` packages. This makes it easier to use a recipe template and to have html for rendering the recipe.

The menu bar for the editor was made with icons from Font Awesome.

![editor]

[editor]: ./docs/gifs/editor.gif

### Liking

Likes are handled with a `tags` table that includes `user_id` and `recipe_id`.

The likes information is included as an array of user_ids with each recipe. This allows for tracking of likes in the index views as well as the recipe view.

The hearts are animated with CSS for a nice bloopy feel.

![heart-bloop]

[heart-bloop]: ./docs/gifs/heart-bloop.gif

### Tags

Tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `taggings` table is the associated join table, which contains three columns: `id`, `tag_id`, and `recipe_id`.  

Tags are currently hard-coded with no option of adding new ones or adding them to recipes. This is to be changed to a modal that is linked to from the recipe edit page as there's already a lot of information on the recipe form.

### Image hosting in the cloud

Cloudinary is hosting every image on the site. The uploader is used for adding images to recipes and users' profiles.

Figaro is used to hide the API keys from being visible on Github.

## Future Directions for the Project

### Tag modal

To prevent form clutter, tags will be an extra option that show up in a modal upon saving for the first time or via a button during editing.

### Search

The seed data is pretty small right now and so search doesn't make much sense. I want to add more seed data either myself or by connecting to a recipe site's API. Then I can add a search function that would mean something.  

### Ingredients as checklists

The ingredients are simple `li` items right now. I want to turn them into divs with on/off states. That way you can click  or tap on them to turn them off so you know if you have it or have added it to the bowl or pan already. Super useful for baking.

### Ingredients in each steps

No clue how to automate this, but want to have the option to have these on/off ingredients in each step. That way ALL of the relevant information is right where you need it. What the hell is up with separation of instruction and quantity information. Are we reading this stuff off of index cards? No! we have the freakin' infinite space of the internet! Let's evolve, people.

### Bookmarks

Save a recipe to your list of favorites.

### Doubling of recipes

A `2x`and maybe a `3x` button to double or triple the ingredient amounts.

### Forking of a recipe

If you like a recipe, but you think it needs a small change you can fork it like a github repo. You get your own version of the recipe that you can edit.

Since the recipes will be linked, both authors will get credit on the new recipe.

Many times the best version of a recipe is found only by reading the recipe and then adding in changes from the highest-rated comments. This allows for a new recipe to incorporate those changes so that all of the relevant information is where it should be.

These can be public or private. Sometimes you just want to remember to use less salt, for example.

### Optimizing of the content upon submission

Optimization of the draft.js editor or processing upon save in the back end will be used to clean up the html.
Currently, the editor breaks up paragraphs with `br` tags. Styling is easier and cleaner with each paragraph in a `p` tag.
