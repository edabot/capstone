## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * RecipesIndex
    * Search
    * RecipeIndexList
    * Sidebar
  * **RecipesIndex**
    * RecipeIndexItem
    * **RecipeDetail**
      * RecipeIngredients
      * RecipeInteractions
      * RecipeComments


## Routes

* **component:** `App` **path:** `/`
  * **component:** `RecipesIndex` **path:** `recipes/:tagId`
    * **component:** `RecipeDetail` **path:** `recipes/:recipeId`
  * **component:** `RecipesIndex` **path:** none
    * **component:** `RecipeDetail` **path:** `recipes/:recipeId`
  * **component:** `AuthorIndex` **path:** `member/:userId`
    * **component:** `RecipeDetail` **path:** `recipes/:recipeId`

For Routes that have no `recipeId`, `RecipesIndex` will render all recipes.
