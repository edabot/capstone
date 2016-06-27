# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Recipes

- `GET /api/recipes`
  - Recipes index/search
  - accepts `tag_name` query param to list recipes by tag
  - accepts `user_id` query param to list recipes by author
- `POST /api/recipes`
- `GET /api/recipes/:id`
- `PATCH /api/recipes/:id`
- `DELETE /api/recipes/:id`

### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/notes/:note_id/tags`: add tag to note by name
  - if note doesn't already exist, it will be created
- `DELETE /api/notes/:note_id/tags/:tag_name`: remove tag from note by
  name
