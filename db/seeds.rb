
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
                instructions: "<h2>Ingredients</h2><ul>  <li>1 cup butter, softened</li>  <li>1 cup white sugar&nbsp;</li>  <li>1 cup packed brown sugar&nbsp;</li>  <li>2 eggs&nbsp;</li>  <li>2 teaspoons vanilla extract&nbsp;</li>  <li>3 cups all-purpose flour&nbsp;</li>  <li>1 teaspoon baking soda&nbsp;</li>  <li>2 teaspoons hot water&nbsp;</li>  <li>1/2 teaspoon salt&nbsp;</li>  <li>2 cups semisweet chocolate chips&nbsp;</li>  <li>1 cup chopped walnuts</li></ul><h2>Instructions</h2><p>Preheat oven to 350 degrees F (175 degrees C). Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.</p>",
                user_id: 8,
                image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467740851/Screen_Shot_2016-07-05_at_10.47.09_AM_q9c4an.png"
                })

Recipe.create!({title: "Apple Pie",
                description: "The taste of fall",
                ingredients: "1 cup butter, softened 1 cup white sugar 1 cup packed brown sugar 2 eggs 2 teaspoons vanilla extract 3 cups all-purpose flour 1 teaspoon baking soda 2 teaspoons hot water 1/2 teaspoon salt 2 cups semisweet chocolate chips 1 cup chopped walnuts",
                instructions: "<h2>Ingredients</h2><ul>  <li>1 cup butter, softened</li>  <li>1 cup white sugar&nbsp;</li>  <li>1 cup packed brown sugar&nbsp;</li>  <li>2 eggs&nbsp;</li>  <li>2 teaspoons vanilla extract&nbsp;</li>  <li>3 cups all-purpose flour&nbsp;</li>  <li>1 teaspoon baking soda&nbsp;</li>  <li>2 teaspoons hot water&nbsp;</li>  <li>1/2 teaspoon salt&nbsp;</li>  <li>2 cups semisweet chocolate chips&nbsp;</li>  <li>1 cup chopped walnuts</li></ul><h2>Instructions</h2><p>Preheat oven to 350 degrees F (175 degrees C). Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.</p>",
                user_id: 2,
                image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467245003/Screen_Shot_2016-06-29_at_5.02.55_PM_s3d4pk.png"
                })

Recipe.create!({title: "Strawberry Shortcake",
                description: "Small and wonderful",
                ingredients: "1 cup butter, softened 1 cup white sugar 1 cup packed brown sugar 2 eggs 2 teaspoons vanilla extract 3 cups all-purpose flour 1 teaspoon baking soda 2 teaspoons hot water 1/2 teaspoon salt 2 cups semisweet chocolate chips 1 cup chopped walnuts",
                instructions: "<h2>Ingredients</h2><ul>  <li>1 cup butter, softened</li>  <li>1 cup white sugar&nbsp;</li>  <li>1 cup packed brown sugar&nbsp;</li>  <li>2 eggs&nbsp;</li>  <li>2 teaspoons vanilla extract&nbsp;</li>  <li>3 cups all-purpose flour&nbsp;</li>  <li>1 teaspoon baking soda&nbsp;</li>  <li>2 teaspoons hot water&nbsp;</li>  <li>1/2 teaspoon salt&nbsp;</li>  <li>2 cups semisweet chocolate chips&nbsp;</li>  <li>1 cup chopped walnuts</li></ul><h2>Instructions</h2><p>Preheat oven to 350 degrees F (175 degrees C). Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.</p>",

                user_id: 3,
                image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467244899/Screen_Shot_2016-06-29_at_5.00.06_PM_sa8gxm.png"
                })
