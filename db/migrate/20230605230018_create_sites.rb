class CreateSites < ActiveRecord::Migration[7.0]
  def change
    create_table :sites do |t|
      t.string :name
      t.string :institution
      t.string :identificator
      t.string :reference
      t.text :notes
      t.float :min
      t.float :max
      t.float :mean
      t.float :median
      t.float :sd
      t.decimal :lat, precision: 12, scale: 9
      t.decimal :long, precision: 12, scale: 9

      t.timestamps
    end
  end
end
