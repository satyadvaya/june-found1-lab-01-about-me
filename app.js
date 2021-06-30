  // get the button element
  // add "click" event listener to the button
  //   confirm the user wants to start the quiz
  //   if they do -- prompt for at least 3 questions and store the answer
  //   for each answer, check if the user entered a correct value
  //   track the number of correct answers
  //   at the end of the quiz, update the results section with the number of correct answers
import { countsAsAYes } from './utils.js';

const quizButton = document.getElementById('quiz-button');
const results = document.getElementById('quiz-results');
  
quizButton.addEventListener('click', () => {
    const confirmed = confirm('Would you like to begin the quiz?');

    if (confirmed){
        const name = prompt('What is your name?');
        const answer1 = prompt(`Hey ${name}, do I possess enviable emotional control?`);
        const answer2 = prompt(`Hey ${name}, do I operate under the "eye-for-an-eye" principle or retribution?`);
        const answer3 = prompt(`Hey ${name}, do you expect that I might benefit from several solid years of intense therapy?`);
        
        let correctAnswers = 0;
        
        if (!countsAsAYes(answer1)) {
            correctAnswers ++;
        }

        if (countsAsAYes(answer2)){
            correctAnswers ++;
        }

        if (countsAsAYes(answer3)){
            correctAnswers ++;
        }
        
        results.textContent = `Okay ${name}, you got ${correctAnswers}/3 right!`;
        
    } else {
        return;
    }
});