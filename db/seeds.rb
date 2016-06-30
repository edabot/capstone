# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!({username: "guest", password:"guestguest"})

User.create!({username: "Anna", password:"foodiumclone"})
User.create!({username: "Beth", password:"foodiumclone"})
User.create!({username: "Charlie", password:"foodiumclone"})
User.create!({username: "Douglas", password:"foodiumclone"})
User.create!({username: "Ernest", password:"foodiumclone"})
User.create!({username: "Fran", password:"foodiumclone"})
User.create!({username: "Gerald", password:"foodiumclone"})
User.create!({username: "Helen", password:"foodiumclone"})
User.create!({username: "Isaac", password:"foodiumclone"})


Recipe.create!({title: "Best Chocolate Chip Cookies",
                description: "Crisp edges, chewy middles.",
                ingredients: "1 cup butter, softened 1 cup white sugar 1 cup packed brown sugar 2 eggs 2 teaspoons vanilla extract 3 cups all-purpose flour 1 teaspoon baking soda 2 teaspoons hot water 1/2 teaspoon salt 2 cups semisweet chocolate chips 1 cup chopped walnuts",
                instructions: "Preheat oven to 350 degrees F (175 degrees C).
Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.
Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.",
                user_id: 1,
                image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/c_crop,h_320,q_80,w_620,y_76/v1467244899/Screen_Shot_2016-06-29_at_5.00.23_PM_tmrzqo.jpg"
                })

Recipe.create!({title: "Apple Pie",
                description: "The taste of fall",
                ingredients: "1 cup butter, softened 1 cup white sugar 1 cup packed brown sugar 2 eggs 2 teaspoons vanilla extract 3 cups all-purpose flour 1 teaspoon baking soda 2 teaspoons hot water 1/2 teaspoon salt 2 cups semisweet chocolate chips 1 cup chopped walnuts",
                instructions: "Preheat oven to 350 degrees F (175 degrees C).
Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.
Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.",
                user_id: 2,
                image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/c_scale,w_620/v1467245003/Screen_Shot_2016-06-29_at_5.02.55_PM_s3d4pk.jpg"
                })

Recipe.create!({title: "Strawberry Shortcake",
                description: "Small and wonderful",
                ingredients: "1 cup butter, softened 1 cup white sugar 1 cup packed brown sugar 2 eggs 2 teaspoons vanilla extract 3 cups all-purpose flour 1 teaspoon baking soda 2 teaspoons hot water 1/2 teaspoon salt 2 cups semisweet chocolate chips 1 cup chopped walnuts",
                instructions: "Preheat oven to 350 degrees F (175 degrees C).
Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.
Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.",
                user_id: 1,
                image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/c_scale,w_620/v1467244899/Screen_Shot_2016-06-29_at_5.00.06_PM_sa8gxm.jpg"
                })
