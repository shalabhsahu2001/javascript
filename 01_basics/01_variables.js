const accountId = 144553
let accountEmail = "shalabh@hotmail.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountState; // if uninitialized value is undefined
// accountId = 2 // not allowed
accountEmail = "123@outlook.com"
accountCity = "Allahabad"
console.log(accountId);
console.log(accountEmail);
console.log(accountCity);

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);