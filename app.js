// import functions and grab DOM elements
import { renderGame } from './render-utils.js';

const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameForm = document.getElementById('name-form');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');

const finishGameButton = document.getElementById('finish-game-button');

const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');

// create an array to hold on to the state of past games

let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;
let pastGamesArray = [];

nameForm.addEventListener('submit', (e) => {
    // don't forget to prevent the default form behavior!
    e.preventDefault();

    // get the name data from the form
    const data = new FormData(nameForm);

    // set the state to this data from the form
    name1 = data.get('team-one');
    name2 = data.get('team-two');

    // reset the form values
    nameForm.reset();

    score1 = 0;
    score2 = 0;

    displayCurrentGameEl();
});


teamOneAddButton.addEventListener('click', () => {
    // increment the current state for team one's score
    score1++;
    
    displayCurrentGameEl();});

teamTwoAddButton.addEventListener('click', () => {
    // increment the current state for team two's score
    score2++;

    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    // decrement the current state for team one's score
    score1--;

    displayCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    // decrement the current state for team two's score
    score2--;

    displayCurrentGameEl();
});

finishGameButton.addEventListener('click', () => {
    
    // add the current game to an array of games in state.
    let currentGameObject = {
        name1: name1,
        name2: name2,
        score1: score1,
        score2: score2,
    };

    //push our current game object in the array of past games
    pastGamesArray.push(currentGameObject);
    console.log(pastGamesArray);

    // HINT: it will be helpful to keep track of these games as objects with 4 properties, one for each piece of state we're tracking

    displayAllGames();

    // reset the initial state to start with a new form
    name1 = '';
    name2 = '';
    score1 = 0;
    score2 = 0;
    

    displayCurrentGameEl();
});


function displayCurrentGameEl() {
    // clear out the current game div
    currentGameEl.textContent = ''; //??????????????????????/

    // change the label to show team one's name;
    teamOneLabel.textContent = name1;

    // change the label to show team two's name;
    teamTwoLabel.textContent = name2;

    // call the render game function to create a game element

    //first create an object representing the state of the current game
    let currentGameObject = {
        name1: name1,
        name2: name2,
        score1: score1,
        score2: score2,
    };

//call the renderGame function with the currentGameObject which returns a bunch of HTML elements with your data. Set those elements to a const
    const gameDataDiv = renderGame(currentGameObject);
    console.log(gameDataDiv);


    
    // append the element to the cleared out current game div
    //append to the currentGameEl the gameDataDiv returned by renderGam
    currentGameEl.append(gameDataDiv);
}


function displayAllGames() {
    // clear out the past games list in the DOM
    pastGamesEl.textContent = '';


    // loop through the past games in state
    // render and append a past game for each past game in state
    for (let gameObject of pastGamesArray) {
        pastGamesEl.append(renderGame(gameObject));
    }
}


// displayCurrentGameEl();
