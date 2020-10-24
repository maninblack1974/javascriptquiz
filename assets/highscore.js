//Declaring my variables

var scoreList = document.querySelector("#highscore-list");
var highscores = {
    initials : [],
    scores : [],
}

//Pulling the high scores stored locally so they can be stored on the page HIGH Score page
function getScores() {
    var storedHighscoresString = localStorage.getItem("highscores");

    if (storedHighscoresString !== null) {
        var storedHighscores = JSON.parse(storedHighscoresString);
        highscores.initials = storedHighscores.initials;
        highscores.scores = storedHighscores.scores;
    }
    else {
        highscores.initials = [];
        highscores.scores = [];
    }
}

function renderScores() {
    scoreList.innerHTML = "";
    
    getScores();

    for (var i = 0; i < highscores.initials.length; i++) {
        var listEl = document.createElement("li");
        var pEl = document.createElement("p");
        pEl.setAttribute("class", "highscore");
        pEl.textContent = (i + 1) + ". " + highscores.initials[i] + " - " + highscores.scores[i];
        
        listEl.appendChild(pEl);
        scoreList.appendChild(listEl);
    }
}

//Saving the users high scores
function saveScore(newInitials, newScore) {
    getScores();
    
    highscores.initials.push(newInitials);
    highscores.scores.push(newScore);

    var highscoresString = JSON.stringify(highscores);
    localStorage.setItem("highscores", highscoresString);
}

//Clearing the Users High scores
function clearScores() {
    localStorage.removeItem("highscores");
    renderScores();
}

if (scoreList !== null) {
    renderScores();
}