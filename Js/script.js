/**************************/
/* Example: Calculate GST */
/**************************/

// added const to subTotal as it was undefined//
const subTotal = 40;

//added const to total as it was also undefined//
const total = subTotal * 0.05 + subTotal;

console.log(`$${subTotal} plus GST is $${total}.`);


/****************************/
/* Example: Square a number */
/****************************/

const num = 4;

const numSquared = num * num;

// num was spelt with a capital N "Num" as opposed to "num"//
console.log(`${num} squared is ${numSquared}.`);


/**********************************************/
/* Example: Calculate fahrenheit from celsius */
/**********************************************/

const tempF = 72;
const tempPreference = 'celsius';
//declared temp with let because temp changes within the if/else statement// 
let temp = tempF;

if (tempPreference == 'celsius') {
  temp = (5 / 9) * (tempF - 32);
} else {
  temp = tempF;
}

console.log(`Temp is ${temp} degrees`);