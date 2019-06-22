// Definining enemy properties
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
};
// Definining player properties
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
};
// creating player object
var player = new Player(200, 400);
//Assigning the postions of enemies
var enemyPosition = [60, 145, 230];
// array to store properties of all enemies
var allEnemies = [];
//Assigning propertis to each enemy
enemyPosition.filter(function(p) {
  minspeed = 40;
  maxspeed = 180;
  var rand = Math.random() * (maxspeed - minspeed) + minspeed;
  var enemy = new Enemy(0, p, rand);
  allEnemies.push(enemy);
})
// function to update the enemy's properties continuously
Enemy.prototype.update = function(dt) {
  this.x = this.x + this.speed * dt;
  // Action to be performed if the enemy crosses the board
  if (this.x > 505) {
    this.x = 0;
  }
  //checking the collision of player and the bug
  if (player.x < this.x + 70 && player.x + 70 > this.x && player.y < this.y + 63 && player.y + 63 > this.y) {
    lose()
  }
};
// Function to move the player to adjacent grids during key presses
player.handleInput = function(key) {
  if (key == 'left' && this.x > 10) {
    this.x -= 100;
  } else if (key == 'right' && this.x < 400) {
    this.x += 100;
  } else if (key == 'up' && this.y > 10) {
    this.y -= 82;
  } else if (key == 'down' && this.y < 400) {
    this.y += 82;
  }
  // checking the winning position
  if (this.y < 60) {
    win()
  }
}
Player.prototype.update = function(dt) {

};
// Function to display enemy images
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Function to display player image
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Function to add KeyEventListener to the player
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
// Function that runs if collision occurs
function lose() {
  swal({
    allowEscapeKey: false,
    allowOutsideClick: false,
    html: true,
    title: 'Sorry You have lost the game',
    type: 'warning',
    confirmButtonText: 'Do you replay game?'
  }, function() {
    //operation that has to be performed after clicking the button
    location.reload();
  })
}
// Function that executes if the player wins
function win() {
  swal({
    allowEscapeKey: false,
    allowOutsideClick: false,
    html: true,
    title: 'Congratulations You Have Won The Game',
    type: 'success',
    confirmButtonText: 'Play Again'
  }, function() {
    //operation that has to be performed after clicking the button
    location.reload();
  })
}
