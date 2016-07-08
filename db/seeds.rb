
User.create!(username: "guest", password:"guestguest",
  image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467761852/profileg.png")

User.create!({username: "Anna", password:"foodfood",
  image_url:"http://res.cloudinary.com/de7jh2mw5/image/upload/v1467756979/profile01.png"})
User.create!({username: "Beth", password:"foodfood",
  image_url:"http://res.cloudinary.com/de7jh2mw5/image/upload/v1467756979/profile04.png"})
User.create!({username: "Charlie", password:"foodfood",
  image_url:"http://res.cloudinary.com/de7jh2mw5/image/upload/v1467756979/profile02.png"})
User.create!({username: "Douglas", password:"foodfood",
  image_url:"http://res.cloudinary.com/de7jh2mw5/image/upload/v1467756979/profile03.png"})
User.create!({username: "Ernest", password:"foodfood",
  image_url:"http://res.cloudinary.com/de7jh2mw5/image/upload/v1467756979/profile05.png"})
User.create!({username: "Fran", password:"foodfood",
  image_url:"http://res.cloudinary.com/de7jh2mw5/image/upload/v1467756979/profile06.png"})
User.create!({username: "Gerald", password:"foodfood",
  image_url:"http://res.cloudinary.com/de7jh2mw5/image/upload/v1467756979/profile07.png"})
User.create!({username: "Helen", password:"foodfood",
  image_url:"http://res.cloudinary.com/de7jh2mw5/image/upload/v1467756979/profile08.png"})
User.create!({username: "Isaac", password:"foodfood",
  image_url:"http://res.cloudinary.com/de7jh2mw5/image/upload/v1467756979/profile09.png"})


tags = %w(appetizer BBQ cake pastry cookie baking dessert pie pasta
          breakfast dessert healthy quick vegetarian chicken picnic)

tags.each { |tag| Tag.create!({name: tag}) }

Tagging.create!(tag_id: 5, recipe_id: 1)
Tagging.create!(tag_id: 6, recipe_id: 1)
Tagging.create!(tag_id: 7, recipe_id: 1)
Tagging.create!(tag_id: 7, recipe_id: 2)
Tagging.create!(tag_id: 8, recipe_id: 2)
Tagging.create!(tag_id: 7, recipe_id: 3)
Tagging.create!(tag_id: 2, recipe_id: 4)
Tagging.create!(tag_id: 2, recipe_id: 6)
Tagging.create!(tag_id: 2, recipe_id: 7)
Tagging.create!(tag_id: 2, recipe_id: 5)
Tagging.create!(tag_id: 10, recipe_id: 8)
Tagging.create!(tag_id: 14, recipe_id: 9)
Tagging.create!(tag_id: 14, recipe_id: 10)
Tagging.create!(tag_id: 14, recipe_id: 11)


Comment.create!(user_id: 1, recipe_id: 1, body: "delicious!")
Comment.create!(user_id: 2, recipe_id: 1, body: "sooooo good!")
Comment.create!(user_id: 3, recipe_id: 1, body: "this looks amazing!")
Comment.create!(user_id: 1, recipe_id: 2, body: "I'm making this tomorrow!")
Comment.create!(user_id: 2, recipe_id: 2, body: "wonderful!")

Like.create!(user_id: 5, recipe_id: 1)
Like.create!(user_id: 5, recipe_id: 2)
Like.create!(user_id: 5, recipe_id: 3)
Like.create!(user_id: 2, recipe_id: 2)
Like.create!(user_id: 3, recipe_id: 2)
Like.create!(user_id: 4, recipe_id: 3)

Recipe.create!({title: "Best Chocolate Chip Cookies",
                description: "Crisp edges, chewy middles.",
                ingredients: "lkjlk",
                instructions: "<h2>Ingredients</h2>\n<ul>\n  <li>1 cup butter, softened</li>\n  <li>1 cup white sugar&nbsp;</li>\n  <li>1 cup packed brown sugar&nbsp;</li>\n  <li>2 eggs&nbsp;</li>\n  <li>2 teaspoons vanilla extract&nbsp;</li>\n  <li>3 cups all-purpose flour&nbsp;</li>\n  <li>1 teaspoon baking soda&nbsp;</li>\n  <li>2 teaspoons hot water&nbsp;</li>\n  <li>1/2 teaspoon salt&nbsp;</li>\n  <li>2 cups semisweet chocolate chips&nbsp;</li>\n  <li>1 cup chopped walnuts</li>\n</ul>\n<h2>Instructions</h2>\n<p>Preheat oven to 350 degrees F (175 degrees C). Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.</p>",
                user_id: 8,
                image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467740851/Screen_Shot_2016-07-05_at_10.47.09_AM_q9c4an.png"
                })

Recipe.create!({title: "Apple Pie",
                description: "The taste of fall",
                ingredients: "1 cup butter, softened 1 cup white sugar 1 cup packed brown sugar 2 eggs 2 teaspoons vanilla extract 3 cups all-purpose flour 1 teaspoon baking soda 2 teaspoons hot water 1/2 teaspoon salt 2 cups semisweet chocolate chips 1 cup chopped walnuts",
                instructions: "<h2>Ingredients</h2>\n<ul>\n  <li>1 cup butter, softened</li>\n  <li>1 cup white sugar&nbsp;</li>\n  <li>1 cup packed brown sugar&nbsp;</li>\n  <li>2 eggs&nbsp;</li>\n  <li>2 teaspoons vanilla extract&nbsp;</li>\n  <li>3 cups all-purpose flour&nbsp;</li>\n  <li>1 teaspoon baking soda&nbsp;</li>\n  <li>2 teaspoons hot water&nbsp;</li>\n  <li>1/2 teaspoon salt&nbsp;</li>\n  <li>2 cups semisweet chocolate chips&nbsp;</li>\n  <li>1 cup chopped walnuts</li>\n</ul>\n<h2>Instructions</h2>\n<p>Preheat oven to 350 degrees F (175 degrees C). Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.</p>",
                user_id: 2,
                image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467245003/Screen_Shot_2016-06-29_at_5.02.55_PM_s3d4pk.png"
                })

Recipe.create!({title: "Strawberry Shortcake",
                description: "Small and wonderful",
                ingredients: "1 cup butter, softened 1 cup white sugar 1 cup packed brown sugar 2 eggs 2 teaspoons vanilla extract 3 cups all-purpose flour 1 teaspoon baking soda 2 teaspoons hot water 1/2 teaspoon salt 2 cups semisweet chocolate chips 1 cup chopped walnuts",
                instructions: "<h2>Ingredients</h2>\n<ul>\n  <li>1 cup butter, softened</li>\n  <li>1 cup white sugar&nbsp;</li>\n  <li>1 cup packed brown sugar&nbsp;</li>\n  <li>2 eggs&nbsp;</li>\n  <li>2 teaspoons vanilla extract&nbsp;</li>\n  <li>3 cups all-purpose flour&nbsp;</li>\n  <li>1 teaspoon baking soda&nbsp;</li>\n  <li>2 teaspoons hot water&nbsp;</li>\n  <li>1/2 teaspoon salt&nbsp;</li>\n  <li>2 cups semisweet chocolate chips&nbsp;</li>\n  <li>1 cup chopped walnuts</li>\n</ul>\n<h2>Instructions</h2>\n<p>Preheat oven to 350 degrees F (175 degrees C). Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.</p>",

                user_id: 3,
                image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467244899/Screen_Shot_2016-06-29_at_5.00.06_PM_sa8gxm.png"
                })
Recipe.create!({ title: "Ranch Burger",
 description:
  "Ralph Lauren's signature burger. At his Chicago restaurant, they use a mix of chuck, brisket, and short rib. If you have an awesome butcher, ask him or her to give you a blend, but you'll get great results with chuck alone.",
 ingredients:
  "Ralph's Special Sauce:\n1/2 cup mayonnaise (preferably Hellmann's or Best Foods)\n1/3 cup ketchup (preferably Heinz)\n2 tablespoons sweet relish\n1 tablespoon finely chopped cornichons\n1 tablespoon finely chopped red onion\n1 teaspoon Worcestershire sauce\n1/2 teaspoon garlic powder\n1/2 teaspoon onion powder\n1/4 teaspoon hot sauce (preferably Tabasco)\nKosher salt, freshly ground pepper\nBurgers:\n3 pounds ground beef chuck (20% fat)\nKosher salt\n8 ounces clothbound cheddar (such as Cabot), thinly sliced\n8 sesame buns, toasted\n16 slices bacon, cooked\nGreen leaf lettuce, sliced tomato, sliced red onion, and sliced pickles (for serving)",
  instructions:
  "<h2>Ingredients</h2>\n<p><strong>Ralph's Special Sauce:&nbsp;</strong></p>\n<ul>\n  <li>1/2 cup mayonnaise (preferably Hellmann's or Best Foods)&nbsp;</li>\n  <li>1/3 cup ketchup (preferably Heinz)&nbsp;</li>\n  <li>2 tablespoons sweet relish&nbsp;</li>\n  <li>1 tablespoon finely chopped cornichons&nbsp;</li>\n  <li>1 tablespoon finely chopped red onion&nbsp;</li>\n  <li>1 teaspoon Worcestershire sauce&nbsp;</li>\n  <li>1/2 teaspoon garlic powder&nbsp;</li>\n  <li>1/2 teaspoon onion powder&nbsp;</li>\n  <li>1/4 teaspoon hot sauce (preferably Tabasco)&nbsp;</li>\n  <li>Kosher salt</li>\n  <li>freshly ground pepper&nbsp;</li>\n</ul>\n<p><strong>Burgers</strong>:</p>\n<ul>\n  <li>3 pounds ground beef chuck (20% fat)&nbsp;</li>\n  <li>Kosher salt&nbsp;</li>\n  <li>8 ounces clothbound cheddar (such as Cabot), thinly sliced&nbsp;</li>\n  <li>8 sesame buns, toasted&nbsp;</li>\n  <li>16 slices bacon, cooked&nbsp;</li>\n  <li>Green leaf lettuce, sliced tomato, sliced red onion, and sliced pickles (for serving)</li>\n</ul>\n<h2>Instructions</h2>\n<p><strong>Ralph's Special Sauce:</strong> Mix mayonnaise, ketchup, relish, cornichons, onion, Worcestershire sauce, garlic powder, onion powder, and hot sauce in a small bowl; season sauce with salt and pepper. Do Ahead. Sauce can be made 2 days ahead. Cover and chill. <br>\n<strong>Burgers:</strong> Prepare grill for medium-high heat. Divide beef into 8 portions (about 6 ounces each). Working with 1 portion at a time, cup your hands around the meat and begin to gently shape it into a round patty, being careful not to pack the meat too tightly. Lightly press down on patty to flatten, then press a slight indentation into the center with your thumb (this will prevent patties from bulging when cooked). Generously season both sides of patties with salt and grill 5 minutes. Turn and top with cheese. Cover grill and cook until cheese is melted and patties are medium-rare, about 5 minutes more. Transfer to a platter and let rest 5 minutes. Build burgers with buns, patties, bacon, lettuce, tomato, onion, pickles, and special sauce.</p>",
   image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467693246/bmkqiyjskp8gz6lnmbrt.jpg",
 user_id: 4})
Recipe.create!({ title: "Grilled Split Lobster",
 description: "Splitting lobsters in half makes them easier to grill—and eat.",
 ingredients:
  "2 (1 1/2-pounds) live lobsters\n2 tablespoons oil\nSalt\nPepper\nButter, hot sauce, lemon wedges, for serving",
 instructions:
  "<h2>Ingredients</h2>\n<ul>\n  <li>2 (1 1/2-pounds) live lobsters</li>\n  <li>2 tablespoons oil</li>\n  <li>Salt</li>\n  <li>Pepper</li>\n  <li>Butter, hot sauce, lemon wedges, for serving</li>\n</ul>\n<h2>Instructions</h2>\n<p>Prepare grill for medium-high heat; oil grate. Chill two 1 1/2-pounds live lobsters in freezer 15 minutes (this will slow down their nervous system—helpful for what comes next). Working one at a time, transfer to a cutting board, belly side down, with head facing you. Using a kitchen towel, hold tail (it shouldn't be very active now) and, starting where the tail meets the body, bisect body and head lengthwise in one fell swoop. Turn lobster around and cut lengthwise through tail. Remove any tomalley or eggs (reserving, if you'd like).</p>\n<p><br></p>\n\n  Immediately rub cut side of lobsters with 2 tablespoons oil total; season with salt and pepper. Grill, cut side down, pressing claws against grill, until meat is nearly cooked through, 6–8 minutes. Turn and grill until shells are lightly charred and meat is cooked through (tail meat will look opaque and be firm), about 3 minutes. Remove lobsters from grill and serve with melted butter, hot sauce, and lemon wedges for squeezing over.\n",
  image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467693467/gb26eji2tp93ulqgnafd.jpg",
 user_id: 5})

 Recipe.create!({ title: "Sweet and Spicy Ribs",
 description:
  "These meaty ribs are purposely precooked until very tender but not yet falling off the bone so they don't shred when it's time to grill them.",
 ingredients:
  "3/4 cup (packed) light brown sugar\n1/4 cup smoked paprika\n2 tablespoons cayenne pepper\n2 tablespoons garlic powder\n3 tablespoons kosher salt, plus more\n2 St. Louis-style pork ribs (3–4 pounds each)\n1/2 cup (1 stick) unsalted butter\n1/2 cup apple cider vinegar\nVegetable oil",
  instructions:
  "<h2>Ingredients</h2>\n<ul>\n  <li>3/4 cup (packed) light brown sugar</li>\n  <li>1/4 cup smoked paprika</li>\n  <li>2 tablespoons cayenne pepper</li>\n  <li>2 tablespoons garlic powder</li>\n  <li>3 tablespoons kosher salt, plus more</li>\n  <li>2 St. Louis-style pork ribs (3–4 pounds each)</li>\n  <li>1/2 cup (1 stick) unsalted butter</li>\n  <li>1/2 cup apple cider vinegar</li>\n  <li>Vegetable oil</li>\n</ul>\n<h2>Instructions</h2>\n<p>Preheat oven to 325°F. Combine brown sugar, paprika, cayenne, garlic powder, and 3 tablespoons salt in a small bowl; set aside 1/4 cup spice mixture.</p>\n<p><br></p>\n<p>Pat ribs dry with paper towels and rub with remaining spice mixture, massaging into crevices. Wrap each rack in a double layer of foil, crimping edges to seal tightly. Place each foil packet on a rimmed baking sheet and bake until meat is fork-tender at the thickest part but not falling off the bone, 2–3 hours. Let cool.</p>\n<p><br></p>\n<p>Tear open a corner of each foil packet and carefully pour juices from ribs into a large heatproof measuring cup. Let juices settle, then spoon fat from surface and discard.</p>\n<p><br></p>\n<p>Heat butter in a medium saucepan over medium, stirring often, until it foams, then browns (do not burn), 5–8 minutes. Add juices from ribs and 1/4 cup reserved spice mixture and bring to a simmer. Cook until reduced by one-third, 15–20 minutes. Remove sauce from heat, add vinegar, and season with salt.</p>\n<p><br></p>\n<p>Prepare grill for medium-high heat; oil grate. Remove ribs from foil and grill, basting with sauce and turning occasionally, until charred in spots, 5–7 minutes. Transfer to a cutting board and let rest 10 minutes. Slice between ribs and serve with remaining sauce.</p>\n<p><br></p>\n<p><strong>Do Ahead</strong></p>\n<p>Ribs can be baked 1 day ahead; let cool in foil, then chill. Bring to room temperature before grilling. Sauce can be made 1 day ahead; cover and chill. Reheat over low.</p>",
  image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467693589/sock3aowllzvvu5jfucw.jpg",
 user_id: 6})

Recipe.create!({ title: "Insanity Burger",
 description:
  "Competition for the best burger in London has gone mad. Some burgers are gourmet and piled high with toppings, w
hereas others are thinner, simpler, wrapped in paper, steamy and sloppy. All I can say is my insanity burger is goi
ng to be right up there—the method is almost ritualistic in what it requires you to do to get close to burger perfe
ction. I've also used the brilliant technique of brushing the burgers with mustard and a dash of Tabasco Chipotle s
auce as they cook to build up an incredible gnarly layer of seasoning.",
 ingredients:
  "1 3/4 lbs ground chuck steak\nOlive oil\n1 large red onion\n1 splash of white wine vinegar\n2 large gherkins\n4 sesame-topped brioche burger buns\n4–8 slices of smoked bacon\n4 teaspoons yellow mustard\nTabasco Chipotle sauce\n4 thin slices of Red Leicester cheese\n4 teaspoons tomato ketchup\nBurger Sauce:\n1/4 of an iceberg lettuce\n2 heaping tablespoons mayo\n1 heaping tablespoon tomato ketchup\n1 teaspoon Tabasco Chipotle sauce\n1 teaspoon Worcestershire sauce\noptional: 1 teaspoon brandy or bourbon",
  instructions:
   "<h2>Ingredients</h2>\n<ul>\n  <li>1 3/4 lbs ground chuck steak</li>\n  <li>Olive oil</li>\n  <li>1 large red onion</li>\n  <li>1 splash of white wine vinegar</li>\n  <li>2 large gherkins</li>\n  <li>4 sesame-topped brioche burger buns</li>\n  <li>4–8 slices of smoked bacon</li>\n  <li>4 teaspoons yellow mustard</li>\n  <li>Tabasco Chipotle sauce</li>\n  <li>4 thin slices of Red Leicester cheese</li>\n  <li>4 teaspoons tomato ketchup</li>\n</ul>\n<p><strong>Burger Sauce:</strong></p>\n<ul>\n  <li>1/4 of an iceberg lettuce</li>\n  <li>2 heaping tablespoons mayo</li>\n  <li>1 heaping tablespoon tomato ketchup</li>\n  <li>1 teaspoon Tabasco Chipotle sauce</li>\n  <li>1 teaspoon Worcestershire sauce</li>\n  <li>optional: 1 teaspoon brandy or bourbon</li>\n</ul>\n<h2>Instructions</h2>\n<p>For the best burger, go to your butcher and ask them to grind 1 3/4 lbs of chuck steak for you. This cut has a really good balance of fat and flavorsome meat. Divide it into 4 and, with wet hands, roll each piece into a ball, then press into flat patties roughly 5 inches wide and about 3/4 inch wider than your buns. Place on an oiled plate and chill in the fridge. Next, finely slice the red onion, then dress in a bowl with the vinegar and a pinch of sea salt. Slice the gherkins and halve the buns. Finely chop the lettuce and mix with the rest of the burger sauce ingredients in a bowl, then season to taste.</p>\n<p><br></p>\n<p>I like to cook only 2 burgers at a time to achieve perfection, so get two pans on the go—a large non-stick frying pan on a high heat for your burgers and another on a medium heat for the bacon. Pat your burgers with oil and season them with salt and pepper. Put 2 burgers into the first pan, pressing down on them with a slotted spatula, then put half the bacon into the other pan. After 1 minute, flip the burgers and brush each cooked side with a 1/2 teaspoon of mustard and a dash of Tabasco. After another minute, flip onto the mustard side and brush again with another 1/2 teaspoon of mustard and a second dash of Tabasco on the other side. Cook for 1 more minute, by which point you can place some crispy bacon on top of each burger with a slice of cheese. Add a tiny splash of water to the pan and place a heatproof bowl over the burgers to melt the cheese—30 seconds should do it. At the same time, toast 2 split buns in the bacon fat in the other pan until lightly golden. Repeat with the remaining 2 burgers.</p>\n<p><br></p>\n<p>To build each burger, add a quarter of the burger sauce to the bun base, then top with a cheesy bacon burger, a quarter of the onions, and gherkins. Rub the bun top with a teaspoon of ketchup, then gently press together. As the burger rests, juices will soak into the bun, so serve right away, which is great, or for an extra-naughty experience, wrap each one in parchment paper, then give it a minute to go gorgeous and sloppy.</p>",
    image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467693701/unwzw0hpzttqz3ixsrbn.jpg",
 user_id: 4})

Recipe.create!({title: "Diner-Style Buttermilk Pancakes",
 description:
  "These pancakes are extra fluffy thanks to a shot of seltzer. Their large size is classic for diners, but you can make smaller, easier-to-flip pancakes by scooping 1/4-cupfuls of batter onto your griddle.",
 ingredients:
  "2 cups all-purpose flour\n3 tablespoons sugar\n1 1/4 teaspoons baking powder\n1 1/4 teaspoons baking soda\n1 1/4 teaspoons kosher salt\n2 large eggs\n1 3/4 cups buttermilk\n1/2 cup cold seltzer water or club soda\n1 teaspoon vanilla extract\n3 tablespoons unsalted butter, melted, plus more\nPure maple syrup (for serving)",
  instructions:
  "<h2>Ingredients</h2>\n<ul>\n  <li>2 cups all-purpose flour</li>\n  <li>3 tablespoons sugar</li>\n  <li>1 1/4 teaspoons baking powder</li>\n  <li>1 1/4 teaspoons baking soda</li>\n  <li>1 1/4 teaspoons kosher salt</li>\n  <li>2 large eggs</li>\n  <li>1 3/4 cups buttermilk</li>\n  <li>1/2 cup cold seltzer water or club soda</li>\n  <li>1 teaspoon vanilla extract</li>\n  <li>3 tablespoons unsalted butter, melted, plus more</li>\n  <li>Pure maple syrup (for serving)</li>\n</ul>\n<h2>Instructions</h2>\n<p>Whisk flour, sugar, baking powder, baking soda, and salt in a large bowl. Using a fork, beat eggs, buttermilk, seltzer, vanilla, and 3 Tbsp. melted butter in a medium bowl to incorporate eggs. Add egg mixture to dry ingredients and whisk to combine (batter will be slightly lumpy).</p>\n<p><br></p>\n<p>Heat a large griddle or 2 cast-iron or nonstick skillets over medium; brush with butter. Working in batches, scoop 1/2-cupfuls of batter onto griddle; cook until bubbles form on the surface and pop and the underside is golden brown, 2 1/2–3 minutes. Flip and continue to cook until golden brown on the bottom, 2–2 1/2 minutes more. Transfer pancakes to plates or a platter and brush tops with butter. Serve with maple syrup alongside.</p>\n<p><br></p>\n<p><em>Cooks' Note: To feed a larger group, double the recipe and keep pancakes warm in a 250°F oven between batches. If you don't have a griddle or 2 skillets, use 1 skillet to cook the pancakes.</em></p>",
  image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467694381/lj9ymdlqwqhkcbcodmbd.jpg",
 user_id: 9})

Recipe.create!({ title: "Bean Salad with Lemon and Herbs",
 description: "salads",
 ingredients:
  "2 cups fresh cooked shell beans (such as cannellini or cranberry)\n1 14-ounce can cannellini beans or chickpeas\n6 ounces green beans (trimmed, cut into 1\" pieces)\n1/4 cup fresh parsley leaves with tender stems\n1/4 cup olive oil\n3 tablespoons chopped fresh chives\n2 tablespoons chopped capers\n1 tablespoon finely grated lemon zest\n2 tablespoons lemon juice\n1/2 teaspoon Aleppo pepper or 1/4 teaspoon crushed red pepper flakes\nSalt\nPepper",
  instructions:
   "<h2>Ingredients</h2>\n<ul>\n  <li>2 cups fresh cooked shell beans (such as cannellini or cranberry)</li>\n  <li>1 14-ounce can cannellini beans or chickpeas</li>\n  <li>6 ounces green beans (trimmed, cut into 1\" pieces)</li>\n  <li>1/4 cup fresh parsley leaves with tender stems</li>\n  <li>1/4 cup olive oil</li>\n  <li>3 tablespoons chopped fresh chives</li>\n  <li>2 tablespoons chopped capers</li>\n  <li>1 tablespoon finely grated lemon zest</li>\n  <li>2 tablespoons lemon juice</li>\n  <li>1/2 teaspoon Aleppo pepper or 1/4 teaspoon crushed red pepper flakes</li>\n  <li>Salt</li>\n  <li>Pepper</li>\n</ul>\n<h2>Instructions</h2>\n<p>Toss 2 cups fresh cooked shell beans (such as cannellini or cranberry) or one 14-ounce can cannellini beans or chickpeas, rinsed, 6 ounces green beans (trimmed, cut into 1\" pieces), 1/4 cup fresh parsley leaves with tender stems, 1/4 cup olive oil, 3 tablespoons chopped fresh chives, 2 tablespoons chopped capers, 1 tablespoon finely grated lemon zest, 2 tablespoons lemon juice, and 1/2 teaspoon Aleppo pepper or 1/4 teaspoon crushed red pepper flakes in a large bowl; season with salt and pepper.</p>",
   image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467694474/lap92jm7ltejj0upudy5.jpg",
 user_id: 10})

 Recipe.create!({
   title: "Beer-Can Cabbage Sandwich",
description:
 "Beer-Can Chicken, step aside. Cabbage becomes the star of any backyard barbecue with this awesome beer-steaming–plus–grilling technique. ",
ingredients:
 "1 large purple cabbage (about 3 1/2 pounds)\n2 tablespoons vegetable oil\n1/2 teaspoon kosher salt, plus more\n1/4 teaspoon freshly ground black pepper, plus more\n1 (12-ounce) can pale lager\n2 cups homemade or store-bought barbecue sauce (preferably Kraft Original Barbecue Sauce), divided\n1/2 large white onion, cut into 1/2\" rings\n1/4 cup mayonnaise\n2 tablespoons apple cider vinegar\n1/4 teaspoon honey\n1 medium carrot (about 6 ounces), coarsely grated using the grater disk on a food processor or the largest holes on a box grater\n1/4 cup finely chopped red onion\n6 seeded Kaiser rolls or sturdy hamburger buns\n12 slices cheddar cheese\nSliced pickled jalapeños (for serving)",
 instructions:
   "<h2>Ingredients</h2>\n<ul>\n  1 large purple cabbage (about 3 1/2 pounds)\n  2 tablespoons vegetable oil\n  1/2 teaspoon kosher salt, plus more\n  1/4 teaspoon freshly ground black pepper, plus more\n  1 (12-ounce) can pale lager\n  2 cups homemade or store-bought barbecue sauce (preferably Kraft Original Barbecue Sauce), divided\n  1/2 large white onion, cut into 1/2\" rings\n  1/4 cup mayonnaise\n  2 tablespoons apple cider vinegar\n  1/4 teaspoon honey\n  1 medium carrot (about 6 ounces), coarsely grated using the grater disk on a food processor or the largest holes on a box grater\n  1/4 cup finely chopped red onion\n  6 seeded Kaiser rolls or sturdy hamburger buns\n  12 slices cheddar cheese\n  Sliced pickled jalapeños (for serving)\n</ul>\n<h2>Instructions</h2>\n<p>Prepare a grill for medium-high heat. Cut a 3x3\" square around core of cabbage at the base. Carefully remove core with knife. Using knife and a spoon, create a 3\"–deep cavity in cabbage, big enough to hold a beer can. Discard core but reserve leftover cabbage from hollowing out cavity. Using a brush, coat cabbage with oil, then season generously with salt and pepper.</p>\n\n  <br>\n  Pour out (or drink) half of the beer. Place beer can in cavity of cabbage so cabbage sits upright. Transfer to grill. Using brush, generously coat cabbage with 3 Tbsp. barbecue sauce. Cover grill and cook cabbage, brushing with sauce every 15 minutes, until outer leaves are crispy and dark brown and cabbage is cooked through and tender when pierced with a paring knife, 45–50 minutes total. During the last 5 minutes of cooking, grill white onion rings until charred.\n  <br>\n  Meanwhile, whisk mayonnaise, vinegar, honey, and remaining 1/2 tsp. salt and 1/4 tsp. pepper in a medium bowl. Thinly slice reserved cabbage. Add to bowl with dressing along with carrot and red onion; toss to combine.\n  <br>\n  Remove cabbage from grill and discard can. Let cool slightly. Cut grilled cabbage in half lengthwise, then slice each half crosswise into 3/4\" strips. Coarsely chop white onion rings and toss with cabbage in a medium bowl with remaining 1 1/4 cups barbecue sauce (you should have about 6 cups barbecued cabbage).\n  <br>\n  Halve rolls and grill until toasted, about 30 seconds. Arrange 1 cup barbecued cabbage on each bottom bun. Top each with 2 slices cheese, 1/4 cup cabbage slaw, and pickled jalapeños, if using. Top with top buns.\n  <br>\n  <strong>Do Ahead</strong>\n  Barbecued cabbage and coleslaw can be made 3 days ahead; cover separately and chill. Reheat gently in a covered pot on the stovetop or in the microwave.\n",
   image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467695865/w8xvmfduh684zs9nmroh.jpg",
user_id: 10,
   })

   Recipe.create!({
     title: "Crunchy Veg Bowl with Warm Peanut Sauce",
description: "A warm, sultry peanut sauce makes even bean sprouts feel indulgent.",
ingredients:
 "For the sauce:\n2 red or green Thai chiles, chopped\n1 garlic clove, grated\n1 cup creamy peanut butter\n3/4 cup unsweetened coconut milk\n2 tablespoons dark brown sugar\n2 tablespoons fresh lime juice\n2 tablespoons soy sauce\n2 teaspoons fish sauce\nKosher salt\nFor the salad:\n4 large eggs, room temperature\n1/4 head of Napa cabbage, thinly sliced\n3 scallions, thinly sliced\n1 golden beet, scrubbed, cut into matchsticks\n1 celery stalk, thinly sliced on a diagonal\n1 Persian cucumber, halved lengthwise, thinly sliced crosswise\n1 large handful of bean sprouts\n1 cup coarsely chopped cilantro\n1/3 cup torn mint leaves\nKosher salt\n1/3 cup unsalted, toasted peanuts, crushed\n4 cups warm cooked brown rice",
 instructions:
  "<h2>Ingredients</h2>\n<p><strong>For the sauce:</strong></p>\n<ul>\n  <li>2 red or green Thai chiles, chopped</li>\n  <li>1 garlic clove, grated</li>\n  <li>1 cup creamy peanut butter</li>\n  <li>3/4 cup unsweetened coconut milk</li>\n  <li>2 tablespoons dark brown sugar</li>\n  <li>2 tablespoons fresh lime juice</li>\n  <li>2 tablespoons soy sauce</li>\n  <li>2 teaspoons fish sauce</li>\n  <li>Kosher salt</li>\n</ul>\n<p><strong>For the salad:</strong></p>\n<ul>\n  <li>4 large eggs, room temperature</li>\n  <li>1/4 head of Napa cabbage, thinly sliced</li>\n  <li>3 scallions, thinly sliced</li>\n  <li>1 golden beet, scrubbed, cut into matchsticks</li>\n  <li>1 celery stalk, thinly sliced on a diagonal</li>\n  <li>1 Persian cucumber, halved lengthwise, thinly sliced crosswise</li>\n  <li>1 large handful of bean sprouts</li>\n  <li>1 cup coarsely chopped cilantro</li>\n  <li>1/3 cup torn mint leaves</li>\n  <li>Kosher salt</li>\n  <li>1/3 cup unsalted, toasted peanuts, crushed</li>\n  <li>4 cups warm cooked brown rice</li>\n</ul>\n<h2>Instructions</h2>\n<p><strong>Make the sauce</strong></p>\n<p>Pulse chiles, garlic, peanut butter, coconut milk, brown sugar, lime juice, soy sauce, and fish sauce in a blender until smooth. Transfer peanut sauce to a small saucepan and add 1/4 cup water (if too thick, add a splash or so of water as needed). Heat over medium-low, whisking often, until smooth and hot, about 5 minutes; season with salt. Keep warm over low heat, whisking occasionally.</p>\n<p><br></p>\n<p><strong>Make the salad:</strong></p>\n<p>Cook eggs in a large saucepan of boiling water 7 minutes (whites will be set and yolks still slightly soft). Drain; transfer eggs to a bowl of ice water and chill until cold. Drain and peel; set aside.</p>\n<p><br></p>\n<p>Toss cabbage, scallions, beet, celery, cucumber, sprouts, cilantro, and mint in a large bowl to combine; season with salt. Top with peanuts. \u2029</p>\n<p><br></p>\n<p>Serve salad with brown rice and eggs, drizzled with some peanut sauce, with more sauce on the side. \u2029</p>\n<p><br></p>\n<p><strong>Do Ahead</strong></p>\n<p>Sauce can be made 3 days ahead. Cover and chill. Reheat in a small saucepan over medium-low, whisking often, until warm.</p>",
  image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467696004/yokji28u5lqhgqrfj9jq.jpg",
user_id: 10,
     })

cookie_instructions = "<h2>Ingredients</h2>\n<ul>\n  <li>1 cup butter, softened</li>\n  <li>1 cup white sugar&nbsp;</li>\n  <li>1 cup packed brown sugar&nbsp;</li>\n  <li>2 eggs&nbsp;</li>\n  <li>2 teaspoons vanilla extract&nbsp;</li>\n  <li>3 cups all-purpose flour&nbsp;</li>\n  <li>1 teaspoon baking soda&nbsp;</li>\n  <li>2 teaspoons hot water&nbsp;</li>\n  <li>1/2 teaspoon salt&nbsp;</li>\n  <li>2 cups semisweet chocolate chips&nbsp;</li>\n  <li>1 cup chopped walnuts</li>\n</ul>\n<h2>Instructions</h2>\n<p>Preheat oven to 350 degrees F (175 degrees C). Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.</p>",
cloudinary_prefix = "http://res.cloudinary.com/de7jh2mw5/image/upload/v1468002021/"

Recipe.create!({
    title: "melty chocolate truffle cookies",
    description: "Slightly undercook these mouthwatering morsels for a molten effect.",
    ingredients: "null",
    image_url: cloudinary_prefix + "cookie01.jpg",
    instructions: cookie_instructions,
    user_id: 2
  })
Tagging.create!(tag_id: 5, recipe_id: 12)

Recipe.create!({
    title: "mini black and white cookies",
    description: "This is a miniature version of a New York favorite — a cakey cookie with sweet half-moons of vanilla and chocolate icing.",
    ingredients: "null",
    image_url: cloudinary_prefix + "cookie02.jpg",
    instructions: cookie_instructions,
    user_id: 2
  })
Tagging.create!(tag_id: 5, recipe_id: 13)

Recipe.create!({
    title: "candy cane-chocolate cookies",
    description: "These truffle-like cookies dipped in crushed candy are as fun to make as they are to eat.",
    ingredients: "null",
    image_url: cloudinary_prefix + "cookie03.jpg",
    instructions: cookie_instructions,
    user_id: 3
  })
Tagging.create!(tag_id: 5, recipe_id: 14)

Recipe.create!({
    title: "chocolate brownie cookies",
    description: "If a fudgy brownie and chewy chocolate chip cookie had a baby, it would be this decadent creation.",
    ingredients: "null",
    image_url: cloudinary_prefix + "cookie04.jpg",
    instructions: cookie_instructions,
    user_id: 3
  })
Tagging.create!(tag_id: 5, recipe_id: 15)

Recipe.create!({
    title: "spice cookies",
    description: "These are very loosely inspired by duvshanyot, or Pfeffernüsse. They are actually more closely related to an Italian spice cookie and are hugely popular on the sweet counter at Ottolenghi over Easter and Christmas. ",
    ingredients: "null",
    image_url: cloudinary_prefix + "cookie05.jpg",
    instructions: cookie_instructions,
    user_id: 4
  })
Tagging.create!(tag_id: 5, recipe_id: 16)

Recipe.create!({
    title: "chewy molasses cookies",
    description: "You know that cookie with the slightly crisp edges, chewy center, and magical ability to stay fresh for days? That's the sweet, sassy molasses talking. Lightly spiced, addictively chewy, and unapologetically molasses-y, this is our favorite version yet of the classic holiday cookie.",
    ingredients: "null",
    image_url: cloudinary_prefix + "cookie06.jpg",
    instructions: cookie_instructions,
    user_id: 4
  })
Tagging.create!(tag_id: 5, recipe_id: 17)

Recipe.create!({
    title: "bacon-fat gingersnaps",
    description: "A modern, edgy take on a classic. They are truly remarkable, with a robust and smoky undertone that sets them apart from other gingersnaps",
    ingredients: "null",
    image_url: cloudinary_prefix + "cookie07.jpg",
    instructions: cookie_instructions,
    user_id: 5
  })
Tagging.create!(tag_id: 5, recipe_id: 18)
