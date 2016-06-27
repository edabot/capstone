# FresherNote

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://foodium-aa.herokuapp.com

## Minimum Viable Product

Foodium is a recipe site inspired by Medium that cleanly displays recipes for cooks and lets them engage with the community through following and liking.

By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Recipes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments for recipes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Rich Text Editing of comments
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate CSS styling
- [ ] Liking of recipes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Recipes Model, API, and basic APIUtil (1 day, W1 W 6pm)

**Objective:** Recipes can be created, read, edited and destroyed through
the API.

- [ ] create `Recipe` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for recipes (`RecipesController`)
- [ ] jBuilder views for recipes index and detail
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Recipes can be created, read, edited and destroyed with the user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each recipe component, building out the flux loop as needed.
  - [ ] `RecipesIndex`
  - [ ] `RecipeIndexItem`
  - [ ] `RecipeForm`
- [ ] save Recipes to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Tags (1 day, W2 Tu 12pm)

**Objective:** Recipes can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for recipe
  - [ ] adding tags to recipe
  - [ ] searching recipes by tag
- [ ] Style new elements

### Phase 6: Add comments for recipes (1.5 days, W2 W 6pm)

**objective:** Enable comments with a nice editor.
- [ ] create `Comment` model and join table
- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 7: Add liking of recipes (1 day, W2 Th 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Phase 8: Add sidebar for tags (1 day, W2, Fr 6pm)

**objective:**

- [ ] Flesh out feed with sidebar
- [ ] Display top 3 of each tag

### Bonus Features (TBD)
- [ ] Follow tags for customized feed
- [ ] Follow users for customized feed
- [ ] Break instructions into individual steps for styling
- [ ] Break ingredients into individual items
- [ ] Pagination / infinite scroll for Recipes Index


[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
# capstone
