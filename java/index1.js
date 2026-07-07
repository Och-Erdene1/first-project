const studentScores = [45, 80, 67, 30, 95, 55, 72];

let passed = 0;
let failed = 0;
let total = 0;

for (let i = 0; i < studentScores.length; i++) {
    if  (studentScores[i]>=60) {
       passed = passed +1;
    } else  {
        failed = failed + 1;
    }
    total = total + studentScores[i]
}
console.log("passed",passed) ;
console.log("failed", failed) ; 
console.log("total", total) ;
