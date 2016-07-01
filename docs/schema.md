# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## recipes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
ingredients | text      | not null
instructions| text      | not null
cook_time   | integer   |
oven_temp   | integer   |
image_url   | string    |
user_id     | integer   | not null, indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
recipe_id   | integer   | not null, foreign key
user_id     | integer   | not null, foreign key
comment     | text      | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
recipe_id   | integer   | not null, foreign key
user_id     | integer   | not null, foreign key

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
recipe_id     | integer   | not null, foreign key (references notes), indexed, unique [recipe_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## ingredients - bonus
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
recipe_id     | integer   | not null, foreign key (references recipes)
amount | float | not null
measurement_type | string | not null
name | string | not null

## user_followings - bonus
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followee_id     | integer   | not null, foreign key (references users)
follower_id     | integer   | not null, foreign key (references users)

## tag_followings - bonus
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followee_id     | integer   | not null, foreign key (references tags)
follower_id     | integer   | not null, foreign key (references users)
