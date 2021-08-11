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