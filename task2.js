//task 1

function getFullName(f,l){
    console.log(f+" "+l); }
getFullName("Youssef", "Mina");

//task 2

function isEven(x){
    if (x%2===0){
        console.log("Even");}
        else {
            console.log("Odd");}}
isEven(4);
isEven(5);
isEven(0);
isEven(-2);

//task 3

function maxOfTwo(a,b){
if(a>b){
    console.log(`${a} is greater than ${b}`)
}
else if(a<b){
    console.log(`${b} is greater than ${a}`)
}
else{
    console.log("EQUAL")
}
}
maxOfTwo(4,8)
maxOfTwo(9,2)
maxOfTwo(4,4)

//task 4
function checkGrade(s){
if(s>=90){
    console.log("Excellent")
}
else if(s>=80){
    console.log("Very Good")
}
else if(s>=70){
    console.log("Good")
}
else if(s>=60){
    console.log("Pass")
}
else{
    console.log("Fail")
}
}
checkGrade(75)
checkGrade(66)
checkGrade(55)
checkGrade(92)

//task 5

function printnum(){
    for(let i=1;i<=10;i++){
       console.log(i)
    }
}
printnum()

//task 6

function sumToN(n){
    for(let i=1;i<=n;i++){
       console.log(i)
    }
}
sumToN(6)

//task 7

function fact(num) {
    if (num == 0 || num == 1) {
        console.log(1);
    } else if (num < 0) {
        console.log("negative number");
    } else {
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        console.log(fact);
    }
}

fact(5);  
fact(-3);
fact(0);

//task 8

function multiplicationTable(n){
  for(let i=n; i<=10; i++){
    console.log(`${n} x ${i} = ${n*i}`)
  }
}
multiplicationTable(1)

//task 9

function countDigits(num){
    /* while (num!==0){
       num = Math.floor(num / 10);
       count++;          
        } */
   count= Math.floor(Math.log10(num)+1) // rounds down floor w kdaa then log base 10 any num +1 gives answer
    console.log(`There are ${count} digits`)
}
countDigits(1)
countDigits(65)
countDigits(173)
countDigits(1542)

//task 10

function power(b, e){
    let result=1
for(let i=1;i<=e;i++){
    result*=b
}
console.log(result)   
}

power(5,3)


