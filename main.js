//task 1
for(let i = 1; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }
    else if(i%3===0){
        console.log("Fizz");
    }
    else if(i%5===0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

//task 2
let min = 1;
let max = 100;
for(let i = 0; i<100; i++){
    let randomNumber = Math.floor(Math.random() * (max - min)) +min;
    console.log(randomNumber);
}


//task 3
let sum = 0;
for(let i = 1; i<=1000;i++){
    if(i%2 === 0){
        sum+=i;
    }
}
console.log(sum);


//task 4

sum = 0;

for(let i =1; i<=1000; i++){
    if(i%3===0 || i%5===0){
      sum+=i;
    }
}
console.log(sum);


//task 5

sum = 0;

for(let i =1; i<=1000; i++){
    if(i%3===0 && i%5===0){
      sum+=i;
    }
}
console.log(sum);