Recipe.create!({ title: "Ranch Burger",
 description:
  "Ralph Lauren's signature burger. At his Chicago restaurant, they use a mix of chuck, brisket, and short rib. If you have an awesome butcher, ask him or her to give you a blend, but you'll get great results with chuck alone.",
 ingredients:
  "Ralph's Special Sauce:1/2 cup mayonnaise (preferably Hellmann's or Best Foods)1/3 cup ketchup (preferably Heinz)2 tablespoons sweet relish1 tablespoon finely chopped cornichons1 tablespoon finely chopped red onion1 teaspoon Worcestershire sauce1/2 teaspoon garlic powder1/2 teaspoon onion powder1/4 teaspoon hot sauce (preferably Tabasco)Kosher salt, freshly ground pepperBurgers:3 pounds ground beef chuck (20% fat)Kosher salt8 ounces clothbound cheddar (such as Cabot), thinly sliced8 sesame buns, toasted16 slices bacon, cookedGreen leaf lettuce, sliced tomato, sliced red onion, and sliced pickles (for serving)",
  instructions:
  "<h2>Ingredients</h2><p><strong>Ralph's Special Sauce:&nbsp;</strong></p><ul>  <li>1/2 cup mayonnaise (preferably Hellmann's or Best Foods)&nbsp;</li>  <li>1/3 cup ketchup (preferably Heinz)&nbsp;</li>  <li>2 tablespoons sweet relish&nbsp;</li>  <li>1 tablespoon finely chopped cornichons&nbsp;</li>  <li>1 tablespoon finely chopped red onion&nbsp;</li>  <li>1 teaspoon Worcestershire sauce&nbsp;</li>  <li>1/2 teaspoon garlic powder&nbsp;</li>  <li>1/2 teaspoon onion powder&nbsp;</li>  <li>1/4 teaspoon hot sauce (preferably Tabasco)&nbsp;</li>  <li>Kosher salt</li>  <li>freshly ground pepper&nbsp;</li></ul><p><strong>Burgers</strong>:</p><ul>  <li>3 pounds ground beef chuck (20% fat)&nbsp;</li>  <li>Kosher salt&nbsp;</li>  <li>8 ounces clothbound cheddar (such as Cabot), thinly sliced&nbsp;</li>  <li>8 sesame buns, toasted&nbsp;</li>  <li>16 slices bacon, cooked&nbsp;</li>  <li>Green leaf lettuce, sliced tomato, sliced red onion, and sliced pickles (for serving)</li></ul><h2>Instructions</h2><p><strong>Ralph's Special Sauce:</strong> Mix mayonnaise, ketchup, relish, cornichons, onion, Worcestershire sauce, garlic powder, onion powder, and hot sauce in a small bowl; season sauce with salt and pepper. Do Ahead. Sauce can be made 2 days ahead. Cover and chill. <br><strong>Burgers:</strong> Prepare grill for medium-high heat. Divide beef into 8 portions (about 6 ounces each). Working with 1 portion at a time, cup your hands around the meat and begin to gently shape it into a round patty, being careful not to pack the meat too tightly. Lightly press down on patty to flatten, then press a slight indentation into the center with your thumb (this will prevent patties from bulging when cooked). Generously season both sides of patties with salt and grill 5 minutes. Turn and top with cheese. Cover grill and cook until cheese is melted and patties are medium-rare, about 5 minutes more. Transfer to a platter and let rest 5 minutes. Build burgers with buns, patties, bacon, lettuce, tomato, onion, pickles, and special sauce.</p>",
   image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467693246/bmkqiyjskp8gz6lnmbrt.jpg",
 user_id: 4})
