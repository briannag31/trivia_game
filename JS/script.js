const $gk = $(".gk")
const $music = $(".music")
const $history = $(".history")
const $television = $(".television")
const $science = $(".science")
const $celebrities = $(".celebrities")
const $play = $(".play")
const $playGame = $(".play-game")
const $submitOne = $(".one")
const $submitTwo = $(".two")
const $alert = $(".alert")


const $gamePlay = $play.on("click", () =>{
    $playGame.css("visibility", "visible")
    $play.css("visibility", "collapse")
    $(".current-team").text("Team One goes first!")
})

const gkSelect = $gk.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=1&category=9&difficulty=easy")
    .then((data) =>{
       let question = JSON.stringify(data.results[0].question)
       let rightAnswer= JSON.stringify(data.results[0].correct_answer)
       let incorrectAnswers = JSON.stringify(data.results[0].incorrect_answers)
       let result = data.results
    
    //    console.log(result)
       
       const choice = $.map(data.results[3], function(val, key) { return val; });

       console.log(choice)
    //    = [0].filter(opt => opt.key === "incorrect_answers")
    //    [choice].val();
    console.log(Object.values(data.results.incorrect_answers));
    //    result.filter(function(opt) {
    //     return opt.key === 'incorrect_answers';
    //   })[0].val();
    
    // console.log(choice)
    // let wrong = [];
    // const propertyValues = wrong.values(data.results[0].incorrect_answers);
    // wrong.push(incorrectAnswers)
    // wrong.push(rightAnswer)

// console.log(wrong);
        $(".triviaQuestion").html(`<h4>Question: ${question}</h4>`)
        // $(".options").html(`<h5> Choose one of the following: ${options}</h5>`)
    })   
})
const musicSelect = $music.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=1&category=12&difficulty=easy")
    .then((data) =>{
       let question = JSON.stringify(data.results[0].question)
       let rightAnswer = [];
       rightAnswer= JSON.stringify(data.results[0].correct_answer)
       let incorrectAnswers = JSON.stringify(data.results[0].incorrect_answers)
       let options = new Array()
       options.push(rightAnswer, incorrectAnswers)
        $(".triviaQuestion").html(`<h4>Question: ${question}</h4>`)
        $(".options").html(`<h5> Choose one of the following: ${options}</h5>`)
    }) 
})

const televisionSelect = $television.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=1&category=14&difficulty=easy")
    .then((data) =>{
       let question = JSON.stringify(data.results[0].question)
       let rightAnswer = [];
       rightAnswer= JSON.stringify(data.results[0].correct_answer)
       let incorrectAnswers = JSON.stringify(data.results[0].incorrect_answers)
       let options = new Array()
       options.push(rightAnswer, incorrectAnswers)
        $(".triviaQuestion").html(`<h4>Question: ${question}</h4>`)
        $(".options").html(`<h5> Choose one of the following: ${options}</h5>`)
    }) 
})
const historySelect = $history.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=1&category=23&difficulty=easy")
    .then((data) =>{
       let question = JSON.stringify(data.results[0].question)
       let rightAnswer = [];
       rightAnswer= JSON.stringify(data.results[0].correct_answer)
       let incorrectAnswers = JSON.stringify(data.results[0].incorrect_answers)
       let options = new Array()
       options.push(rightAnswer, incorrectAnswers)
        $(".triviaQuestion").html(`<h4>Question: ${question}</h4>`)
        $(".options").html(`<h5> Choose one of the following: ${options}</h5>`)
    })
})

const scienceSelect = $science.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=1&category=17&difficulty=easy")
    .then((data) =>{
       let question = JSON.stringify(data.results[0].question)
       let rightAnswer = [];
       rightAnswer= JSON.stringify(data.results[0].correct_answer)
       let incorrectAnswers = JSON.stringify(data.results[0].incorrect_answers)
       let options = new Array()
       options.push(rightAnswer, incorrectAnswers)
        $(".triviaQuestion").html(`<h4>Question: ${question}</h4>`)
        $(".options").html(`<h5> Choose one of the following: ${options}</h5>`)
    })
})

const celebritiesSelect = $celebrities.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=1&category=26&difficulty=easy")
    .then((data) =>{
       let question = JSON.stringify(data.results[0].question)
       let rightAnswer = [];
       rightAnswer= JSON.stringify(data.results[0].correct_answer)
       let incorrectAnswers = JSON.stringify(data.results[0].incorrect_answers)
       let options = new Array()
       options.push(rightAnswer, incorrectAnswers)
        $(".triviaQuestion").html(`<h4>Question: ${question}</h4>`)
        $(".options").html(`<h5> Choose one of the following: ${options}</h5>`)
    })
})



// user sees home screen (title, how to play, and let's play button)
//User clicks let's play and second half of screen shows up
//message says team one goes first, team 2 div greyed out?
//team one selects category
//category click value data to API url
//first API call gives us the first question
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
// 	Pop up box saying which team wins!
// 	Restart game button 
//make how to play image as big as the screen




