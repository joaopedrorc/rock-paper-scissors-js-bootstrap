function rpsGame(yourChoice){
    console.log(yourChoice)

    var humanChoice, botChoice
    humanChoice = yourChoice.id

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice: ', botChoice)
    
    result = decideWinner(humanChoice, botChoice) // [0, 1] huma lost, bot won
    console.log(result)

    message = finalMessage(result) // {'message':You Won', 'color': 'green'}
    console.log(message)

    rpsFrontEnd(yourChoice.id, botChoice, message)

}

function randToRpsInt(){
    return Math.floor(Math.random() * 3)
}


function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number]
}


function decideWinner(yourChoice, computerChoice) {
    var rapsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rapsDatabase[yourChoice][computerChoice]
    var computerScore = rapsDatabase[computerChoice][yourChoice]

    return [yourScore, computerScore];
}


function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {'message': 'You Lost!', 'color': 'red'}
    }else if (yourScore === 0.5){
        return {'message': 'You Tide!', 'color': 'yellow'}
    }else{
        return {'message': 'You Won!', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'scissors': document.getElementById('scissors').src,
        'paper': document.getElementById('paper').src,
        'rock': document.getElementById('rock').src
    }

    // remove all the images 
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var message = document.createElement('div')
    
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' heigth=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' heigth=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    message.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(message)
    document.getElementById('flex-box-rps-div').appendChild(botDiv)

}