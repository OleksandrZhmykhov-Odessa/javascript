let max = 1000;
let min = 100;
let count = 20; 
let evenCount = 0; 
let oddCount = 0;  

for (let i = 0; i < count; i++) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);

    if (randomNum % 2 === 0) {
        evenCount++; 
    } else {
        oddCount++;  
    }
}

let evenPercentage = (evenCount / count) * 100; 
let oddPercentage = (oddCount / count) * 100;   

console.log(`Парних чисел: ${evenCount} (${evenPercentage.toFixed(2)}%)`);
console.log(`Непарних чисел: ${oddCount} (${oddPercentage.toFixed(2)}%)`);