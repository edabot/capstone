## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * RecipesIndex
    * Search
    * RecipeIndexList
    * Sidebar
  * **RecipesIndex**
    * Search
    * RecipeIndexItem
    * Sidebar
    * **RecipeDetail**
      * RecipeContent
      * RecipeInteractions
      * RecipeComments

## Routes

* **component:** `App` **path:** `/`
  * **component:** `RecipesIndex` **path:** none
    * **component:** `RecipeDetail` **path:** `recipes/:recipeId`
  * **component:** `RecipesIndex` **path:** `recipes/:tagId`
    * **component:** `RecipeDetail` **path:** `recipes/:recipeId`


For Routes that have no `recipeId`, `RecipesIndex` will render all recipes.
