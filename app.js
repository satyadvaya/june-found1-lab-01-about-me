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
    console.log(confirmed);

    if (confirmed){
        const name = prompt('What is your name?');
        const answer1 = prompt(`Hey ${name}, do I possess enviable emotional control?`);
        const answer2 = prompt(`Hey ${name}, do I operate under the "eye-for-an-eye" principle or retribution?`);
        const answer3 = prompt(`Hey ${name}, do you expect that I might benefit from several solid years of intense therapy?`);
        console.log(name, answer1, answer2, answer3);
        
        let score = 0;
        
        if (!countsAsAYes(answer1)) {
            score ++;
        }
        console.log('score after checking answer1', score);

        if (countsAsAYes(answer2)){
            score ++;
        }
        console.log('score after checking answer2', score);

        if (countsAsAYes(answer3)){
            score ++;
        }
        console.log('score after checking answer3', score);
        
        console.log('final score', score);
        results.textContent = `Okay ${name}, you got ${score}/3 right!`;
    } else {
        console.log('user cancelled');
    }
});