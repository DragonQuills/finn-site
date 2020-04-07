/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	// Bootstrapped from https://www.sitepoint.com/simple-javascript-quiz/
	(function () {
	  function buildQuiz() {
	    // variable to store the HTML output
	    var output = [];

	    // for each question...
	    myQuestions.forEach(function (currentQuestion, questionNumber) {

	      // variable to store the list of possible answers
	      var answers = [];

	      // and for each available answer...
	      for (letter in currentQuestion.answers) {

	        // ...add an HTML radio button
	        answers.push('<label>\n                <input type="radio" name="question' + questionNumber + '" value="' + letter + '">\n                ' + letter + ' :\n                ' + currentQuestion.answers[letter] + '\n              </label>');
	      }

	      // add this question and its answers to the output
	      output.push('<div class="question"> ' + currentQuestion.question + ' </div>\n            <div class="answers"> ' + answers.join('') + ' </div>');
	    });

	    // finally combine our output list into one string of HTML and put it on the page
	    quizContainer.innerHTML = output.join('');
	  }

	  function showResults() {

	    // gather answer containers from our quiz
	    var answerContainers = quizContainer.querySelectorAll('.answers');

	    // keep track of user's answers
	    var numCorrect = 0;

	    // for each question...
	    myQuestions.forEach(function (currentQuestion, questionNumber) {

	      // find selected answer
	      var answerContainer = answerContainers[questionNumber];
	      var selector = 'input[name=question' + questionNumber + ']:checked';
	      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

	      // if answer is correct
	      if (userAnswer === currentQuestion.correctAnswer) {
	        // add to the number of correct answers
	        numCorrect++;

	        // color the answers green
	        answerContainers[questionNumber].style.color = 'lightgreen';
	      }
	      // if answer is wrong or blank
	      else {
	          // color the answers red
	          answerContainers[questionNumber].style.color = 'red';
	        }
	    });

	    // show number of correct answers out of total
	    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
	  }

	  var quizContainer = document.getElementById('quiz');
	  var resultsContainer = document.getElementById('results');
	  var submitButton = document.getElementById('submit');
	  var myQuestions = [{
	    question: "Who invented JavaScript?",
	    answers: {
	      a: "Douglas Crockford",
	      b: "Sheryl Sandberg",
	      c: "Brendan Eich"
	    },
	    correctAnswer: "c"
	  }, {
	    question: "Which one of these is a JavaScript package manager?",
	    answers: {
	      a: "Node.js",
	      b: "TypeScript",
	      c: "npm"
	    },
	    correctAnswer: "c"
	  }, {
	    question: "Which tool can you use to ensure code quality?",
	    answers: {
	      a: "Angular",
	      b: "jQuery",
	      c: "RequireJS",
	      d: "ESLint"
	    },
	    correctAnswer: "d"
	  }];

	  // Kick things off
	  buildQuiz();

	  // Event listeners
	  submitButton.addEventListener('click', showResults);
	})();

/***/ })
/******/ ]);