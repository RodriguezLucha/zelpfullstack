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

ActiveRecord::Schema.define(version: 2019_03_06_200633) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "restaurant_styles", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.integer "style_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id", "style_id"], name: "index_restaurant_styles_on_restaurant_id_and_style_id", unique: true
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "website"
    t.float "price_range", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "restaurant_id"
    t.integer "user_id"
    t.integer "num_stars"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["restaurant_id", "user_id"], name: "index_reviews_on_restaurant_id_and_user_id", unique: true
  end

  create_table "styles", force: :cascade do |t|
    t.string "style", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["style"], name: "index_styles_on_style", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
