function APlusGrade(totalMarks, isFinalExam) {
  if (isFinalExam) {
    return totalMarks >= 90;
  } else {
    return totalMarks >= 89 && totalMarks <= 100;
  }
}


console.log(APlusGrade(91, true));
console.log(APlusGrade(89, false));  
console.log(APlusGrade(88, false));  