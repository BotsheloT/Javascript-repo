//Variables for name
let name = 'Jaden';
let surname = 'Smith';

//Variable for year and data
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDay = date.getDate();
const dob = 1998;

/*testing
console.log(currentYear);*/

//final output
if ((currentMonth+1 > 5) || (currentMonth+1 == 5 && currentDay >= 8)){
    let age = currentYear-dob;
    let result = `${name} ${surname} is ${age} years old`;
    console.log(result);
} else if((currentMonth+1 < 5) || (currentMonth+1 == 5 && currentDay < 8)){
    let age = (currentYear-dob) -1;
    let result = `${name} ${surname} is ${age} years old`;
    console.log(result);
}