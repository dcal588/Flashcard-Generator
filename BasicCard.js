var inquirer = require('inquirer');

function BasicCard (front, back) {
  this.front = front;
  this.back = back;
  inquirer.prompt([
  {
    type: "input",
    message: "Provide text for front of card: ",
    name: "front"
  },
  {
    type: "input",
    message: "Provide text for back of card: ",
    name: "back",
  }
])
.then(function(inquirerResponse) {
  var firstPresident = new BasicCard(inquirerResponse.front, inquirerResponse.back)
  firstPresident.printInfo();
});
}
BasicCard.prototype.printInfo = function(front, back) {
  console.log("Front of Card: " + this.front)
  console.log("Back of Card: " + this.back)
};
module.exports = BasicCard;