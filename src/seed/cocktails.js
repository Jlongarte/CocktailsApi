const { getImageUrl } = require("../utils/cloudinary.utils");

const cocktails = [
  {
    name: "Classic Martini",
    description:
      "A timeless cocktail with gin and dry vermouth, garnished with an olive.",
    preparation:
      "Stir gin and vermouth with ice, strain into a chilled glass, and garnish with an olive.",
    image: getImageUrl("CocktailsApi/Classic_Martini_ryojim"),
    alcohol: "Martini",
  },
  {
    name: "Vodka Tonic",
    description: "A refreshing and simple mix of vodka and tonic water.",
    preparation:
      "Fill a glass with ice, add vodka, top with tonic water, and garnish with a lime wedge.",
    image: getImageUrl("CocktailsApi/Vodka_Tonic_uazkwt"),
    alcohol: "Vodka",
  },
  {
    name: "Tequila Sunrise",
    description:
      "A vibrant cocktail with tequila, orange juice, and grenadine.",
    preparation:
      "Pour tequila and orange juice over ice, slowly add grenadine to create the sunrise effect.",
    image: getImageUrl("CocktailsApi/Tequila_Sunrise_jn1xrt"),
    alcohol: "Tequila",
  },
  {
    name: "Gin and Tonic",
    description: "A crisp, refreshing blend of gin and tonic water.",
    preparation:
      "Combine gin and tonic water over ice, garnish with lime or cucumber.",
    image: getImageUrl("CocktailsApi/Gin_Tonic_qne74u"),
    alcohol: "Ginebra",
  },
  {
    name: "Absinthe Drip",
    description: "A traditional absinthe serve with cold water and sugar.",
    preparation:
      "Place a sugar cube on an absinthe spoon, drip cold water slowly until dissolved.",
    image: getImageUrl("CocktailsApi/Absinthe_Drip_n8gmw6"),
    alcohol: "Absenta",
  },
  {
    name: "Bloody Mary",
    description: "A savory cocktail made with vodka and tomato juice.",
    preparation:
      "Mix vodka, tomato juice, lemon juice, Worcestershire sauce, and spices; garnish with celery.",
    image: getImageUrl("CocktailsApi/Bloody_Mary_znpgyl"),
    alcohol: "Vodka",
  },
  {
    name: "Margarita",
    description:
      "A classic Mexican cocktail combining tequila, lime, and triple sec.",
    preparation:
      "Shake tequila, lime juice, and triple sec with ice, strain into a salt-rimmed glass.",
    image: getImageUrl("CocktailsApi/Margarita_dk1fom"),
    alcohol: "Tequila",
  },
  {
    name: "Negroni",
    description:
      "A bold Italian cocktail made with gin, Campari, and sweet vermouth.",
    preparation: "Stir ingredients with ice and garnish with an orange peel.",
    image: getImageUrl("CocktailsApi/Negroni_afvhro"),
    alcohol: "Ginebra",
  },
  {
    name: "Vodka Martini",
    description:
      "A modern twist on the classic martini using vodka instead of gin.",
    preparation:
      "Shake vodka and dry vermouth with ice, strain, and garnish with a lemon twist.",
    image: getImageUrl("CocktailsApi/Vodka_Martini_n6rb2d"),
    alcohol: "Vodka",
  },
  {
    name: "Tequila Mule",
    description:
      "A Mexican version of the Moscow Mule with tequila and ginger beer.",
    preparation:
      "Mix tequila, lime juice, and ginger beer over ice, garnish with lime.",
    image: getImageUrl("CocktailsApi/Tequila_Mule_riwmmy"),
    alcohol: "Tequila",
  },
  {
    name: "Gin Fizz",
    description: "A light, foamy gin cocktail with lemon and soda water.",
    preparation:
      "Shake gin, lemon juice, and sugar syrup, strain and top with soda.",
    image: getImageUrl("CocktailsApi/Gin_Fizz_xgocyb"),
    alcohol: "Ginebra",
  },
  {
    name: "White Wine Spritzer",
    description: "A simple, bubbly mix of white wine and soda water.",
    preparation:
      "Combine chilled white wine and soda over ice, garnish with a lemon slice.",
    image: getImageUrl("CocktailsApi/Spritzer_dbdso2"),
    alcohol: "Wine",
  },
  {
    name: "Red Wine Sangria",
    description: "A fruity Spanish punch with red wine, fruits, and brandy.",
    preparation:
      "Mix red wine, sliced fruit, and brandy; chill before serving.",
    image: getImageUrl("CocktailsApi/Sangria_ttc2bc"),
    alcohol: "Wine",
  },
  {
    name: "Dry Martini",
    description:
      "A drier version of the classic martini with minimal vermouth.",
    preparation:
      "Stir gin and a splash of vermouth with ice, strain and serve with an olive.",
    image: getImageUrl("CocktailsApi/Dry_Martini_auicib"),
    alcohol: "Martini",
  },
  {
    name: "Tequila Sour",
    description: "A tangy cocktail mixing tequila, lemon juice, and sugar.",
    preparation:
      "Shake tequila, lemon juice, and syrup with ice, strain into a chilled glass.",
    image: getImageUrl("CocktailsApi/Tequila_Sour_prvaom"),
    alcohol: "Tequila",
  },
  {
    name: "Martini Royale",
    description: "A sparkling martini with prosecco and lime.",
    preparation:
      "Pour Martini Bianco and prosecco over ice, garnish with lime.",
    image: getImageUrl("CocktailsApi/Martini_Royale_u4rohr"),
    alcohol: "Martini",
  },
  {
    name: "Vodka Collins",
    description: "A refreshing vodka version of the classic Tom Collins.",
    preparation:
      "Shake vodka, lemon juice, and sugar syrup; top with soda water.",
    image: getImageUrl("CocktailsApi/Vodka_Collins_pnpfd1"),
    alcohol: "Vodka",
  },
  {
    name: "Gin Martini",
    description: "A crisp, strong cocktail of gin and dry vermouth.",
    preparation:
      "Stir gin and vermouth with ice, strain, and garnish with lemon or olive.",
    image: getImageUrl("CocktailsApi/Gin_Martini_s3i055"),
    alcohol: "Ginebra",
  },
  {
    name: "Absinthe Spritz",
    description: "A lighter absinthe cocktail with sparkling water and citrus.",
    preparation: "Mix absinthe, soda water, and lemon juice over ice.",
    image: getImageUrl("CocktailsApi/Absinthe_Spritz_lifqnp"),
    alcohol: "Absenta",
  },
  {
    name: "Wine Cooler",
    description: "A chilled blend of wine, fruit juice, and soda.",
    preparation: "Combine white wine, orange juice, and soda water over ice.",
    image: getImageUrl("CocktailsApi/Wine_Cooler_bvxccz"),
    alcohol: "Wine",
  },
  {
    name: "Tequila Smash",
    description: "A fruity, minty tequila cocktail perfect for summer.",
    preparation: "Muddle mint and fruit, add tequila and ice, shake well.",
    image: getImageUrl("CocktailsApi/Tequila_Smash_fdbvoz"),
    alcohol: "Tequila",
  },
  {
    name: "Vodka Cranberry",
    description: "A simple cocktail of vodka and cranberry juice.",
    preparation: "Mix vodka and cranberry juice over ice, garnish with lime.",
    image: getImageUrl("CocktailsApi/Vodka_Cranberry_let1ne"),
    alcohol: "Vodka",
  },
  {
    name: "Absinthe Frappe",
    description: "A classic absinthe cocktail served over crushed ice.",
    preparation: "Shake absinthe, sugar, and water; pour over crushed ice.",
    image: getImageUrl("CocktailsApi/Absinthe_Frappe_osu0hh"),
    alcohol: "Absenta",
  },
  {
    name: "Martini Espresso",
    description: "A smooth and energizing martini with espresso and vodka.",
    preparation:
      "Shake vodka, espresso, and coffee liqueur with ice, strain and serve.",
    image: getImageUrl("CocktailsApi/Martini_Espresso_zrchr5"),
    alcohol: "Martini",
  },
  {
    name: "Gin Basil Smash",
    description: "A modern gin cocktail with fresh basil and lemon.",
    preparation:
      "Muddle basil with lemon juice, add gin and ice, shake and strain.",
    image: getImageUrl("CocktailsApi/Gin_Basil_gsyioo"),
    alcohol: "Ginebra",
  },
];

module.exports = cocktails;

//node .\src\seed\Cocktails.seed.js
