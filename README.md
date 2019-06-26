# Classic Arcade Game Clone Project
The player has to reach target by avoiding bugs
## Table of Contents

- [Instructions](#instructions)
- [Download Scratch Files](#Download-Scratch-Files)
- [How to Run the game](#Run-The-Game)
- [How to Play the game](#Play-The-Game)
- [How to develop the game](#How-to-develop-the-game)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are `object-oriented` - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.
For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


## Download Scratch Files
**LINK:** https://github.com/udacity/frontend-nanodegree-arcade-game.
You won’t have to build the game from scratch. We have provided the art assets and gameengine for you. You can download or clone them from our repository.
The repository contains `css`, `images`, and `js` folders, as well as an `index.html` and a `README.md file`.
● The css folder contains a `style.css` file which you do not need to edit.
● The `images` folder contains the png image files, which are used when displaying the.
game. The images for the player and enemy character are going to be loaded from
this folder.
● The js folder also contains the app engine needed to run the game and a
`resources.js` file. You do not need to edit these files.
● Opening `index.html` should load the game.
● The `README.md` file should contain instructions on how to load and play the game
(you will need to add those instructions).
● Once you have downloaded the files we have provided, you will have to edit `app.js` to build the game.
## How to run the game
* After Extracting the scratch project open the `index.html` .
* After inspecting, it will display some errors in the console.
* Resolve the errors one by one by making the necessary changes in the corresponing source file.
* Then observe the output by executing `index.html`.
* Continue this process until all the errors are removed.
## How to play the game
* click up,down,left and right arrows to move the player so that you do not touch the enemy bugs.
## How to develop the game
* Initially the player is to be displayed on the canvas in an appropriate position.
* Add movement to the player by using `handleInput()` function.
* Fix the coordiates for the player cannot move out of the canvas.
* Create enemy bugs with properties such as position and speed.
* Apply collision properties for the bugs.
* Add Win condition to the player
## Contributing
This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
