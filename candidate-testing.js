const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? " ;
let correctAnswer ="Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
// Created an array of questions given in tabular form in assignment question
let questions =["Who was the first American woman in space? ", 
              "True or false: 5 kilometer == 5000 meters? ",
              "(5 + 3)/2 * 10 = ? ",
              "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
              "What is the minimum crew size for the ISS? "];
// Created an array of correct answers given in tabular form in assignment question
let correctAnswers =["Sally Ride" ,"true","40","Trajectory","3"];
// Define the empty array for storing candidate answers
let candidateAnswers =[];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Candidate Name:");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for(let i=0; i<questions.length ; i++) {
  candidateAnswers[i] = input.question(questions[i]);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let correctAnswerCount = 0;

  for(let j=0; j<questions.length; j++) {  
    if(candidateAnswers[j].toLowerCase()===correctAnswers[j].toLowerCase()){
      correctAnswerCount++;
      // calling the custom function by passing the index
      candidateResponseValidation(j);
    } else {
      candidateResponseValidation(j);    
    }
  }
  console.log("Number of correct answers :  " + correctAnswerCount);

  let grade = (correctAnswerCount)/(questions.length)*100;
  //TODO 3.2 use this variable to calculate the candidates score.
  console.log(">>> Overall Grade:" + grade + "% (" + correctAnswerCount + " of " + questions.length + " responses correct) <<<");
  if(grade>=80) {
      console.log(">>> Status: PASSED <<<");
    } else {
      console.log(">>> Status: FAILED <<<");
    }
  return grade;
}

// Created a new function for candidate response validation and print log in console
function candidateResponseValidation (index){
      console.log([index+1] +") " +questions[index]);
      console.log("Your Answer : "+candidateAnswers[index]);
      console.log("Correct Answer: "+correctAnswers[index]);
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello "  + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};