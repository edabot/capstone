# Foodium

[Heroku link][heroku]

[heroku]: http://foodium-aa.herokuapp.com

### setup
 - npm install
 - bundle install
 - webpack -w
 - rake db:create
 - rake db:migrate
 - rake db:seed

## Minimum Viable Product

Foodium is a recipe site inspired by Medium that cleanly displays recipes for cooks and lets them engage with the community through following and liking.

By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [x] Images hosted on a CDN (Cloudinary) for faster retrieval
  - [x] Static images on cloudinary
  - [x] Using Cloudinary API for upload
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

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 W 6pm)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

added
- [x] deal with errors in login/signup
- [x] greeting in header
- [x] bootstrap current user
- [x] modal for login/signup
 - [x] modal is different for login/signup options
 - [x] modal closes on success
- [x] seed database with guest account
- [x] seed database with user accounts
- [x] guest login option
- [ ] protect front end routes
- [x] install figaro
- [x] set up cloudinary for images
- [x] add intro box for logged out users
- [x] heroku
  - [x] get site on heroku
  - [x] point domain to heroku

### Phase 2: Recipes Model, API, and basic APIUtil (1 day, W1 Th 6pm)

**Objective:** Recipes can be created, read, edited and destroyed through
the API.
Â
- [x] create `Recipe` model
- [x] CRUD API for recipes (`RecipesController`)
- [x] jBuilder views for recipes index and detail
- [x] seed the database with a small amount of test data
- [x] set up Webpack & Flux scaffold
- [x] set up `APIUtil` to interact with the API
- [x] test out API interaction in the console.

added
- [x] set up RecipeActions and RecipeStore
- [x] test RecipeActions and RecipeStore in console
- [x] big box only shows up on index page

### Phase 3: Flux Architecture and Router (1 day, W1 F 6pm)

**Objective:** Recipes can be created, read, edited and destroyed with the user interface.

- [x] set up the flux loop with skeleton files
- [x] set up React Router
- [x] implement each recipe component, building out the flux loop as needed.
  - [x] `RecipeIndexItem`
  - [x] `RecipesIndex`
  - [x] `RecipeForm`
- [x] save images to Recipes with Cloudinary

### Phase 4: Start Styling and first feedback (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles
- [ ] ask for feedback when done

### Phase 5: Add comments for recipes (1 day, W2 Tu 12pm)

**objective:** Enable comments with a nice editor.
- [x] create `Comment` model
- [x] API endpoints
  - [x] added
  - [x] tested
- [x] actions and stores
  - [x] added
  - [x] tested
- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 6: Add liking of recipes (1 day, W2 W 6pm)

**objective:** Make the site feel more cohesive and awesome.
- [x] create 'Like' model
- [x] API endpoints
  - [x] added
  - [x] tested
- [x] actions and stores
  - [x] added
  - [x] tested
- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Phase 7: More styling (.5 days, W2 W 6pm)
- [ ] Re-evaluate styling with comments added

### Phase 8: Tags (1 day, W2 Th 12pm)

**Objective:** Recipes can be tagged with multiple tags, and tags are searchable.

- [x] create `Tag` model and `Tagging` join table
- [x] `Tagging`
 - [x] API endpoints
 - [x] API util
 - [x] actions
 - [x] stores
- [ ] `Tag`
- [ ] build out API, Flux loop, and components for:
- [x] fetching tags for recipe
- [ ] adding tags to recipe
- [x] searching recipes by tag
- [x] Style new elements

### Phase 9: Add sidebar for tags (1 day, W2, Fr 6pm)

**objective:** Add sidebar for groups of recipes

- [ ] Flesh out feed with sidebar
- [ ] Display top 3 of each tag

### Bonus Features (TBD)
- [ ] auto-save recipes to desktop after timeout
- [ ] Break instructions into individual steps for styling
- [ ] Break ingredients into individual items
- [ ] save Recipes to the DB when the form loses focus or is left idle after editing.
- [ ] Follow tags for customized feed
- [ ] Follow users for customized feed
- [ ] Pagination / infinite scroll for Recipes Index

### Bugs
- [ ] password minimum text showing on login
- [ ] recipe pages showing broken page briefly on load
- [x] tag pages don't change when clicking tag link on page

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
# capstone
