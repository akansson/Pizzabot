const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:
function cookingTime(orderQuantity) {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

function checkOrderName(orderName) {
  if (
    orderName == vegetarian ||
    orderName == hawaiian ||
    orderName == pepperoni
  ) {
    return true;
  } else {
    return false;
  }
}

// function checkOrderName(orderName){
// return orderName == vegetarian || orderName == hawaiian || orderName == pepperoni;
// }

function totalCost(orderQuantity) {
  return pizzaPrice * orderQuantity;
}

alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    ", " +
    hawaiian +
    " and " +
    pepperoni
);

let orderName = prompt("Enter the name of the pizza you want to order today");
let isOnTheMenu = checkOrderName(orderName);

if (isOnTheMenu) {
  let orderQuantity = prompt("How many of " + orderName + " do you want?");
  let orderTotal = totalCost(orderQuantity);
  let theCookingTime = cookingTime(orderQuantity);

  alert(
    "Great, I'll get started on your " +
      orderName +
      " right away, it will cost " +
      orderTotal +
      " kr." +
      " The pizzas will take " +
      theCookingTime +
      " minutes."
  );
} else {
  alert("Not on the menu");
}
