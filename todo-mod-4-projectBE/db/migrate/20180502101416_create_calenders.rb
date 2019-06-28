class CreateCalenders < ActiveRecord::Migration[5.1]
  def change
    create_table :calenders do |t|
      t.string :name

      t.timestamps
    end
  end
end
