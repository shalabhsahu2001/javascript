//basic conversion me koi dikkat nahi

// console.log("2" > 1)
// console.log("02" > 1)


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


//reason is that and equlity check == comparison > < >= <= work differently.
//comparison conver null to a number, treating it as 0.
//That's why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined == 0);
console.log(undefined == 0);
console.log(undefined == 0);

//undefine sabme false deta hai

/* Strict check (===) */
//data type same hona chaiye
console.log("2" === 2);