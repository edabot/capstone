# Schema Information

## recipes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
cook_time | integer | not null
oven_temp | int |
image_url| string |
author_id   | integer   | not null, foreign key (references users), indexed

## user_followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followee_id     | integer   | not null, foreign key (references users)
follower_id     | integer   | not null, foreign key (references users)

## tag_followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followee_id     | integer   | not null, foreign key (references tags)
follower_id     | integer   | not null, foreign key (references users)

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
recipe_id     | integer   | not null, foreign key
author_id     | integer   | not null, foreign key (references users)

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

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