Recipe.create!({ title: "Grilled Split Lobster",
 description: "Splitting lobsters in half makes them easier to grill—and eat.",
 ingredients:
  "2 (1 1/2-pounds) live lobsters2 tablespoons oilSaltPepperButter, hot sauce, lemon wedges, for serving",
 instructions:
  "<h2>Ingredients</h2><ul>  <li>2 (1 1/2-pounds) live lobsters</li>  <li>2 tablespoons oil</li>  <li>Salt</li>  <li>Pepper</li>  <li>Butter, hot sauce, lemon wedges, for serving</li></ul><h2>Instructions</h2><p>Prepare grill for medium-high heat; oil grate. Chill two 1 1/2-pounds live lobsters in freezer 15 minutes (this will slow down their nervous system—helpful for what comes next). Working one at a time, transfer to a cutting board, belly side down, with head facing you. Using a kitchen towel, hold tail (it shouldn't be very active now) and, starting where the tail meets the body, bisect body and head lengthwise in one fell swoop. Turn lobster around and cut lengthwise through tail. Remove any tomalley or eggs (reserving, if you'd like).</p><p><br></p>  Immediately rub cut side of lobsters with 2 tablespoons oil total; season with salt and pepper. Grill, cut side down, pressing claws against grill, until meat is nearly cooked through, 6–8 minutes. Turn and grill until shells are lightly charred and meat is cooked through (tail meat will look opaque and be firm), about 3 minutes. Remove lobsters from grill and serve with melted butter, hot sauce, and lemon wedges for squeezing over.",
  image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467693467/gb26eji2tp93ulqgnafd.jpg",
 user_id: 5})

 Recipe.create!({ title: "Sweet and Spicy Ribs",
 description:
  "These meaty ribs are purposely precooked until very tender but not yet falling off the bone so they don't shred when it's time to grill them.",
 ingredients:
  "3/4 cup (packed) light brown sugar1/4 cup smoked paprika2 tablespoons cayenne pepper2 tablespoons garlic powder3 tablespoons kosher salt, plus more2 St. Louis-style pork ribs (3–4 pounds each)1/2 cup (1 stick) unsalted butter1/2 cup apple cider vinegarVegetable oil",
  instructions:
  "<h2>Ingredients</h2><ul>  <li>3/4 cup (packed) light brown sugar</li>  <li>1/4 cup smoked paprika</li>  <li>2 tablespoons cayenne pepper</li>  <li>2 tablespoons garlic powder</li>  <li>3 tablespoons kosher salt, plus more</li>  <li>2 St. Louis-style pork ribs (3–4 pounds each)</li>  <li>1/2 cup (1 stick) unsalted butter</li>  <li>1/2 cup apple cider vinegar</li>  <li>Vegetable oil</li></ul><h2>Instructions</h2><p>Preheat oven to 325°F. Combine brown sugar, paprika, cayenne, garlic powder, and 3 tablespoons salt in a small bowl; set aside 1/4 cup spice mixture.</p><p><br></p><p>Pat ribs dry with paper towels and rub with remaining spice mixture, massaging into crevices. Wrap each rack in a double layer of foil, crimping edges to seal tightly. Place each foil packet on a rimmed baking sheet and bake until meat is fork-tender at the thickest part but not falling off the bone, 2–3 hours. Let cool.</p><p><br></p><p>Tear open a corner of each foil packet and carefully pour juices from ribs into a large heatproof measuring cup. Let juices settle, then spoon fat from surface and discard.</p><p><br></p><p>Heat butter in a medium saucepan over medium, stirring often, until it foams, then browns (do not burn), 5–8 minutes. Add juices from ribs and 1/4 cup reserved spice mixture and bring to a simmer. Cook until reduced by one-third, 15–20 minutes. Remove sauce from heat, add vinegar, and season with salt.</p><p><br></p><p>Prepare grill for medium-high heat; oil grate. Remove ribs from foil and grill, basting with sauce and turning occasionally, until charred in spots, 5–7 minutes. Transfer to a cutting board and let rest 10 minutes. Slice between ribs and serve with remaining sauce.</p><p><br></p><p><strong>Do Ahead</strong></p><p>Ribs can be baked 1 day ahead; let cool in foil, then chill. Bring to room temperature before grilling. Sauce can be made 1 day ahead; cover and chill. Reheat over low.</p>",
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
  "1 3/4 lbs ground chuck steakOlive oil1 large red onion1 splash of white wine vinegar2 large gherkins4 sesame-topped brioche burger buns4–8 slices of smoked bacon4 teaspoons yellow mustardTabasco Chipotle sauce4 thin slices of Red Leicester cheese4 teaspoons tomato ketchupBurger Sauce:1/4 of an iceberg lettuce2 heaping tablespoons mayo1 heaping tablespoon tomato ketchup1 teaspoon Tabasco Chipotle sauce1 teaspoon Worcestershire sauceoptional: 1 teaspoon brandy or bourbon",
  instructions:
   "<h2>Ingredients</h2><ul>  <li>1 3/4 lbs ground chuck steak</li>  <li>Olive oil</li>  <li>1 large red onion</li>  <li>1 splash of white wine vinegar</li>  <li>2 large gherkins</li>  <li>4 sesame-topped brioche burger buns</li>  <li>4–8 slices of smoked bacon</li>  <li>4 teaspoons yellow mustard</li>  <li>Tabasco Chipotle sauce</li>  <li>4 thin slices of Red Leicester cheese</li>  <li>4 teaspoons tomato ketchup</li></ul><p><strong>Burger Sauce:</strong></p><ul>  <li>1/4 of an iceberg lettuce</li>  <li>2 heaping tablespoons mayo</li>  <li>1 heaping tablespoon tomato ketchup</li>  <li>1 teaspoon Tabasco Chipotle sauce</li>  <li>1 teaspoon Worcestershire sauce</li>  <li>optional: 1 teaspoon brandy or bourbon</li></ul><h2>Instructions</h2><p>For the best burger, go to your butcher and ask them to grind 1 3/4 lbs of chuck steak for you. This cut has a really good balance of fat and flavorsome meat. Divide it into 4 and, with wet hands, roll each piece into a ball, then press into flat patties roughly 5 inches wide and about 3/4 inch wider than your buns. Place on an oiled plate and chill in the fridge. Next, finely slice the red onion, then dress in a bowl with the vinegar and a pinch of sea salt. Slice the gherkins and halve the buns. Finely chop the lettuce and mix with the rest of the burger sauce ingredients in a bowl, then season to taste.</p><p><br></p><p>I like to cook only 2 burgers at a time to achieve perfection, so get two pans on the go—a large non-stick frying pan on a high heat for your burgers and another on a medium heat for the bacon. Pat your burgers with oil and season them with salt and pepper. Put 2 burgers into the first pan, pressing down on them with a slotted spatula, then put half the bacon into the other pan. After 1 minute, flip the burgers and brush each cooked side with a 1/2 teaspoon of mustard and a dash of Tabasco. After another minute, flip onto the mustard side and brush again with another 1/2 teaspoon of mustard and a second dash of Tabasco on the other side. Cook for 1 more minute, by which point you can place some crispy bacon on top of each burger with a slice of cheese. Add a tiny splash of water to the pan and place a heatproof bowl over the burgers to melt the cheese—30 seconds should do it. At the same time, toast 2 split buns in the bacon fat in the other pan until lightly golden. Repeat with the remaining 2 burgers.</p><p><br></p><p>To build each burger, add a quarter of the burger sauce to the bun base, then top with a cheesy bacon burger, a quarter of the onions, and gherkins. Rub the bun top with a teaspoon of ketchup, then gently press together. As the burger rests, juices will soak into the bun, so serve right away, which is great, or for an extra-naughty experience, wrap each one in parchment paper, then give it a minute to go gorgeous and sloppy.</p>",
    image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467693701/unwzw0hpzttqz3ixsrbn.jpg",
 user_id: 4})

