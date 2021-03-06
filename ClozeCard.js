var inquirer = require('inquirer');

function ClozeCard (cloze, text) {
  this.cloze = cloze;
  this.text = text;
  this.fullText = cloze + " " + text;
}
ClozeCard.prototype.printInfo = function(cloze, text) {
  console.log("Cloze Text: " + this.cloze);
  console.log("Partial Text : " + this.text);
  console.log("Full Text : " + this.fullText);
};
inquirer.prompt([
  {
   	type: "input",
   	message: "Provide Cloze Text: ",
   	name: "cloze"
  },
  {
   	type: "input",
   	message: "Provide Partial Text: ",
   	name: "text",
  }
])
.then(function(inquirerResponse) {
  var firstPresident = new ClozeCard(inquirerResponse.cloze, inquirerResponse.text)
  firstPresident.printInfo();
});
module.exports = ClozeCard;