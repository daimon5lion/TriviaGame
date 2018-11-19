$(document).ready(function() {
  $("#resetb").hide();
  $("#opt1").hide();
  $("#opt2").hide();
  $("#opt3").hide();
  $("#opt4").hide();

  var rightCount = 0;
  var wrongCount = 0;
  var unanswerCount = 0;
  var intervalId;
  var timer = 20;
  var yourChose = "";
  var running = false;

  var questions = [
    {
      q1: "Which country hosted the 1966 World Cup?",
      options: ["Brazil", "England", "Italy", "Uruguay"],
      answer: 1
    },
    {
      q2:
        "Who scored the highest number of goals in World Cups 2002 and 2006 combined?",
      options: [
        "Alan Shearer",
        "David Beckham",
        "Michael Owen",
        "Luis Ronaldo"
      ],
      answer: 3
    },
    {
      q3: "When Brazil win the World Cup in 2002 it was their _____ triumph.",
      options: ["7th", "8th", "5th", "6th"],
      answer: 2
    },
    {
      q4: "Which team has won the most World Cup games from 1930 to 2002?",
      options: ["Brazil", "England", "Italy", "Uruguay"],
      answer: 0
    },
    {
      q5: "What country won the 1998 World Cup?",
      options: ["Brazil", "England", "France", "Uruguay"],
      answer: 2
    },
    {
      q6:
        "When the Bafana Bafana were chosen as the hosts of the 2010 World Cup they became the first African nation to be given that honor.",
      options: ["Cameroon", "South Africa", "Egypt", "Brazil"],
      answer: 1
    }
  ];

  var rightCount = 0;
  var wrongCount = 0;
  var unanswerCount = 0;
  var intervalId;
  var timer = 20;
  var yourChose = "";
  var running = false;

  $("#startb").on("click", function() {
    $("#startb").hide();
    $("#wcup").hide();
    showQ1();
    runTimer();
  });

  function showQ1() {
    $("#qsection").html("<h3>Which country hosted the 1966 World Cup?</h3>");
    
  }
});
