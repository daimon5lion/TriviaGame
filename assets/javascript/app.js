$(document).ready(function() {
  $("#resetb, #winner, #loser, #timeup").hide();
  $("#opt1, #opt2, #opt3, #opt4").hide();

  var questions = [
    {
      question: "Which country hosted the 1966 World Cup?",
      option: ["Brazil", "England", "Italy", "Uruguay"],
      answer: 0
    },
    {
      question:
        "Who scored the highest number of goals in World Cups 2002 and 2006 combined?",
      option: ["Alan Shearer", "David Beckham", "Michael Owen", "Luis Ronaldo"],
      answer: 3
    },
    {
      question:
        "When Brazil win the World Cup in 2002 it was their _____ triumph.",
      option: ["7th", "8th", "5th", "6th"],
      answer: 2
    },
    {
      question:
        "Which team has won the most World Cup games from 1930 to 2002?",
      option: ["Brazil", "England", "Italy", "Uruguay"],
      answer: 0
    },

    {
      question: "What country won the 1998 World Cup?",
      option: ["Brazil", "England", "France", "Uruguay"],
      answer: 2
    },
    {
      question:
        "When the Bafana Bafana were chosen as the hosts of the 2010 World Cup they became the first African nation to be given that honor.",
      option: ["Cameroon", "South Africa", "Egypt", "Brazil"],
      answer: 1
    }
  ];

  var rightCount = 0;
  var wrongCount = 0;
  var unanswerCount = 0;
  var intervalId;
  var timer = 10;
  var yourChoice = "";
  var running = false;
  var qCount = questions.length;
  var pick;
  var index;
  var newArray = [];
  var qholder = [];

  $("#startb").on("click", function() {
    $("#startb").hide();
    $("#wcup").hide();
    showQuestions();
    runTimer();
    for (var i = 0; i < questions.length; i++) {
      holder.push(quetstions[i]);
    }
  });

  function runTimer() {
    if (!running) {
      intervalId = setInterval(decrement, 1000);
      running = true;
    }
  }

  function decrement() {
    $("#tremain").html("<h3>Time remaining: " + timer + "</h3>");
    timer--;
    if (timer === 0) {
      unanswerCount++;
      stop();
      //$("#tremain").hide();
      $("#qsection").html(
        "<p>Your time is up! The correct answer is:" +
          pick.option[pick.answer] +
          "</p>"
      );
      $(".answerchoice").hide();
      finish();
    }
  }

  function stop() {
    running = false;
    clearInterval(intervalId);
  }

  function showQuestions() {
    index = Math.floor(Math.random() * questions.length);
    pick = questions[index];

    $("#qsection").html(pick.question);
    for (var i = 0; i < pick.option.length; i++) {
      var userChoice = $("<div>");
      userChoice.addClass("answerchoice");
      userChoice.html(pick.option[i]);
      userChoice.attr("data-guessvalue", i);
      $("#asection").append(userChoice);
    }

    //////////////////////////////////

    $(".answerchoice").on("click", function() {
      //grab array position from userGuess
      yourChoice = parseInt($(this).attr("data-guessvalue"));

      //correct guess or wrong guess outcomes
      if (yourChoice === pick.answer) {
        stop();
        rightCount++;
        yourChoice = "";
        $("#qsection").html("<p>Correct!</p>");
        $(".answerchoice").hide();
        finish();
      } else {
        stop();
        wrongCount++;
        yourChoice = "";
        $("#qsection").html(
          "<p>Wrong! The correct answer is: " +
            pick.option[pick.answer] +
            "</p>"
        );
        $(".answerchoice").hide();
        finish();
      }
    });
  }

  function finish() {
    newArray.push(pick);
    questions.splice(index, 1);

    var hidpic = setTimeout(function() {
      $("#asection").empty();
      timer = 10;

      //run the score screen if all questions answered
      if (wrongCount + rightCount + unanswerCount === qCount) {
        $("#qsection").empty();
        $("#qsection").html("<h3>Game Over!  Here's how you did: </h3>");
        $("#asection").append("<h4> Correct: " + rightCount + "</h4>");
        $("#asection").append("<h4> Incorrect: " + wrongCount + "</h4>");
        $("#asection").append("<h4> Unanswered: " + unanswerCount + "</h4>");
        $("#resetb").show();
        rightCount = 0;
        wrongCount = 0;
        unanswerCount = 0;
      } else {
        runTimer();
        showQuestions();
      }
    }, 3000);
  }

  $("#resetb").on("click", function() {
    $("#resetb").hide();
    $("#asection").empty();
    $("#qsection").empty();
    for (var i = 0; i < qholder.length; i++) {
      questions.push(qholder[i]);
    }
    runTimer();
    showQuestions();
  });
});