Recipe.create!({title: "Diner-Style Buttermilk Pancakes",
 description:
  "These pancakes are extra fluffy thanks to a shot of seltzer. Their large size is classic for diners, but you can make smaller, easier-to-flip pancakes by scooping 1/4-cupfuls of batter onto your griddle.",
 ingredients:
  "2 cups all-purpose flour3 tablespoons sugar1 1/4 teaspoons baking powder1 1/4 teaspoons baking soda1 1/4 teaspoons kosher salt2 large eggs1 3/4 cups buttermilk1/2 cup cold seltzer water or club soda1 teaspoon vanilla extract3 tablespoons unsalted butter, melted, plus morePure maple syrup (for serving)",
  instructions:
  "<h2>Ingredients</h2><ul>  <li>2 cups all-purpose flour</li>  <li>3 tablespoons sugar</li>  <li>1 1/4 teaspoons baking powder</li>  <li>1 1/4 teaspoons baking soda</li>  <li>1 1/4 teaspoons kosher salt</li>  <li>2 large eggs</li>  <li>1 3/4 cups buttermilk</li>  <li>1/2 cup cold seltzer water or club soda</li>  <li>1 teaspoon vanilla extract</li>  <li>3 tablespoons unsalted butter, melted, plus more</li>  <li>Pure maple syrup (for serving)</li></ul><h2>Instructions</h2><p>Whisk flour, sugar, baking powder, baking soda, and salt in a large bowl. Using a fork, beat eggs, buttermilk, seltzer, vanilla, and 3 Tbsp. melted butter in a medium bowl to incorporate eggs. Add egg mixture to dry ingredients and whisk to combine (batter will be slightly lumpy).</p><p><br></p><p>Heat a large griddle or 2 cast-iron or nonstick skillets over medium; brush with butter. Working in batches, scoop 1/2-cupfuls of batter onto griddle; cook until bubbles form on the surface and pop and the underside is golden brown, 2 1/2–3 minutes. Flip and continue to cook until golden brown on the bottom, 2–2 1/2 minutes more. Transfer pancakes to plates or a platter and brush tops with butter. Serve with maple syrup alongside.</p><p><br></p><p><em>Cooks' Note: To feed a larger group, double the recipe and keep pancakes warm in a 250°F oven between batches. If you don't have a griddle or 2 skillets, use 1 skillet to cook the pancakes.</em></p>",
  image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467694381/lj9ymdlqwqhkcbcodmbd.jpg",
 user_id: 9})

