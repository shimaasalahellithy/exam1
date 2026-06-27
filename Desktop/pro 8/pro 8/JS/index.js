//* Array of Object 
var recipes = [
  {
    name: "Spaghetti Bolognese",
    desc: "Classic Italian pasta with rich meat sauce",
    image: "images/IMG-20251129-WA0020.jpg",
    prepTime: "15 min",
    cookTime: "45 min",
    servings: "3 people",
    review: "4.7 (512 reviews)",
    gategories: ["Easy", "Italian"],
    ingrediants: [
      "200g spaghetti",
      "250g minced beef",
      "1 onion chopped",
      "2 garlic cloves",
      "400g tomato sauce",
      "Olive oil",
      "Basil leaves"
    ],
    instructions: [
      "Boil spaghetti until al dente.",
      "Sauté onion and garlic in olive oil.",
      "Add minced beef and cook until browned.",
      "Add tomato sauce and simmer 30 minutes.",
      "Serve sauce over spaghetti, garnish with basil."
    ],
    tips: ["Use fresh basil", "Simmer longer for richer flavor"],
    nutrition: {
      calories: "620 kcal",
      protein: "35g",
      carbohydrates: "70g",
      fat: "20g",
      fiber: "5g",
      sodium: "890 mg"
    }
  },

  {
    name: "Chicken Alfredo",
    desc: "Creamy pasta with grilled chicken and parmesan",
    image: "images/IMG-20251129-WA0021.jpg",
    prepTime: "20 min",
    cookTime: "25 min",
    servings: "2 people",
    review: "4.8 (420 reviews)",
    gategories: ["Intermediate", "Italian"],
    ingrediants: [
      "200g fettuccine",
      "1 chicken breast",
      "1 cup heavy cream",
      "Parmesan cheese",
      "Butter",
      "Garlic"
    ],
    instructions: [
      "Cook fettuccine.",
      "Grill chicken and slice.",
      "Melt butter, add cream and garlic.",
      "Add parmesan and stir.",
      "Combine pasta and chicken with sauce."
    ],
    tips: ["Don’t overheat the cream", "Use fresh parmesan"],
    nutrition: {
      calories: "700 kcal",
      protein: "40g",
      carbohydrates: "65g",
      fat: "30g",
      fiber: "3g",
      sodium: "950 mg"
    }
  },

  {
    name: "Beef Tacos",
    desc: "Crispy tacos filled with seasoned beef and vegetables",
    image: "images/IMG-20251129-WA0023.jpg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "4 people",
    review: "4.6 (390 reviews)",
    gategories: ["Easy", "Mexican"],
    ingrediants: [
      "300g minced beef",
      "Taco shells",
      "Lettuce",
      "Cheddar cheese",
      "Tomatoes",
      "Taco seasoning"
    ],
    instructions: [
      "Cook beef with taco seasoning.",
      "Prepare lettuce and tomatoes.",
      "Fill taco shells with beef and veggies.",
      "Top with cheese."
    ],
    tips: ["Warm taco shells before serving"],
    nutrition: {
      calories: "480 kcal",
      protein: "28g",
      carbohydrates: "42g",
      fat: "20g",
      fiber: "4g",
      sodium: "780 mg"
    }
  },

  {
    name: "Caesar Salad",
    desc: "Fresh romaine lettuce with creamy Caesar dressing",
    image: "images/IMG-20251129-WA0025.jpg",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "2 people",
    review: "4.3 (220 reviews)",
    gategories: ["Easy", "Healthy"],
    ingrediants: [
      "Romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Caesar dressing"
    ],
    instructions: [
      "Chop lettuce.",
      "Add croutons and parmesan.",
      "Toss with dressing."
    ],
    tips: ["Add grilled chicken to increase protein"],
    nutrition: {
      calories: "220 kcal",
      protein: "6g",
      carbohydrates: "18g",
      fat: "14g",
      fiber: "3g",
      sodium: "310 mg"
    }
  },

  {
    name: "Margherita Pizza",
    desc: "Classic pizza with mozzarella and basil",
    image: "images/IMG-20251129-WA0026.jpg",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",
    review: "4.9 (580 reviews)",
    gategories: ["Intermediate", "Italian"],
    ingrediants: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil", "Olive oil"],
    instructions: [
      "Spread tomato sauce on dough.",
      "Add mozzarella slices.",
      "Bake 12–15 min.",
      "Top with basil and olive oil."
    ],
    tips: ["Use fresh mozzarella"],
    nutrition: {
      calories: "650 kcal",
      protein: "25g",
      carbohydrates: "80g",
      fat: "22g",
      fiber: "4g",
      sodium: "720 mg"
    }
  },

  {
    name: "Grilled Salmon",
    desc: "Perfectly grilled salmon with lemon and herbs",
    image: "images/IMG-20251129-WA0027.jpg",
    prepTime: "10 min",
    cookTime: "12 min",
    servings: "2 people",
    review: "4.8 (300 reviews)",
    gategories: ["Healthy", "Seafood"],
    ingrediants: ["2 salmon fillets", "Lemon", "Garlic", "Olive oil", "Parsley"],
    instructions: [
      "Season salmon.",
      "Grill 5–6 minutes per side.",
      "Serve with lemon slices."
    ],
    tips: ["Don't overcook salmon"],
    nutrition: {
      calories: "420 kcal",
      protein: "38g",
      carbohydrates: "3g",
      fat: "28g",
      fiber: "0g",
      sodium: "210 mg"
    }
  },

  {
    name: "Shrimp Fried Rice",
    desc: "Asian-style fried rice with shrimp and vegetables",
    image: "images/IMG-20251129-WA0029.jpg",
    prepTime: "10 min",
    cookTime: "10 min",
    servings: "3 people",
    review: "4.4 (260 reviews)",
    gategories: ["Asian", "Easy"],
    ingrediants: ["Cooked rice", "Shrimp", "Eggs", "Peas", "Carrots", "Soy sauce"],
    instructions: [
      "Scramble eggs.",
      "Add vegetables and shrimp.",
      "Add rice and soy sauce, stir fry."
    ],
    tips: ["Use cold rice for best texture"],
    nutrition: {
      calories: "520 kcal",
      protein: "28g",
      carbohydrates: "70g",
      fat: "12g",
      fiber: "4g",
      sodium: "900 mg"
    }
  },

  {
    name: "French Toast",
    desc: "Golden toast dipped in sweet egg mixture",
    image: "images/IMG-20251129-WA0031.jpg",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: "2 people",
    review: "4.5 (310 reviews)",
    gategories: ["Breakfast", "Sweet"],
    ingrediants: ["Bread", "Eggs", "Milk", "Sugar", "Cinnamon", "Butter"],
    instructions: [
      "Mix eggs, milk, cinnamon.",
      "Dip bread slices.",
      "Cook on buttered pan."
    ],
    tips: ["Use thick bread"],
    nutrition: {
      calories: "380 kcal",
      protein: "12g",
      carbohydrates: "45g",
      fat: "14g",
      fiber: "2g",
      sodium: "260 mg"
    }
  },

  {
    name: "Greek Salad",
    desc: "Fresh salad with feta and olives",
    image: "images/IMG-20251129-WA0033.jpg",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "2 people",
    review: "4.6 (210 reviews)",
    alertTitle : "Extended Preparation Time",
    alertDesc : "This recipe requires more than 45 minutes to prepare. Plan accordingly!",
    gategories: ["Healthy", "Mediterranean"],
    ingrediants: ["Tomatoes", "Cucumber", "Onion", "Feta", "Olives", "Olive oil"],
    instructions: ["Chop veggies", "Add feta and olives", "Drizzle olive oil"],
    tips: ["Use fresh tomatoes"],
    nutrition: {
      calories: "250 kcal",
      protein: "8g",
      carbohydrates: "12g",
      fat: "18g",
      fiber: "3g",
      sodium: "430 mg"
    }
  },

  {
    name: "Butter Chicken",
    desc: "Creamy Indian chicken curry with spices",
    image: "images/IMG-20251129-WA0034.jpg",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "3 people",
    review: "4.9 (700 reviews)",
    gategories: ["Indian", "Intermediate"],
    ingrediants: ["Chicken", "Tomato puree", "Cream", "Butter", "Garam masala"],
    instructions: [
      "Cook chicken in spices.",
      "Add tomato puree.",
      "Add cream and simmer."
    ],
    tips: ["Marinate chicken overnight"],
    nutrition: {
      calories: "680 kcal",
      protein: "36g",
      carbohydrates: "30g",
      fat: "48g",
      fiber: "4g",
      sodium: "980 mg"
    }
  },

  {
    name: "Sushi Rolls",
    desc: "Japanese rice rolls with fish and vegetables",
    image: "images/IMG-20251129-WA0035.jpg",
    prepTime: "30 min",
    cookTime: "0 min",
    servings: "2 people",
    review: "4.7 (500 reviews)",
    gategories: ["Asian", "Intermediate"],
    ingrediants: ["Sushi rice", "Nori", "Salmon", "Cucumber", "Avocado"],
    instructions: [
      "Prepare sushi rice.",
      "Place ingredients on nori.",
      "Roll tightly and slice."
    ],
    tips: ["Wet knife before slicing"],
    nutrition: {
      calories: "300 kcal",
      protein: "18g",
      carbohydrates: "40g",
      fat: "8g",
      fiber: "3g",
      sodium: "190 mg"
    }
  },

  {
    name: "Chocolate Cake",
    desc: "Soft chocolate cake with rich frosting",
    image: "images/IMG-20251129-WA0036.jpg",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    review: "4.8 (900 reviews)",
    gategories: ["Dessert", "Sweet"],
    ingrediants: [
      "Flour",
      "Cocoa powder",
      "Sugar",
      "Eggs",
      "Butter",
      "Milk"
    ],
    instructions: [
      "Mix dry ingredients.",
      "Add wet ingredients.",
      "Bake 30 minutes.",
      "Frost when cooled."
    ],
    tips: ["Use room temperature butter"],
    nutrition: {
      calories: "450 kcal",
      protein: "6g",
      carbohydrates: "60g",
      fat: "20g",
      fiber: "3g",
      sodium: "300 mg"
    }
  },
];


