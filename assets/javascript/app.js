
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
var correct = 0;

$('#startButton').click(function () {
	displayQuestion();
	startGame();
	$('#startButton').hide();
});

function displayQuestion() {

  var choiceDiv = $('#choice-list');

  $('#question').html(questionArray[count].question);
  
  for (var i = 0; i < questionArray[count].choices.length; i++) {
  	var choice = $('<li>' + questionArray[count].choices[i] + '</li>' + '<br />');
  	choiceDiv.append(choice);
  }

}

function nextQuestion() {
  
  count++
  $('#choice-list').empty()

  $('#question').html(questionArray[count].question);

  var newList = $('#choice-list')

  for (var i = 0; i < questionArray[count].choices.length; i++) {
  	var choice = $('<li>' + questionArray[count].choices[i] + '</li>' + '<br />');
  	$('#choice-list').append(choice);
  }


  // $('#first').html(questionArray[count].choices[0]);
  // $('#first').val(questionArray[count].choices[0]);
  // $('#second').html(questionArray[count].choices[1]);
  // $('#second').val(questionArray[count].choices[1]);
  // $('#third').html(questionArray[count].choices[2]);
  // $('#third').val(questionArray[count].choices[2]);
  // $('#fourth').html(questionArray[count].choices[3]);
  // $('#fourth').val(questionArray[count].choices[3]);

  if (count === questionArray.length) {
  	  count = 0;
  }

}

function startGame() {
  
  showQuestion = setInterval(nextQuestion, 3000);

}

function stopGame() {

  clearInterval(showQuestion);

}

$('.choices').click(function() {
	console.log($(this).html());
	console.log(count)

	if (count === 0 && $(this).html() === "Cosmo") {
		correct++;
		console.log(correct);
	} else if (count === 1 && $(this).html() === "J. Peterman") {
		correct++
		console.log(correct);
	} else if (count === 2 && $(this).html() === "Buck Naked") {
		correct++
		console.log(correct);
	} else if (count === 3 && $(this).html() === "Florida") {
		correct++
		console.log(correct);
	} else if (count === 4 && $(this).html() === "Newman") {
		correct++
		console.log(correct);
	} else if (count >= 5) {
		alert("You got " + correct + " out of 5!")
	}

	nextQuestion();
	
})

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


