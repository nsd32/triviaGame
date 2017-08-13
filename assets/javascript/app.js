
$(document).ready(function() {

	function Question(question, answer, choices) {

		this.question = question;
		this.answer = answer;
		this.choices = choices;

	}

	var question1 = new Question("What is Kramer's first name?", "Cosmo", ["Joe", "Frank", "Cosmo", "Xavier"]);
	var question2 = new Question("What catalog did Elaine run when her boss moved to Burma?", "J. Peterman", ["L.L. Bean", "Pottery Barn", "Victoria's Secret", "J. Peterman"]);
	var question3 = new Question("If George were a porn star, what did he say his name would be?", "Buck Naked", ["Buck Naked", "Ron Jeremy", "Hugh Johnson", "Peter Dong"]);
	var question4 = new Question("Where do Jerry's parents live?", "Florida", ["Queens", "Florida", "New Jersey", "Brooklyn"]);
	var question5 = new Question("Who is Jerry's nemisis in the building?", "Newman", ["The super", "Kramer", "Manny", "Newman"]);

	var questionArray = [question1, question2, question3, question4, question5];

	var showQuestion;
	var startTime;
	var count = 0;
	var correct = 0;
	var time = 10;
	var clockRunning = false;

	$('#startButton').click(function () {
		displayQuestion();
		startGame();
		$('#startButton').hide();
		timer();
	});


	function timer() {
		time--;

		var converted = timeConverter(time);
		console.log(converted);
		$('#time').html(converted);
	}

	function timeConverter(t) {

	  var minutes = Math.floor(t / 60);
	  var seconds = t - (minutes * 60);
	  if (seconds < 10) {
	    seconds = "0" + seconds;
	  }
	  if (minutes === 0) {
	    minutes = "00";
	  }
	  else if (minutes < 10) {
	    minutes = "0" + minutes;
	  }
	  return minutes + ":" + seconds;
	}

	function displayQuestion() {

	  var choiceDiv = $('#choice-list');

	  $('#question').html(questionArray[count].question);
	  
	  for (var i = 0; i < questionArray[count].choices.length; i++) {
	  	var choice = $("<li>" + questionArray[count].choices[i] + "</li>" + "<br />");
	  	// choice.val(questionArray[count].choices[i]);
	  	
	  	choice.bind('click', function () {
	  		console.log($(this).html());
	  		console.log(questionArray[count].answer);

	  		time = 10;

	  		if ($(this).html() === questionArray[count].answer) {
	  			
	  			nextQuestion();
	  			alert('correct!');
	  			correct++;
	  			
	  		} else {
	  			
	  			nextQuestion();
	  			alert('wrong!');
	  			
	  		}

	  		clearInterval(showQuestion);
	  		showQuestion = setInterval(nextQuestion, 10000);
	  	});

	  	choiceDiv.append(choice);
	  	// console.log(choice);


	  }

	}

	function nextQuestion() {
	  
	  count++

	  time = 10

	  $('#choice-list').empty()

	  $('#question').html(questionArray[count].question);

	  var newList = $('#choice-list')

	  for (var i = 0; i < questionArray[count].choices.length; i++) {
	  	var choice = $("<li>" + questionArray[count].choices[i] + "</li>" + "<br />");
	  	// choice.val(questionArray[count].choices[i]);
	  	choice.bind('click', function () {
	  		console.log($(this).html());
	  		console.log(questionArray[count].answer);

	  		time = 10;

	  		if ($(this).html() === questionArray[count].answer) {
	  			
	  			nextQuestion();
	  			alert('correct!');
	  			correct++;
	  			
	  		} else {
	  			
	  			nextQuestion();
	  			alert('wrong!');
	  			
	  		}

	  		clearInterval(showQuestion);
	  		showQuestion = setInterval(nextQuestion, 10000);
	  	});
	  	$('#choice-list').append(choice);
	  	// console.log(choice);
	  }

	  if (count === questionArray.length) {
	  	  
	  	  stopGame();
	  	  alert(`You got ${correct} out of 5`);
	  	  // count = 0;
	  }

	}

	function startGame() {
	  if (!clockRunning) {
	
	    showQuestion = setInterval(nextQuestion, 10000);
	    startTime = setInterval(timer, 1000);
	    clockRunning = true;
	  }
	}

	function stopGame() {

	  clearInterval(showQuestion);

	}

});



