// Generate Random Number :-

function randomNum() {
    return Math.floor((Math.random() * 100 + 1));
}
console.log("Random Number : ", randomNum());


// For-In loop :-

const student = {
    fName: "Aryan",
    lName: "Gupta",
    age: 23
}

for (i in student) {
    console.log(i + " : " + student[i]);
}