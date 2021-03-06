# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160814205639) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "recipe_id",  null: false
    t.integer  "user_id",    null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["recipe_id"], name: "index_comments_on_recipe_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "follows", force: :cascade do |t|
    t.integer  "leader_id",   null: false
    t.integer  "follower_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "follows", ["follower_id"], name: "index_follows_on_follower", using: :btree
  add_index "follows", ["leader_id", "follower_id"], name: "index_follows_on_leader_and_follower", unique: true, using: :btree
  add_index "follows", ["leader_id"], name: "index_follows_on_leader", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "recipe_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "likes", ["recipe_id"], name: "index_likes_on_recipe", using: :btree
  add_index "likes", ["user_id", "recipe_id"], name: "index_likes_on_user_and_recipe", unique: true, using: :btree
  add_index "likes", ["user_id"], name: "index_likes_on_user", using: :btree

  create_table "recipes", force: :cascade do |t|
    t.string   "title",            null: false
    t.text     "description",      null: false
    t.text     "ingredients",      null: false
    t.text     "instructions",     null: false
    t.integer  "cook_time"
    t.integer  "oven_temp"
    t.string   "image_url"
    t.integer  "user_id",          null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "parent_recipe_id"
    t.boolean  "published"
  end

  add_index "recipes", ["user_id"], name: "index_recipes_on_user_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id",     null: false
    t.integer  "recipe_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "taggings", ["recipe_id"], name: "index_taggings_on_recipe", using: :btree
  add_index "taggings", ["tag_id", "recipe_id"], name: "index_taggings_on_tag_and_recipe", unique: true, using: :btree
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "image_url"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
