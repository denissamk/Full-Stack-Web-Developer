import {studentsArrOne} from "./studentsArrOne.js   ";

// const gradesA = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73];
// const gradesB = [3, 4, 5];


// const totalGradesB = gradesB.reduce((total, currentValue) => {
//     console.log(`total: ${total}, currentValue: ${currentValue}`);
//     return total + currentValue;
// });

// console.log(totalGradesB);


// const avgGradesB = gradesB.reduce((total, currentValue) => {
//     return total + currentValue; 
// });

// console.log(avgGradesB / gradesB.length);


function calculateClassAvg(studentsArr) {
    const totalGrades = studentsArr.reduce((total, currentStudent) => {
        // console.log(`total: ${total}, currentStudent.grade: ${currentStudent.grade}`)
        return total + currentStudent.grade;
    }, 0);
    return totalGrades / studentsArrOne.length;
}

console.log(calculateClassAvg(studentsArrOne));