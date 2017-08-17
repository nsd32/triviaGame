
$(document).ready(function() {

	function Question(question, answer, choices, pictures) {

		this.question = question;
		this.answer = answer;
		this.choices = choices;
		this.pictures = pictures;

	}

	var question1 = new Question("What is Kramer's first name?", "Cosmo", ["Joe", "Frank", "Cosmo", "Xavier"], ["assets/images/cosmo-kramer.jpg", "assets/images/wrong.png"]);
	var question2 = new Question("What catalog did Elaine run when her boss moved to Burma?", "J. Peterman", ["L.L. Bean", "Pottery Barn", "Victoria's Secret", "J. Peterman"], ["assets/images/jpeterman.png", "assets/images/wrong.png"]);
	var question3 = new Question("If George were a porn star, what did he say his name would be?", "Buck Naked", ["Buck Naked", "Ron Jeremy", "Hugh Johnson", "Peter Dong"], ["assets/images/costanza.jpg", "assets/images/wrong.png"]);
	var question4 = new Question("Where do Jerry's parents live?", "Florida", ["Queens", "Florida", "New Jersey", "Brooklyn"], ["assets/images/parents.jpeg", "assets/images/wrong.png"]);
	var question5 = new Question("Who is Jerry's nemisis in the building?", "Newman", ["The super", "Kramer", "Manny", "Newman"], ["assets/images/newman.jpeg", "assets/images/wrong.png"]);

	var questionArray = [question1, question2, question3, question4, question5];

	var showQuestion;
	var startTime;
	var count;
	var correct = 0;
	var time = 10;
	var tenSeconds = timeConverter(time);
	$('#time').html(tenSeconds);

	if (time === 0) {
	  	nextQuestion();
	}

	$('#startButton').click(function () {
		
		showQuestion = setInterval(nextQuestion, 10000);
	    startTime = setInterval(timer, 1000);
		$('#startButton').hide();
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

	  		clearIntervals();
	  		setTimeout(setIntervals, 5000);
	  		$('#choice-list').hide();
	  		
	  		setTimeout(hideImage, 5000);
	  		setTimeout(nextQuestion, 5000);

	  		if ($(this).attr('data-value') === questionArray[count].answer) {
	  			
	  			correct++;
	  			
	  			$('#image').attr('src', questionArray[count].pictures[0]);
	  			
	  		} else {	
	  			
	  			$('#image').attr('src', questionArray[count].pictures[1]);
	  			
	  		}

	  		$('#image').show();

	  	});

	  	choiceDiv.append(choice);

	  }

	}

	function nextQuestion() {
	  console.log('nextQuestion ran')
	  count++
	  console.log(count);
	  $('#time').html(tenSeconds);

	  time = 10;

	  $('#choice-list').empty();
	  $('#image').attr('src', '');

		// var l = questionArray[count] ? questionArray[count].choices.length : 0;

		if (questionArray[count]) {

		  $('#question').html(questionArray[count].question);

		  for (var i = 0; i < questionArray[count].choices.length; i++) {
		  	var choice = $("<li>" + questionArray[count].choices[i] + "</li>" + "<br />");
		  	choice.attr('data-value', questionArray[count].choices[i]);

		  	choice.on('click', function () {
		  		console.log($(this).attr('data-value'));
		  		console.log(questionArray[count].answer);

		  		$('#choice-list').hide();
		  		clearIntervals();
	  		    setTimeout(setIntervals, 5000);
		  		
	  			setTimeout(hideImage, 5000);
	  			setTimeout(nextQuestion, 5000);	

		  		if ($(this).attr('data-value') === questionArray[count].answer) {
		  			
		  			correct++;
		  			
	  				$('#image').attr('src', questionArray[count].pictures[0]);		
		  			
		  		} else {
		  			
	  				$('#image').attr('src', questionArray[count].pictures[1]);
	  						  			
		  		}

		  		$('#image').show();
		  		
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
	  		correct = 0;
	  		$('#startButton').show();
	  		clearInterval(showQuestion);
	  		clearInterval(startTime);
	  		$('#time').html(tenSeconds);
	  		console.log('reset game');
	  		console.log('inside resetGame ' + showQuestion);

	}


	function timer() {
		
		time--;
		var converted = timeConverter(time);
		$('#time').html(converted);
		console.log(time);

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

	function hideImage() {

	  $('#image').hide();
	  console.log('hideImage ran');
	  $('#choice-list').show();

    }

    function clearIntervals() {

	  clearInterval(showQuestion);
	  clearInterval(startTime);
	  
    }

    function setIntervals() {

      showQuestion = setInterval(nextQuestion, 10000);
	  startTime = setInterval(timer, 1000);

    }

});