//! First Way with random number 


// Math.random() >> 0 - 1 >> 0.9999999 >> 0 - 0.9 * receipes.length >> 0.8 * 12


// function tryReceipe(){
//   var meal = Math.floor(Math.random() * recipes.length)
//   console.log(meal);

//   document.getElementById("recipeRating").innerHTML = recipes[meal].review;
//   document.getElementById("recipeImg").src = recipes[meal].image;
//   document.getElementById("prepTime").innerHTML = recipes[meal].prepTime;
//   document.getElementById("cookTime").innerHTML = recipes[meal].cookTime;
//   document.getElementById("servings").innerHTML = recipes[meal].servings;
//   document.getElementById("recipeLevel").innerHTML = recipes[meal].gategories[0];
//   document.getElementById("recipeCategory").innerHTML = recipes[meal].gategories[1];
//   document.getElementById("recipeTitle").innerHTML = recipes[meal].name;
//   document.getElementById("recipeDesc").innerHTML = recipes[meal].desc;
// }


//! Second Way with order number of index in array 
var num = 0;

//* Functions that execute when click on try button 
function tryReceipe(){

  // The First Way of display - dynamic
  document.getElementById("recipeRating").innerHTML = recipes[num].review;
  document.getElementById("recipeImg").src = recipes[num].image;
  document.getElementById("prepTime").innerHTML = recipes[num].prepTime;
  document.getElementById("cookTime").innerHTML = recipes[num].cookTime;
  document.getElementById("servings").innerHTML = recipes[num].servings;
  document.getElementById("recipeLevel").innerHTML = recipes[num].gategories[0];
  document.getElementById("recipeCategory").innerHTML = recipes[num].gategories[1];
  document.getElementById("recipeTitle").innerHTML = recipes[num].name;
  document.getElementById("recipeDesc").innerHTML = recipes[num].desc;


  //! Ingregients
  var ingredientHTML = " ";
  for(var i = 0 ; i < recipes[num].ingrediants.length ; i++){
    ingredientHTML += `
    <li id="li1OfTab" class="d-flex align-items-center justify-content-start column-gap-2">
            <div
              class="num-style rounded-circle d-flex justify-content-center align-items-center text-white fw-bold">
              ${i + 1}</div>
            <span class="text-muted" id="ing1text">${recipes[num].ingrediants[i]}</span>
    </li>
    `
  } 

  document.getElementById("ingredientsList").innerHTML = ingredientHTML;


  //! Instructions
  var instructionsHTML = " ";
  for(var i = 0 ; i < recipes[num].instructions.length ; i++){
    instructionsHTML += `
    
    <div class="d-flex justify-content-start align-items-center column-gap-3 mb-2 mb-md-4">
          <div
            class="rounded-4 num-style text-white fs-5 fw-bold d-flex align-items-center justify-content-center">
            ${i + 1}</div>
          <div class="pt-2 pt-md-0">
            <p class="text-muted m-0" id="instr1text">${recipes[num].instructions[i]}</p>
          </div>
    </div> 
    `
  }

  document.getElementById("instructionsList").innerHTML = instructionsHTML;


  //! Alert Logic 
  if(recipes[num].alertTitle && recipes[num].alertDesc){
    document.getElementById("alertTitle").innerHTML = recipes[num].alertTitle;
    document.getElementById("alertDesc").innerHTML = recipes[num].alertDesc;
    document.getElementById("warning").classList.remove("d-none");
  } else{
    document.getElementById("warning").classList.add("d-none");
  }


  num++

  if(num > recipes.length -1 ){
    num = 0;
  }

}



