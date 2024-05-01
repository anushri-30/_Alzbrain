function del() {
    alert("are you sure you want to proceed");
}
const quizForm = document.getElementById('quiz-form');
// const resultDiv = document.getElementById('result');
const correctAnswers = ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes','a','b','a','b','b','b','a','a','a','Yes','c'];

quizForm.addEventListener('submit', e => {
  e.preventDefault();
  
  let score = 0;
  const userAnswers = [quizForm.q1.value,quizForm.q2.value,quizForm.q3.value,quizForm.q4.value,quizForm.q5.value,quizForm.q6.value,quizForm.q7.value
    ,quizForm.q8.value,quizForm.q9.value,quizForm.q10.value,quizForm.q11.value,quizForm.q12.value,quizForm.q13.value,quizForm.q14.value,quizForm.q15.value
    ,quizForm.q16.value,quizForm.q17.value,quizForm.q18.value,quizForm.q19.value,quizForm.q20.value];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1;
    }
  });

  // resultDiv.innerHTML = `Your score is ${score}/${correctAnswers.length}`;
  $('#quiz-results-score').html('You got <b>' + score + '/' + correctAnswers.length + '</b> questions correct.');
  
});




