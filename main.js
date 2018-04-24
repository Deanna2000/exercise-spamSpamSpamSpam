//Get data out of local storage
ParsedCustomersDB = JSON.parse(localStorage.getItem("ArticleListDB"))

const cookedIngredients = rawIngredients.map(function (ingredient) {