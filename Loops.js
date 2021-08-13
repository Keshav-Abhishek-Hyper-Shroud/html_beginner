// For Loops
let array='KESHAV';
for (let index = 0; index < array.length; index++) {
    console.log(`${index}, ${array[index]}`);
}

let arr=['1.0','2.0','3.0','4.0','5.0','6.0','7.0','8.0','9.0','10.0'];
arr.forEach(function prints(i) {
    console.log(i);
})

for(i of arr){
    console.log('Again, ' + i)
}

let employee={
    name:'Ramesh',
    salary:100000,
    channel:'RAMESH FACT STUDIO',
    resident:'USA'
}

// Used for iteration of "Object" in "Js" | "Dictionary" in "Python"
for(i in employee){
    console.log(`${i}: ${employee[i]}`)
}

// While Loops
let counter=0;
while (counter<=10) {
    console.log(counter);
    counter++;
}

// Do While Loops
// No matter the condition is true or false, "do while" loop gives a chance to execute the work
counter=0;
do{
    console.log(counter);
    counter+=1;
}while(counter<=10);