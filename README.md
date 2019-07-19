# A-SIMPLE-MEMORY-GAME
## Table of Contents

* [About Memory Game](#)
* [Instructions](#instructions)
* [Game dependencies](#)

### About Memory Game

This game contains a deck of cards with different symbols. This deck contain 8 pair of matching cards. These cards are arranged in a shuffled manner. The symbols on these cards are hidden (turned face down). The symbols are made visible only when we make a mouse click on the card. We need to match the cards based on the symbols in less time and less moves. This game test the memory capabilities of the players.

### Instructions

* There are 3 main files: one HTML file, CSS file and JavaScript file.
* All major changes are made in the JavaScript file (`js/app.js`).
* `function shuffle(array)` shuffles the position of each card every time we start a new game.
* `function popmsg()` contains the code for message poping up functionality.
* `function restart()` is called each time for restarting the game.
* `function startClock ()` and `function stopClock ()` are used for timer functionality (to know the duration of play).
* `moveCount` variable stores the number of moves made by the player before winning.
* `starCount` variable stores the star ranking the player get.
* The star rating describes about the performance of the player.
* All styling is done in the `css/app.css`.   
* The game terminates when all cards are matched.
* After winning a game, a model appears displaying the congratulation message. The model also contain a `Play again` button.
* There is a score panel before the deck of cards. The score panel contains the following:
     * The number of moves the player has made.
     * The total time taken by the player.
     * The number of stars that are active.
     * and finally a restart button.
* As the number of moves increases the star rating decreases. The highest star rating is 3 stars and the lowest is 1 star.     


### Game dependencies

The icons for this game are taken from the following website:
* https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css

Google fonts:
* https://fonts.googleapis.com/css?family=Coda

The game uses HTML, CSS and JavaScript.