//! Another way to display and change data and make it dynamic
// var num = 0;

// function tryReceipe(){

//   console.log(recipes[num]);

//   // The Second Way of display - dynamic
//   // document.getElementById("rowData").innerHTML = 
//   // `
  
  
//   // <!--! Left Side-->
//   //         <div class="left-side p-0 position-relative col-lg-5">
//   //           <div
//   //             class="p-top bg-white px-3 py-2 rounded-5 d-flex align-items-center justify-content-center column-gap-2 position-absolute">
//   //             <i class="fa-solid fa-star text-warning"></i>
//   //             <!-- ---------1----------- -->
//   //             <span class="span-1" id="recipeRating">${recipes[num].review}</span></span>
//   //             <span class="span-2 text-muted" id="recipeReviews"></span>
//   //           </div>
//   //           <!-- ---------2----------- -->
//   //           <div class="image w-100 h-100">
//   //             <img class="w-100 h-100" id="recipeImg" src="${recipes[num].image}"
//   //               alt="Dinner Image" />
//   //           </div>
//   //           <div
//   //             class="bottom-info d-flex align-items-center justify-content-around rounded-4 px-3 py-2 px-lg-4 py-lg-3 position-absolute translate-middle-x start-50"
//   //             id="bottomInfo">
//   //             <div class="info text-center">
//   //               <i class="fa-solid fa-clock"></i>
//   //               <p class="p1-style text-muted p-0 m-0">Prep Time</p>
//   //               <!-- ---------3----------- -->
//   //               <p class="p2-style text-black fw-bolder p-0 m-0" id="prepTime">${recipes[num].prepTime}</p>
//   //             </div>
//   //             <div class="info text-center">
//   //               <i class="fa-solid fa-fire-burner"></i>
//   //               <p class="p1-style text-muted p-0 m-0">Cook Time</p>
//   //               <!-- ---------4----------- -->
//   //               <p class="p2-style text-black fw-bolder p-0 m-0" id="cookTime">${recipes[num].cookTime}</p>
//   //             </div>
//   //             <div class="info text-center">
//   //               <i class="fa-solid fa-users"></i>
//   //               <p class="p1-style text-muted p-0 m-0">Servings</p>
//   //               <!-- ---------5----------- -->
//   //               <p class="p2-style text-black fw-bolder p-0 m-0" id="servings">${recipes[num].servings}</p>
//   //             </div>
//   //           </div>
//   //         </div>
//   //         <!--! Right Side -->
//   //         <div class="right-side px-md-5  col-lg-7 overflow-y-auto">
//   //           <!-- text-top -->
//   //           <div class="pt-md-2 d-md-flex justify-content-between flex-row-reverse align-items-center">
//   //             <div class="icons-style row justify-content-end column-gap-2 m-0 ">
//   //               <span class=" d-flex align-items-center justify-content-center rounded-3"><i
//   //                   class="fa-solid fa-bookmark"></i></span>
//   //               <span class=" d-flex align-items-center justify-content-center rounded-3"><i
//   //                   class="fa-solid fa-share-nodes"></i></span>
//   //             </div>
//   //             <div>
//   //               <div class="text1-style mb-3">
//   //                 <span class="rounded-4 py-1 px-2 me-2" id="recipeLevel">${recipes[num].gategories[0]}</span>
//   //                 <span class="rounded-4 py-1 px-2" id="recipeCategory">${recipes[num].gategories[1]}</span>
//   //               </div>
//   //               <div class="text2-style">
//   //                 <h3 class="fw-bold" id="recipeTitle">${recipes[num].name}</h3>
//   //                 <p class="text-muted " id="recipeDesc">${recipes[num].desc}</p>
//   //               </div>
//   //             </div>
//   //           </div>

