const coffeeMenu = require("./coffee_data");



//Array of all drinks
const allDrinks = (drink) => {
  return drink.name;
}
const everyDrink = coffeeMenu.map(allDrinks);
//Short hand of all drinks
const menuDrinks = coffeeMenu.map((drink) => drink.name);








//Drinks that cost 5 and under
const underFive = (drink) => {
  return drink.price <= 5;
}
const belowFive = coffeeMenu.filter(underFive);
//Shorthand of drinks under 5
const lessThanFive = coffeeMenu.filter((drinks) => drinks.price <= 5);







//Drinks that have even number for price
const evenStevenDrinks = (drink) => {
  return drink.price % 2 == 0;
}
const stillEvenDrinks = coffeeMenu.filter(evenStevenDrinks);
//Shorthand for drinks that have a even number for a price
const evenDrinks = coffeeMenu.filter((drink) => drink.price % 2 === 0);









//Total price for whole menu
const menuTotal = (total, drink) => {
  return total += drink.price;
}
const totalMenu = coffeeMenu.reduce(menuTotal, 0);
//Shorthand for total price for whole menu
const wholeMenuPrice = coffeeMenu.reduce((total, drink) => total + drink.price, 0);









//Only seasonal drinks
const seasonDrinks = (drink) => {
  return drink.seasonal;
  // return drink.seasonal === true;
}
const inSeasonDrinks = coffeeMenu.filter(seasonDrinks);
//Shorthand for seasonal drinks
const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal === true);










//Seasonal drinks with imported beans
const importedBeans = (drink) => {
  if(drink.seasonal){
    return drink.name = `${drink.name} With imported beans`;
  }
}
const beansImported = coffeeMenu.filter(importedBeans);


//Shorthand seasonal drinks with imported beans
const beansImported01 = coffeeMenu.filter((drink) => drink.seasonal ? drink.name = `${drink.name} With imported beans` : false);






console.log(beansImported01);



