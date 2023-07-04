# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_06_05_230018) do
  create_table "sites", charset: "latin1", force: :cascade do |t|
    t.string "name"
    t.string "institution"
    t.string "identificator"
    t.string "reference"
    t.text "notes"
    t.float "min"
    t.float "max"
    t.float "mean"
    t.float "median"
    t.float "sd"
    t.decimal "lat", precision: 12, scale: 9
    t.decimal "long", precision: 12, scale: 9
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
