var possibleKicks = [0,1];

var teams1 = {
    name:"",
    goals:[],
    score:0
}

var teams2 = {
    name:"",
    goals:[],
    score:0
}

var turn,goal;

window.onload = () => {
    updateName();
    selectTurn();
    updateButtonText();
    updateScore();
    updateGoals();
}

var selectTurn = () => {
    turn = Math.round(Math.random()+1);
}

var kickButton = () => {
    goal = Math.round(Math.random());
    if(turn == 1)
    {
        teams1.goals.push(goal);
        teams1.score = calculateScore(teams1.goals);
    }
    else
    {
        teams2.goals.push(goal);
        teams2.score = calculateScore(teams2.goals);
    }
    updateButtonText();
    updateGoals();
    updateScore();
}

var updateButtonText = () => {
    var button = document.getElementById("button");
    var result = document.getElementById("result");
    var playagain = document.getElementById("playagain");
    result.style.visibility="";
    playagain.style.display="none";
    if(teams1.goals.length === 5 && teams2.goals.length === 5)
    {
        button.remove();
        result.textContent = teams1.score === teams2.score ? 'It is Draw' : `${teams1.score > teams2.score ? teams1.name : teams2.name} wins` ;
        playagain.style.display="block";
    }
    else
    {
        turn = teams1.goals.length ==  5 ? 2 : teams2.goals.length == 5 ? 1 : turn;
        button.textContent = `${turn == 1 ? teams1.name : teams2.name} Goal`;
    }
}

var updateName = () => {
    document.getElementById("name1").textContent = "SPAIN";
    document.getElementById("name2").textContent = "GERMANY";
    teams1.name = "SPAIN";
    teams2.name = "GERMANY";
}

var calculateScore =(goals) => {
    return goals.reduce( (total, goal) => total + goal)
}

var updateScore = () => {
    document.getElementById("score1").textContent = teams1.score;
    document.getElementById("score2").textContent = teams2.score;
}

var updateGoals = () => {
    var team1Goals = document.getElementById("team1Goals").children;
    var team2Goals = document.getElementById("team2Goals").children;
    teams1.goals.forEach((goals,index) => {
        team1Goals[index].textContent = goals;
    })
    teams2.goals.forEach((goals,index) => {
        team2Goals[index].textContent = goals;
    })
}

var pageRefresh = () => {
    location.reload();
}