//   //           <!--! Warning Message -->
//   //           <div class="warning d-flex align-items-center justify-content-start column-gap-3 rounded-3 p-2 p-md-3"
//   //             id="warning">
//   //             <span><i class="fa-solid fa-triangle-exclamation"></i></span>
//   //             <div id="warningTextBlock">
//   //               <p class="m-0 text-style fw-bold" id="alertTitle">Extended Preparation Time</p>
//   //               <p class="m-0 text2-style" id="alertDesc">This recipe requires more than 45 minutes to prepare. Plan
//   //                 accordingly!</p>
//   //             </div>
//   //           </div>
//   //           <!-- pane-content -->
//   //           <div class="p-ul-style px-3  mt-4 mb-4 border-bottom">
//   //             <ul class="d-flex g-0 gap-0 justify-content-around nav-underline ul-style " id="pills-tab" role="tablist">
//   //               <li class="nav-item flex-fill d-flex justify-content-center align-items-center" role="presentation"
//   //                 id="liIngredients">
//   //                 <button class="nav-link w-100 pb-2 active" id="tabIngredients" data-bs-toggle="tab"
//   //                   data-bs-target="#pane-ingredients" type="button" role="tab" aria-controls="pane-ingredients"
//   //                   aria-selected="true">
//   //                   <i class="fa-solid fa-list-check"></i> Ingredients
//   //                 </button>
//   //               </li>
//   //               <li class="nav-item flex-fill d-flex justify-content-center align-items-center" role="presentation"
//   //                 id="liInstructions">
//   //                 <button class="nav-link w-100 pb-2" id="tabInstructions" data-bs-toggle="tab"
//   //                   data-bs-target="#pane-instructions" type="button" role="tab" aria-controls="pane-instructions"
//   //                   aria-selected="false">
//   //                   <i class="fa-solid fa-book-open"></i> Instructions
//   //                 </button>
//   //               </li>
//   //               <li class="nav-item flex-fill d-flex justify-content-center align-items-center" role="presentation"
//   //                 id="liNutrition">
//   //                 <button class="nav-link w-100 pb-2" id="tabNutrition" data-bs-toggle="tab"
//   //                   data-bs-target="#pane-nutrition" type="button" role="tab" aria-controls="pane-nutrition"
//   //                   aria-selected="false">
//   //                   <i class="fa-solid fa-chart-pie"></i> Nutrition
//   //                 </button>
//   //               </li>
//   //               <li class="nav-item flex-fill d-flex justify-content-center align-items-center" role="presentation"
//   //                 id="liChef">
//   //                 <button class="nav-link w-100 pb-2" id="tabChef" data-bs-toggle="tab" data-bs-target="#pane-chef"
//   //                   type="button" role="tab" aria-controls="pane-chef" aria-selected="false">
//   //                   <i class="fa-solid fa-lightbulb"></i> Chef's Tips
//   //                 </button>
//   //               </li>
//   //             </ul>
//   //           </div>
//   //           <!-- tab-content -->
//   //           <div class="tab-content overflow-y-auto" id="pane-tabContent">
//   //             <!-- Ingredients -->
//   //             <div class="tab-pane card1-style fade show active" id="pane-ingredients" role="tabpanel"
//   //               aria-labelledby="tabIngredients" tabindex="0">
//   //               <div class="parent p-4 rounded-4">
//   //                 <ul class="m-0" id="ingredientsList">
//   //                   <li id="li1OfTab" class="d-flex align-items-center justify-content-start column-gap-2">
//   //                     <div
//   //                       class="num-style rounded-circle d-flex justify-content-center align-items-center text-white fw-bold">
//   //                       1</div>
//   //                     <span class="text-muted" id="ing1text">Flours</span>
//   //                   </li>
//   //                   <li id="li2OfTab" class="d-flex align-items-center justify-content-start column-gap-2">
//   //                     <div
//   //                       class="num-style rounded-circle d-flex justify-content-center align-items-center text-white fw-bold">
//   //                       2</div>
//   //                     <span class="text-muted" id="ing2text">Lemon zest</span>
//   //                   </li>
//   //                   <li id="li3OfTab" class="d-flex align-items-center justify-content-start column-gap-2">
//   //                     <div
//   //                       class="num-style rounded-circle d-flex justify-content-center align-items-center text-white fw-bold">
//   //                       3</div>
//   //                     <span class="text-muted" id="ing3text">Eggs</span>
//   //                   </li>
//   //                   <li id="li4OfTab" class="d-flex align-items-center justify-content-start column-gap-2">
//   //                     <div
//   //                       class="num-style rounded-circle d-flex justify-content-center align-items-center text-white fw-bold">
//   //                       4</div>
//   //                     <span class="text-muted" id="ing4text">Sugar</span>
//   //                   </li>
//   //                   <li id="li5OfTab" class="d-flex align-items-center justify-content-start column-gap-2">
//   //                     <div
//   //                       class="num-style rounded-circle d-flex justify-content-center align-items-center text-white fw-bold">
//   //                       5</div>
//   //                     <span class="text-muted" id="ing5text">2Butter</span>
//   //                   </li>
//   //                   <li id="li6OfTab" class="d-flex align-items-center justify-content-start column-gap-2">
//   //                     <div
//   //                       class="num-style rounded-circle d-flex justify-content-center align-items-center text-white fw-bold">
//   //                       6</div>
//   //                     <span class="text-muted" id="ing6text">1 tablespoon palm sugar</span>
//   //                   </li>
//   //                   <li id="li7OfTab" class="d-flex align-items-center justify-content-start column-gap-2">
//   //                     <div
//   //                       class="num-style rounded-circle d-flex justify-content-center align-items-center text-white fw-bold">
//   //                       7</div>
//   //                     <span class="text-muted" id="ing7text">Bean sprouts</span>
//   //                   </li>
//   //                 </ul>
//   //               </div>
//   //             </div>
//   //             <!-- Instructions -->
//   //             <div class="tab-pane card2-style fade" id="pane-instructions" role="tabpanel"
//   //               aria-labelledby="tabInstructions" tabindex="0">
//   //               <div class="parent" id="instructionsList">
//   //                 <div class="d-flex justify-content-start align-items-center column-gap-3 mb-2 mb-md-4">
//   //                   <div
//   //                     class="rounded-4 num-style text-white fs-5 fw-bold d-flex align-items-center justify-content-center">
//   //                     1</div>
//   //                   <div class="pt-2 pt-md-0">
//   //                     <p class="text-muted m-0" id="instr1text">Mix ingredients</p>
//   //                   </div>
//   //                 </div>
//   //                 <div class="d-flex justify-content-start align-items-center column-gap-3 mb-2 mb-md-4">
//   //                   <div
//   //                     class="rounded-4 num-style text-white fs-5 fw-bold d-flex align-items-center justify-content-center">
//   //                     2</div>
//   //                   <div class="pt-2 pt-md-0">
//   //                     <p class="text-muted m-0" id="instr2text">Bake 25 min</p>
//   //                   </div>
//   //                 </div>
//   //                 <div class="d-flex justify-content-start align-items-center column-gap-3 mb-2 mb-md-4">
//   //                   <div
//   //                     class="rounded-4 num-style text-white fs-5 fw-bold d-flex align-items-center justify-content-center">
//   //                     3</div>
//   //                   <div class="pt-2 pt-md-0">
//   //                     <p class="text-muted m-0" id="instr3text">Add lemon glaze
//   //                     </p>
//   //                   </div>
//   //                 </div>
//   //                 <div class="d-flex justify-content-start align-items-center column-gap-3 mb-2 mb-md-4">
//   //                   <div
//   //                     class="rounded-4 num-style text-white fs-5 fw-bold d-flex align-items-center justify-content-center">
//   //                     4</div>
//   //                   <div class="pt-2 pt-md-0">
//   //                     <p class="text-muted m-0" id="instr4text">Cook shrimp until pink. Add noodles and sauce, toss for
//   //                       2-3 minutes.</p>
//   //                   </div>
//   //                 </div>
//   //                 <div class="d-flex justify-content-start align-items-center column-gap-3 mb-2 mb-md-4">
//   //                   <div
//   //                     class="rounded-4 num-style text-white fs-5 fw-bold d-flex align-items-center justify-content-center">
//   //                     5</div>
//   //                   <div class="pt-2 pt-md-0">
//   //                     <p class="text-muted m-0" id="instr5text">Add scrambled eggs and bean sprouts. Toss everything
//   //                       together.</p>
//   //                   </div>
//   //                 </div>
//   //                 <div class="d-flex justify-content-start align-items-center column-gap-3 mb-2 mb-md-4">
//   //                   <div
//   //                     class="rounded-4 num-style text-white fs-5 fw-bold d-flex align-items-center justify-content-center">
//   //                     6</div>
//   //                   <div class="pt-2 pt-md-0">
//   //                     <p class="text-muted m-0" id="instr6text">Serve topped with crushed peanuts, lime wedges, and
//   //                       cilantro.</p>
//   //                   </div>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //             <!-- Nutrition -->
//   //             <div class="tab-pane card3-style fade" id="pane-nutrition" role="tabpanel" aria-labelledby="tabNutrition"
//   //               tabindex="0">
//   //               <div class="parent row gap-3 p-4 m-0">
//   //                 <div
//   //                   class="lines line1-style d-flex align-items-center justify-content-between px-3 py-3 rounded-3 col-md-5 flex-fill">
//   //                   <div class="d-flex align-items-center column-gap-2">
//   //                     <div class="icon-style d-flex align-items-center justify-content-center rounded-3"><i
//   //                         class="fa-solid fa-fire"></i></div>
//   //                     <span class="text-muted span-style">Calories</span>
//   //                   </div>
//   //                   <span class="fw-bold span2-style" id="calories">540 kcal</span>
//   //                 </div>
//   //                 <div
//   //                   class="lines line2-style d-flex align-items-center justify-content-between px-3 py-3 rounded-3 col-md-5 flex-fill">
//   //                   <div class="d-flex align-items-center column-gap-2">
//   //                     <div class="icon-style d-flex align-items-center justify-content-center rounded-3"><i
//   //                         class="fa-solid fa-dumbbell"></i></div>
//   //                     <span class="text-muted span-style">Protein</span>
//   //                   </div>
//   //                   <span class="fw-bold span2-style" id="protein">32g</span>
//   //                 </div>
//   //                 <div
//   //                   class="lines line3-style d-flex align-items-center justify-content-between px-3 py-3 rounded-3 col-md-5 flex-fill">
//   //                   <div class="d-flex align-items-center column-gap-2">
//   //                     <div class="icon-style d-flex align-items-center justify-content-center rounded-3">
//   //                       <i class="fa-solid fa-wheat-awn"></i>
//   //                     </div>
//   //                     <span class="text-muted span-style">Carbohydrates</span>
//   //                   </div>
//   //                   <span class="fw-bold span2-style" id="carbs">62g</span>
//   //                 </div>
//   //                 <div
//   //                   class="lines line4-style d-flex align-items-center justify-content-between px-3 py-3 rounded-3 col-md-5 flex-fill">
//   //                   <div class="d-flex align-items-center column-gap-2">
//   //                     <div class="icon-style d-flex align-items-center justify-content-center rounded-3"><i
//   //                         class="fa-solid fa-droplet"></i></div>
//   //                     <span class="text-muted span-style">Fat</span>
//   //                   </div>
//   //                   <span class="fw-bold span2-style" id="fat">16g</span>
//   //                 </div>
//   //                 <div
//   //                   class="lines line5-style d-flex align-items-center justify-content-between px-3 py-3 rounded-3 col-md-5 flex-fill">
//   //                   <div class="d-flex align-items-center column-gap-2">
//   //                     <div class="icon-style d-flex align-items-center justify-content-center rounded-3">
//   //                       <i class="fa-solid fa-seedling"></i>
//   //                     </div>
//   //                     <span class="text-muted span-style">Fiber</span>
//   //                   </div>
//   //                   <span class="fw-bold span2-style" id="fiber">4g</span>
//   //                 </div>
//   //                 <div
//   //                   class="lines line6-style d-flex align-items-center justify-content-between px-3 py-3 rounded-3 col-md-5 flex-fill">
//   //                   <div class="d-flex align-items-center column-gap-2">
//   //                     <div class="icon-style d-flex align-items-center justify-content-center rounded-3"><i
//   //                         class="fa-solid fa-cube"></i></div>
//   //                     <span class="text-muted span-style">Sodium</span>
//   //                   </div>
//   //                   <span class="fw-bold span2-style" id="sodium">1120 mg</span>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //             <!-- Chef Tips -->
//   //             <div class="tab-pane card4-style fade" id="pane-chef" role="tabpanel" aria-labelledby="tabChef"
//   //               tabindex="0">
//   //               <div class="parent">
//   //                 <div class="d-flex align-items-center justify-content-start column-gap-3 rounded-4 mb-3 px-3 py-3">
//   //                   <span class="rounded-circle d-flex justify-content-center align-items-center"><i
//   //                       class="fa-solid fa-check"></i></span>
//   //                   <p class="text-muted" id="tip1Text">Don't oversoak noodles or they'll be mushy</p>
//   //                 </div>
//   //                 <div class="d-flex align-items-center justify-content-start column-gap-3 rounded-4 mb-3 px-3 py-3">
//   //                   <span class="rounded-circle d-flex justify-content-center align-items-center"><i
//   //                       class="fa-solid fa-check"></i></span>
//   //                   <p class="text-muted" id="tip2Text">Cook on high heat for authentic wok flavor</p>
//   //                 </div>
//   //                 <div class="d-flex align-items-center justify-content-start column-gap-3 rounded-4 mb-3 px-3 py-3">
//   //                   <span class="rounded-circle d-flex justify-content-center align-items-center"><i
//   //                       class="fa-solid fa-check"></i></span>
//   //                   <p class="text-muted" id="tip3Text">Balance sweet, sour, and salty flavors</p>
//   //                 </div>
//   //                 <div class="d-flex align-items-center justify-content-start column-gap-3 rounded-4 px-3 py-3">
//   //                   <span class="rounded-circle d-flex justify-content-center align-items-center"><i
//   //                       class="fa-solid fa-check"></i></span>
//   //                   <p class="text-muted" id="tip4Text">Prepare all ingredients before starting to cook</p>
//   //                 </div>
//   //                 <div
//   //                   class="d-flex align-items-center justify-content-start column-gap-3 rounded-4 mt-3 px-3 py-3 d-none"
//   //                   id="tipText">
//   //                   <span class="rounded-circle d-flex justify-content-center align-items-center"><i
//   //                       class="fa-solid fa-check"></i></span>
//   //                   <p class="text-muted" id="tip5Text"></p>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //           </div>
//   //           <!-- button -->
//   //           <div class="btn-style border-top pt-4 mt-5">
//   //             <button class="btn text-white fw-bold" id="button" onclick="tryReceipe()">
//   //               <i class="fa-solid fa-arrows-rotate"></i> Try Another Recipe</button>
//   //           </div>
//   //         </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   // `
//   num++

//   if(num > recipes.length -1 ){
//     num = 0;
//   }

// }

