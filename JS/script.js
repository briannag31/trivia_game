const $gk = $(".gk")
const $music = $(".music")
const $history = $(".history")
const $television = $(".television")
const $science = $(".science")
const $celebrities = $(".celebrities")
const $play = $(".play")
const $playGame = $(".play-game")
const $submitOne = $(".submit-one")
const $submitTwo = $(".submit-two")
const $textInput = $("[type='text']")
const $intro = $(".intro")
const $reset = $(".reset")
const $correct = $(".correct")
const $triviaQuestion = $(".triviaQuestion")
const $options = $(".options")
const $gamePlay = function games(data){
    $('.category').attr('disabled','disabled');
    const $correctAnswer = data.results[0].correct_answer
    $(".triviaQuestion").html(`<h2>Question: ${data.results[0].question}</h2>`)
    $(".options").html(`<h3>Choose one of the following: ${data.results[0].incorrect_answers[0]},  ${data.results[0].incorrect_answers[1]},  ${data.results[0].incorrect_answers[2]},  ${data.results[0].correct_answer}</h3>`)
    const submitEntry = $submitOne.on("click", () =>{
        let answer = $(".team-one-answer").val()
        console.log(answer)
      if (answer === $correctAnswer){
       $intro.css("visibility", "hidden");
       $triviaQuestion.html("<img src='https://i.imgur.com/gepq7Ws.png?1'> <br> <button class='next-question'>Next Question</button>")
       $options.css("visibility", "hidden");
        $textInput.val("")
        $(".team-data").css("visibility", "hidden");
        const nextQ = $(".next-question").on("click", () =>{
            location.reload()
            })
    } else {
        $triviaQuestion.html("<img src='https://i.imgur.com/WfKDJO4.png?1'> <br> <button class='try-again'>Let's try again</button>")
       $options.css("visibility", "hidden");
        $textInput.val("")
        $(".team-data").css("visibility", "hidden");
        const tryAgain = $(".try-again").on("click", () =>{
            $(".triviaQuestion").html(`<h2>Question: ${data.results[0].question}</h2>`)
            $options.css("visibility", "visible");
            $(".team-data").css("visibility", "visible");
            })
        // alert("Whomp")
        // $textInput.val("")
    }
    })
}

const gkSelect = $gk.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple")
    .then($gamePlay)
     })

const musicSelect = $music.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple")
    .then($gamePlay)
    })

const televisionSelect = $television.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=1&category=14&difficulty=easy&type=multiple")
    .then($gamePlay)
     })
        
const historySelect = $history.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=multiple")
    .then($gamePlay)
    })
const scienceSelect = $science.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple")
    .then($gamePlay)
     })

const celebritiesSelect = $celebrities.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=1&category=26&difficulty=easy&type=multiple")
    .then($gamePlay)
     })

const resetGame = $reset.on("click", () =>{
    location.reload()
})







// user sees home screen (title, how to play, and let's play button) -done
//User clicks let's play and second half of screen shows up -done
//message says team one goes first, team 2 div greyed out?
//team one selects category - done
//category click value data to API url -done
//first API call gives us the first question -done
// Loop:
// Team one adds their answer and clicks submit
// Get value of the text box and compare it to the correct answer
// Text box is cleared
// If correct answer, give team one point (render); if incorrect, alert wrong answer

// 	Pop up box noting it is team two’s turn - how to do this?
// Click next question
//team two selects a category
// API call for question
// Team two adds their answer and clicks submit
// Get value of the text box and compare it to the correct answer
//Text box is cleared
// If correct answer, give team two point (render); if incorrect, alert wrong answer
// 	Pop up box noting it is team one's turn - how to do this?
// Loop ends when one of the teams gets to 5

// 	Restart game button  <button type="reset" value="Reset">Reset</button>
//make how to play image as big as the screen




