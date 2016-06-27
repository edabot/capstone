# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Recipe Cycles

### Recipes API Request Actions

* `fetchAllRecipes`
  0. invoked from `RecipesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/recipes` is called.
  0. `receiveAllRecipes` is set as the callback.

* `createRecipe`
  0. invoked from new recipe button `onClick`
  0. `POST /api/recipes` is called.
  0. `receiveSingleRecipe` is set as the callback.

* `fetchSingleRecipe`
  0. invoked from `RecipeDetail` `didMount`/`willReceiveProps`
  0. `GET /api/recipes/:id` is called.
  0. `receiveSingleRecipe` is set as the callback.

* `updateRecipe`
  0. invoked from `RecipeForm` `onSubmit`
  0. `POST /api/recipes` is called.
  0. `receiveSingleRecipe` is set as the callback.

* `destroyRecipe`
  0. invoked from delete recipe button `onClick`
  0. `DELETE /api/recipes/:id` is called.
  0. `removeRecipe` is set as the callback.

### Recipes API Response Actions

* `receiveAllRecipes`
  0. invoked from an API callback.
  0. `Recipe` store updates `_recipes` and emits change.

* `receiveSingleRecipe`
  0. invoked from an API callback.
  0. `Recipe` store updates `_recipes[id]` and emits change.

* `removeRecipe`
  0. invoked from an API callback.
  0. `Recipe` store removes `_recipes[id]` and emits change.

### Store Listeners

* `RecipesIndex` component listens to `Recipe` store.
* `RecipeDetail` component listens to `Recipe` store.

## Likes Cycles

### Likes API Request Actions

* `fetchAllLikes`
  0. invoked from `RecipesIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/recipes/:id/likes` is called.
  0. `receiveAllLikes` is set as the callback.

* `createLike`
  0. invoked from new like button `onClick`
  0. `POST /api/recipes/:id/like` is called.
  0. `receiveSingleLike` is set as the callback.

* `destroyLike`
  0. invoked from delete like button `onClick`
  0. `DELETE /api/recipes/:id` is called.
  0. `removeRecipe` is set as the callback.

### Likes API Response Actions

* `receiveAllLikes`
  0. invoked from an API callback.
  0. `Recipe` store updates `_recipes` and emits change.

* `receiveSingleLike`
  0. invoked from an API callback.
  0. `Recipe` store updates `_recipes[id]` and emits change.

* `removeLike`
  0. invoked from an API callback.
  0. `Recipe` store removes `_recipes[id]` and emits change.

### Store Listeners

* `RecipesIndex` component listens to `Like` store.
* `RecipeDetail` component listens to `Like` store.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `RecipeSearchBar` `onChange` when there is text
  0. `GET /api/recipes` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `RecipeSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
