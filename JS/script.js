const $gk = $(".gk")
const $music = $(".music")
const $history = $(".history")
const $television = $(".television")
const $science = $(".science")
const $celebrities = $(".celebrities")
const $play = $(".play")
const $submitOne = $(".one")
const $submitTwo = $(".two")


// const gkSelect = $gk.on("click", () => {
//     $.ajax(`https://opentdb.com/api.php?amount=9&difficulty=easy`)
//     .then((data) => {
//         $("aside").html(`<h4>${data.question}</h4>)

const gkSelect = $gk.on("click", () => {
    $.ajax("https://opentdb.com/api.php?amount=9&difficulty=easy")
    .then((data) =>{
        let $answer = JSON.stringify(data.results.question)
        $(".question").html(`<h4>Question: ${$answer}</h4>`)
        console.log(object)
        // $(".answers").html(`<h4>${data.results.question}</h4>`)
    })
    console.log(gkSelect)
})

const musicSelect = $music.on("click", () => {
    $.ajax(`https://opentdb.com/api.php?amount=$12&difficulty=easy`);
    console.log(musicSelect)
})
const historySelect = $history.on("click", () => {
    $.ajax(`https://opentdb.com/api.php?amount=23&difficulty=easy`)
})
const televisionSelect = $television.on("click", () => {
    $.ajax(`https://opentdb.com/api.php?amount=14&difficulty=easy`)
})
const scienceSelect = $science.on("click", () => {
    $.ajax(`https://opentdb.com/api.php?amount=17&difficulty=easy`)
})
const celebritiesSelect = $celebrities.on("click", () => {
    $.ajax(`https://opentdb.com/api.php?amount=26&difficulty=easy`)
})




// user sees home screen (title, how to play, and let's play button)
//User clicks let's play and second half of screen shows up
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





