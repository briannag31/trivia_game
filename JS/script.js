const $submit = $(".submit")
const $textInput = $("[type='text']")
const $intro = $(".intro")
const $reset = $(".reset")
const $triviaQuestion = $(".triviaQuestion")
const $options = $(".options")


const $gamePlay = function games(data){
    $(".team-data").css("visibility", "visible");
    $reset.css("visibility", "visible");
    $('.category').attr('disabled','disabled');
    const $correctAnswer = data.results[0].correct_answer
    $triviaQuestion.html(`<h2>Question: ${data.results[0].question}</h2>`);
    let choices = [];
    choices.push(data.results[0].incorrect_answers[0],data.results[0].incorrect_answers[1], data.results[0].incorrect_answers[2], data.results[0].correct_answer);
    function randomizeAnswers(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
    randomizeAnswers(choices);
    $options.html(`<h2>Choose one of the following:</h2><h3>${choices[0]}, ${choices[1]}, ${choices[2]}, ${choices[3]}</h3>`)
    $submit.on("click", () =>{    
      let answer = $textInput.val()
      if (answer === $correctAnswer){
       $intro.css("visibility", "hidden");
       $triviaQuestion.html("<img src='https://i.imgur.com/gepq7Ws.png?1'> <br> <button class='next-question'><img src= 'https://i.imgur.com/zfADrn1.png?1'></button>")
       $options.css("visibility", "hidden");
        $textInput.val("")
        $(".team-data").css("visibility", "hidden");
        $(".next-question").on("click", () =>{
            location.reload()
            })
    } else {
        $triviaQuestion.html("<img src='https://i.imgur.com/WfKDJO4.png?1'> <br> <button class='try-again'> <img src='https://i.imgur.com/VizM3YB.png?1'></button>")
       $options.css("visibility", "hidden");
        $textInput.val("")
        $(".team-data").css("visibility", "hidden");
        $(".try-again").on("click", () =>{
            $(".triviaQuestion").html(`<h2>Question: ${data.results[0].question}</h2>`)
            $options.css("visibility", "visible");
            $(".team-data").css("visibility", "visible");
            })
    }
    })
}

const resetGame = $reset.on("click", () =>{
    location.reload()
})

const categories = $('button.category').on('click',function(){
  const butn = $(this).attr('value')
   $.ajax(`https://opentdb.com/api.php?amount=1&category=${butn}&difficulty=easy&type=multiple`)
        .then($gamePlay)
}).catch((error) => {
    alert("Error - try again!");
    console.log(error)
})



