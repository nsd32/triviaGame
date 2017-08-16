
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
	var count;
	var correct = 0;
	var time = 10;
	var clockRunning = true;
	var testImage = "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR3,0,182,268_AL_.jpg";

	$('#startButton').click(function () {
		showQuestion = setInterval(nextQuestion, 10000);
	    startTime = setInterval(timer, 1000);
	    // clockRunning = true;
		// startGame();
		$('#startButton').hide();
		timer();
		count = 0;
		displayQuestion();
	});


	function displayQuestion() {

	  var choiceDiv = $('#choice-list');

	  $('#question').html(questionArray[count].question);
	  
	  for (var i = 0; i < questionArray[count].choices.length; i++) {
	  	var choice = $("<li>" + questionArray[count].choices[i] + "</li>" + "<br />");
	  	choice.attr('data-value', questionArray[count].choices[i]);
	  	
	  	choice.on('click', function () {
	  		console.log($(this).attr('data-value'));
	  		console.log(questionArray[count].answer);

	  		time = 10;


	  		if ($(this).attr('data-value') === questionArray[count].answer) {
	  			
	  			correct++;
	  			// $('#choice-list').hide();
	  			// $('#image').attr('src', testImage);
	  			// setTimeout(hideImage, 5000);
	  			// setTimeout(nextQuestion, 5000);
	  			// clearInterval(showQuestion);
	  			// clockRunning = false;
	  			// clearInterval(timer);

	  			nextQuestion();
	  			
	  		} else {
	  			
	  			$('#choice-list').hide();
	  			$('#image').attr('src', testImage);
	  			setTimeout(hideImage, 5000);
	  			setTimeout(nextQuestion, 5000);
	  			
	  		}

	  		clearInterval(showQuestion);
	  		showQuestion = setInterval(nextQuestion, 10000);
	  		
	  	});

	  	choiceDiv.append(choice);

	  }

	}

	function nextQuestion() {
	  
	  count++
	  console.log(count)
	  // showQuestion = setInterval(nextQuestion, 10000);

	  time = 10

	  $('#choice-list').empty();
	  // $('#choice-list').show();

	  var newList = $('#choice-list');

		// var l = questionArray[count] ? questionArray[count].choices.length : 0;

		if (questionArray[count]) {

		  $('#question').html(questionArray[count].question);

		  for (var i = 0; i < questionArray[count].choices.length; i++) {
		  	var choice = $("<li>" + questionArray[count].choices[i] + "</li>" + "<br />");
		  	choice.attr('data-value', questionArray[count].choices[i]);

		  	choice.on('click', function () {
		  		console.log($(this).attr('data-value'));
		  		console.log(questionArray[count].answer);

		  		// time = 10;

		  		if ($(this).attr('data-value') === questionArray[count].answer) {
		  			
		  			correct++;
		  			// $('#choice-list').hide();
		  			nextQuestion();
		  			console.log('this is correct ' + correct);
		  			
		  		} else {
		  			
		  			nextQuestion();
		  			// alert('wrong!');
		  			
		  		}

		  		if (questionArray[count]) { 

			  		clearInterval(showQuestion);
			  		console.log('inside function ' + showQuestion);
			  		showQuestion = setInterval(nextQuestion, 10000);

			  	} else {
			  		clearInterval(showQuestion);
			  	}
		  		
		  	});	    

		  	$('#choice-list').append(choice);
		  	
		  }

		} else {
			
			resetGame();	
				
		}	 

	}

	function resetGame() {
      
      $('#question').html("");

	  		alert(`You got ${correct} out of 5`);
	  		time = 10;
	 	    // clockRunning = false;
	  		correct = 0;
	  		$('#startButton').show();
	  		clearInterval(showQuestion);
	  		clearInterval(startTime);
	  		$('#time').html("");
	  		console.log('reset game');
	  		console.log('inside resetGame ' + showQuestion);

	}

	function timer() {

		var converted = timeConverter(time);
		
		$('#time').html(converted);

		time--;
	  
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

});

function hideImage() {
	$('#image').hide();
}

function resetInterval() {
	setInterval(nextQuestion, 10000)
}





