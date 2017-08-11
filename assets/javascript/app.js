function Question(question, answer, choices) {

	this.question = question;
	this.answer = answer;
	this.choices = choices;

}

var question1 = new Question("What is Kramer's first name?", "Cosmo", ["Joe", "Frank", "Cosmo", "Xavier"]);
console.log(question1);
console.log(question1.choices)

var question2 = new Question("What catalog did Elaine run when her boss moved to Burma?", "J. Peterman", ["L.L. Bean", "Pottery Barn", "Victoria's Secret", "J. Peterman"]);
var question3 = new Question("If George were a porn star, what did he say his name would be?", "Buck Naked", ["Buck Naked", "Ron Jeremy", "Hugh Johnson", "Peter Dong"]);
var question4 = new Question("Where do Jerry's parents live?", "Florida", ["Queens", "Florida", "New Jersey", "Brooklyn"]);
var question5 = new Question("Who is Jerry's nemisis in the building?", "Newman", ["The super", "Kramer", "Manny", "Newman"]);

var questionArray = [question1, question2, question3, question4, question5];

var showQuestion;
var count = 0;




// var q = questionArray[0].question;
// console.log(q);

$('#startButton').click(function () {
	displayQuestion();
	startGame();
	$('#startButton').hide();
});

function displayQuestion() {

  $('#question').html(questionArray[count].question);
  $('#first').html(questionArray[count].choices[0]);
  $('#second').html(questionArray[count].choices[1]);
  $('#third').html(questionArray[count].choices[2]);
  $('#fourth').html(questionArray[count].choices[3]); 

  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

}

function nextQuestion() {
  
  count++

  $('#question').html(questionArray[count].question);
  $('#first').html(questionArray[count].choices[0]);
  $('#second').html(questionArray[count].choices[1]);
  $('#third').html(questionArray[count].choices[2]);
  $('#fourth').html(questionArray[count].choices[3]);

  if (count === questionArray.length) {
  	  count = 0;
  }

}

function startGame() {
  
  showQuestion = setInterval(nextQuestion, 30000);

}

function stopGame() {

  clearInterval(showQuestion);

}

// timeConverter: function(t) {

//   var minutes = Math.floor(t / 60);
//   var seconds = t - (minutes * 60);
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }
//   if (minutes === 0) {
//     minutes = "00";
//   }
//   else if (minutes < 10) {
//     minutes = "0" + minutes;
//   }
//   return minutes + ":" + seconds;
// }


