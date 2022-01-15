//Declarations of greeting variable
let greeting;

//Declaration of time variables
let date = new Date;
let time = date.getHours();

if (time <= 11){
    console.log(greeting = 'Good Morning!');
} else if (time <= 17 && time > 11) {
    console.log(greeting = 'Good Day!');
} else if (time >= 18){
    console.log(greeting = 'Good Evening!');
}