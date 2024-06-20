const gameName = new String("shalabh sahu");

console.log(gameName.charAt(0));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);
console.log(gameName.slice(-1,4));

const newStringOne = "      shalabh         "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://shalabh.com/shalabh%20sahu";
console.log(url.replace('%20', '-'));