Recipe.create!({ title: "Bean Salad with Lemon and Herbs",
 description: "salads",
 ingredients:
  "2 cups fresh cooked shell beans (such as cannellini or cranberry)1 14-ounce can cannellini beans or chickpeas6 ounces green beans (trimmed, cut into 1\" pieces)1/4 cup fresh parsley leaves with tender stems1/4 cup olive oil3 tablespoons chopped fresh chives2 tablespoons chopped capers1 tablespoon finely grated lemon zest2 tablespoons lemon juice1/2 teaspoon Aleppo pepper or 1/4 teaspoon crushed red pepper flakesSaltPepper",
  instructions:
   "<h2>Ingredients</h2><ul>  <li>2 cups fresh cooked shell beans (such as cannellini or cranberry)</li>  <li>1 14-ounce can cannellini beans or chickpeas</li>  <li>6 ounces green beans (trimmed, cut into 1\" pieces)</li>  <li>1/4 cup fresh parsley leaves with tender stems</li>  <li>1/4 cup olive oil</li>  <li>3 tablespoons chopped fresh chives</li>  <li>2 tablespoons chopped capers</li>  <li>1 tablespoon finely grated lemon zest</li>  <li>2 tablespoons lemon juice</li>  <li>1/2 teaspoon Aleppo pepper or 1/4 teaspoon crushed red pepper flakes</li>  <li>Salt</li>  <li>Pepper</li></ul><h2>Instructions</h2><p>Toss 2 cups fresh cooked shell beans (such as cannellini or cranberry) or one 14-ounce can cannellini beans or chickpeas, rinsed, 6 ounces green beans (trimmed, cut into 1\" pieces), 1/4 cup fresh parsley leaves with tender stems, 1/4 cup olive oil, 3 tablespoons chopped fresh chives, 2 tablespoons chopped capers, 1 tablespoon finely grated lemon zest, 2 tablespoons lemon juice, and 1/2 teaspoon Aleppo pepper or 1/4 teaspoon crushed red pepper flakes in a large bowl; season with salt and pepper.</p>",
   image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467694474/lap92jm7ltejj0upudy5.jpg",
 user_id: 10})

 Recipe.create!({
   title: "Beer-Can Cabbage Sandwich",
description:
 "Beer-Can Chicken, step aside. Cabbage becomes the star of any backyard barbecue with this awesome beer-steaming–plus–grilling technique. ",
ingredients:
 "1 large purple cabbage (about 3 1/2 pounds)2 tablespoons vegetable oil1/2 teaspoon kosher salt, plus more1/4 teaspoon freshly ground black pepper, plus more1 (12-ounce) can pale lager2 cups homemade or store-bought barbecue sauce (preferably Kraft Original Barbecue Sauce), divided1/2 large white onion, cut into 1/2\" rings1/4 cup mayonnaise2 tablespoons apple cider vinegar1/4 teaspoon honey1 medium carrot (about 6 ounces), coarsely grated using the grater disk on a food processor or the largest holes on a box grater1/4 cup finely chopped red onion6 seeded Kaiser rolls or sturdy hamburger buns12 slices cheddar cheeseSliced pickled jalapeños (for serving)",
 instructions:
   "<h2>Ingredients</h2><ul>  1 large purple cabbage (about 3 1/2 pounds)  2 tablespoons vegetable oil  1/2 teaspoon kosher salt, plus more  1/4 teaspoon freshly ground black pepper, plus more  1 (12-ounce) can pale lager  2 cups homemade or store-bought barbecue sauce (preferably Kraft Original Barbecue Sauce), divided  1/2 large white onion, cut into 1/2\" rings  1/4 cup mayonnaise  2 tablespoons apple cider vinegar  1/4 teaspoon honey  1 medium carrot (about 6 ounces), coarsely grated using the grater disk on a food processor or the largest holes on a box grater  1/4 cup finely chopped red onion  6 seeded Kaiser rolls or sturdy hamburger buns  12 slices cheddar cheese  Sliced pickled jalapeños (for serving)</ul><h2>Instructions</h2><p>Prepare a grill for medium-high heat. Cut a 3x3\" square around core of cabbage at the base. Carefully remove core with knife. Using knife and a spoon, create a 3\"–deep cavity in cabbage, big enough to hold a beer can. Discard core but reserve leftover cabbage from hollowing out cavity. Using a brush, coat cabbage with oil, then season generously with salt and pepper.</p>  <br>  Pour out (or drink) half of the beer. Place beer can in cavity of cabbage so cabbage sits upright. Transfer to grill. Using brush, generously coat cabbage with 3 Tbsp. barbecue sauce. Cover grill and cook cabbage, brushing with sauce every 15 minutes, until outer leaves are crispy and dark brown and cabbage is cooked through and tender when pierced with a paring knife, 45–50 minutes total. During the last 5 minutes of cooking, grill white onion rings until charred.  <br>  Meanwhile, whisk mayonnaise, vinegar, honey, and remaining 1/2 tsp. salt and 1/4 tsp. pepper in a medium bowl. Thinly slice reserved cabbage. Add to bowl with dressing along with carrot and red onion; toss to combine.  <br>  Remove cabbage from grill and discard can. Let cool slightly. Cut grilled cabbage in half lengthwise, then slice each half crosswise into 3/4\" strips. Coarsely chop white onion rings and toss with cabbage in a medium bowl with remaining 1 1/4 cups barbecue sauce (you should have about 6 cups barbecued cabbage).  <br>  Halve rolls and grill until toasted, about 30 seconds. Arrange 1 cup barbecued cabbage on each bottom bun. Top each with 2 slices cheese, 1/4 cup cabbage slaw, and pickled jalapeños, if using. Top with top buns.  <br>  <strong>Do Ahead</strong>  Barbecued cabbage and coleslaw can be made 3 days ahead; cover separately and chill. Reheat gently in a covered pot on the stovetop or in the microwave.",
   image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467695865/w8xvmfduh684zs9nmroh.jpg",
user_id: 10,
   })

   Recipe.create!({
     title: "Crunchy Veg Bowl with Warm Peanut Sauce",
description: "A warm, sultry peanut sauce makes even bean sprouts feel indulgent.",
ingredients:
 "For the sauce:2 red or green Thai chiles, chopped1 garlic clove, grated1 cup creamy peanut butter3/4 cup unsweetened coconut milk2 tablespoons dark brown sugar2 tablespoons fresh lime juice2 tablespoons soy sauce2 teaspoons fish sauceKosher saltFor the salad:4 large eggs, room temperature1/4 head of Napa cabbage, thinly sliced3 scallions, thinly sliced1 golden beet, scrubbed, cut into matchsticks1 celery stalk, thinly sliced on a diagonal1 Persian cucumber, halved lengthwise, thinly sliced crosswise1 large handful of bean sprouts1 cup coarsely chopped cilantro1/3 cup torn mint leavesKosher salt1/3 cup unsalted, toasted peanuts, crushed4 cups warm cooked brown rice",
 instructions:
  "<h2>Ingredients</h2><p><strong>For the sauce:</strong></p><ul>  <li>2 red or green Thai chiles, chopped</li>  <li>1 garlic clove, grated</li>  <li>1 cup creamy peanut butter</li>  <li>3/4 cup unsweetened coconut milk</li>  <li>2 tablespoons dark brown sugar</li>  <li>2 tablespoons fresh lime juice</li>  <li>2 tablespoons soy sauce</li>  <li>2 teaspoons fish sauce</li>  <li>Kosher salt</li></ul><p><strong>For the salad:</strong></p><ul>  <li>4 large eggs, room temperature</li>  <li>1/4 head of Napa cabbage, thinly sliced</li>  <li>3 scallions, thinly sliced</li>  <li>1 golden beet, scrubbed, cut into matchsticks</li>  <li>1 celery stalk, thinly sliced on a diagonal</li>  <li>1 Persian cucumber, halved lengthwise, thinly sliced crosswise</li>  <li>1 large handful of bean sprouts</li>  <li>1 cup coarsely chopped cilantro</li>  <li>1/3 cup torn mint leaves</li>  <li>Kosher salt</li>  <li>1/3 cup unsalted, toasted peanuts, crushed</li>  <li>4 cups warm cooked brown rice</li></ul><h2>Instructions</h2><p><strong>Make the sauce</strong></p><p>Pulse chiles, garlic, peanut butter, coconut milk, brown sugar, lime juice, soy sauce, and fish sauce in a blender until smooth. Transfer peanut sauce to a small saucepan and add 1/4 cup water (if too thick, add a splash or so of water as needed). Heat over medium-low, whisking often, until smooth and hot, about 5 minutes; season with salt. Keep warm over low heat, whisking occasionally.</p><p><br></p><p><strong>Make the salad:</strong></p><p>Cook eggs in a large saucepan of boiling water 7 minutes (whites will be set and yolks still slightly soft). Drain; transfer eggs to a bowl of ice water and chill until cold. Drain and peel; set aside.</p><p><br></p><p>Toss cabbage, scallions, beet, celery, cucumber, sprouts, cilantro, and mint in a large bowl to combine; season with salt. Top with peanuts. \u2029</p><p><br></p><p>Serve salad with brown rice and eggs, drizzled with some peanut sauce, with more sauce on the side. \u2029</p><p><br></p><p><strong>Do Ahead</strong></p><p>Sauce can be made 3 days ahead. Cover and chill. Reheat in a small saucepan over medium-low, whisking often, until warm.</p>",
  image_url: "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467696004/yokji28u5lqhgqrfj9jq.jpg",
user_id: 10,
     })

cookie_instructions = "<h2>Ingredients</h2><ul>  <li>1 cup butter, softened</li>  <li>1 cup white sugar&nbsp;</li>  <li>1 cup packed brown sugar&nbsp;</li>  <li>2 eggs&nbsp;</li>  <li>2 teaspoons vanilla extract&nbsp;</li>  <li>3 cups all-purpose flour&nbsp;</li>  <li>1 teaspoon baking soda&nbsp;</li>  <li>2 teaspoons hot water&nbsp;</li>  <li>1/2 teaspoon salt&nbsp;</li>  <li>2 cups semisweet chocolate chips&nbsp;</li>  <li>1 cup chopped walnuts</li></ul><h2>Instructions</h2><p>Preheat oven to 350 degrees F (175 degrees C). Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.</p>"
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
