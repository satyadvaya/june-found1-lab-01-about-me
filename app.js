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
        const ans1 = prompt('Do I lack emotional control?');
        const ans2 = prompt('Do I operate under the "eye-for-an-eye" principle or retribution?');
        const ans3 = prompt('Do you expect that I might benefit from several solid years of intense therapy?');
        console.log(name, ans1, ans2, ans3);
        
        let score = 0;
        
        // NO is the correct answer
        // !isYes(ans1)
        // !isYes('adfigjoaidjf')
        // !false
        // true
        if (isYes(ans1)) {
            score ++;
        }
        console.log('score after checking ans1', score);

        if (isYes(ans2)){
            score ++;
        }
        console.log('score after checking ans2', score);

        if (isYes(ans3)){
            score ++;
        }
        console.log('score after checking ans3', score);
        
        console.log('final score', score);
        results.textContent = `Okay ${name}, you got ${score}/3 right!`;
    } else {
        console.log('user cancelled');
    }
});