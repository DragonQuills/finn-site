
(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];

      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {

          // variable to store the list of possible answers
          const answers = [];

          // and for each available answer...
          for(letter in currentQuestion.answers){

            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>
              <br>`
            );
          }

          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
            <br>`
          );
        }
      );

      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }

    function showResults(){

      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');

      // keep track of user's answers
      let numCorrect = 0;

      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;

          // color the answers green
          answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });

      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    // Only change bellow this line! ------------------------------------------
    const myQuestions = [{
	    question: "What was Martin Luther King Jr's other profession?",
	    answers: {
	      a: "Doctor",
	      b: "Dog walker",
	      c: "Minister",
				d: "Banker"
	    },
	    correctAnswer: "c"
	  }, {
	    question: "How is COVID-19 affecting the asian american population?",
	    answers: {
	      a: "They are more likly to carry the virus",
	      b: "They're being discriminated against because people think they caused the virus",
	      c: "They're getting sick faster",
				d: "They are happier"
	    },
	    correctAnswer: "b"
	  }, {
	    question: "Which president signed the civil rights act?",
	    answers: {
	      a: "Abraham Lincoln",
	      b: "James Harden",
	      c: "John F Kennedy",
				d: "Lyndon B Johnson"
      },
	    correctAnswer: "d"
	  }, {
	    question: "How can you help prevent racism?",
	    answers: {
	      a: "Call out racist statments or 'Jokes'",
	      b: "Examine your own oppinions or biasas and consider where they came from",
	      c: "Find out how your company or school works to expand opportunities for people of color.",
				d: "ALL OF THE ABOVE"
      },
	    correctAnswer: "d"
	  }
  ];


    //And above this line -----------------------------------------------------

    // Kick things off
    buildQuiz();

    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();
