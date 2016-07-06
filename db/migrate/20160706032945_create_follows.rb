class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :leader_id, null: false
      t.integer :follower_id, null: false
      t.timestamps null: false
    end

    add_index :follows, [:leader_id, :follower_id], name: "index_follows_on_leader_and_follower", unique: true
    add_index :follows, :leader_id, name: "index_follows_on_leader"
    add_index :follows, :follower_id, name: "index_follows_on_follower"
  end
end
