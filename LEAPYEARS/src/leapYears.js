//Leap years

//Run a loop between 2000 and 3000 while using control flow
//Two possible cases for a leap year: 1. number divisible by 4 but not by 100, 2. number divisible by 400

let years = 2000;

for(i = years; i <= 3000; i++){
    if((i % 4 === 0 && i % 100 !== 0)|| i % 400 === 0){
        console.log(i);
    }
}