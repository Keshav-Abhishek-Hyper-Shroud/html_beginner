// Defining a function
function thank(name,gender='Not Known') {
    // Here gender has default value as 'Not Known'
    console.log("Thank You, " + name + ` (${gender})`);
}

let name1 = "JOSHI PURY";
let name2 = "RAJ";
let name3 = "VANDU RANI";
let name4 = "JYOTI BHAHBI";
let name5 = "SAKHI";

thank(name1, "M")   // Calling the function
thank(name2, "M")   // Calling the function
thank(name3, "F")   // Calling the function
thank(name4, "F")   // Calling the function
thank(name5)   // Calling the function

// This Function Returns Some Data
function generate(passion) {
    return passion;
}

let data=generate('Coding...');
console.log(data);

// A quick QUIZ by "CODEWITHHARRY"
function check(a,b){
    if(a>b){
        console.log(`${a} is greater than ${b}`)
        console.log(`${b} is smaller than ${a}`)
    }

    if(a==b){
        console.log(`${a} is equal to ${b}`)
    }

    if(a<b){
        console.log(`${a} is smaller than ${b}`)
        console.log(`${b} is greater than ${a}`)
    }
}

check(18,18)
check(12,18)
check(18,12)