//declaration of array
let names = ['James', 'Albert', 'Razina', 'Frank', 'Sally']

//temp variable for storage
let temp;

//while loop variable to ensure 5 iteratrions
let iterations = 0;


//loop to sort names\
while (iterations < 2){
    for (let i = 0; i<= 5; i++){
        if (names[i] > names[i+1]){
            temp = names[i];
            names[i] = names[i+1];
            names[i+1] = temp; 
        }
    }
    iterations++
}

console.log(names);