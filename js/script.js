/* get user input */
let r = prompt ("How many inches of rain fell?");

/* build string then log it to the console */
let string = "";
for (let i = r; i > 0; i--){
    string += "*";
}
console.log(string);

/* determine how the yield is affected by the rain */
let y = 50;
if (r >= 20){
    y = 50  * .9;
}else if (r < 10) {
    y = 50 * .8;
} else {
    y = 50;
}

/* prompt for fertilizer use and determine what type if fertilizer was used then display bushels per acre */
let answer = prompt("Did you use fertilizer?");

if (answer === "yes"){
   let type = prompt("Did you use premium or regular fertilizer?");
        if(type === "regular"){
            y = y * 1.1;
            console.log("The yield should be " + y + " bushels per acre.");
        } else if (type === "premium"){
            y = y * 1.15;
            y = y.toFixed(2);
            console.log("The yield should be " + y + " bushels per acre.");
        } else {
            type = prompt("What type of fertilizer did you use, regular or premium?");
        }
} else if (answer === "no") {
    console.log("The yield should be " + y + " bushels per acre.")
} 