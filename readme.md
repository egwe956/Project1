**_WELCOME TO KIDS PONG_**

#Section 1 - The Why - my gripes with the original pong game

- because the colours were in just black and white, it can be hard to tell which paddle you are operating
- The AI on the opponent paddle in the original game can be too strong for a kid to play.
- The original game did not have music.
- I wanted to know how to create logic for a frontend application and this project has helped me understand that.

#Section 2 - The How - How I went about doing the project
I am familiar with small game projects on Unity, so I decided to try and use a 2d context canvas to create my game.
I also chose this as I disliked the approach of using CSS to create a display GUI.

#Section 3 - Problems Encountered

I initially had issues getting the ball to accelerate every time the ball touches the paddle.

The other issue I had was also to get sound into the game.

#Section 4 - How to score, and easter eggs

For the red paddle:

- Get as many paddle hits as you can.
- Brown ball scores 5 points and moves faster every time you hit it.
- Orange ball scores 1 point but does not accelerate at all.
- Use mouse to control red paddle, and keyboard left and right arrow keys to control blue paddle.
  For the blue paddle:
- Get as many paddle hits as you can.
- The blue paddle will count its score regardless of whether the blue paddle strikes the ball.
- However, the blue paddle has a handicap, it will only earn 4 points for the brown ball, and 1 point for the orange ball.
- Brown ball scores 4 points and moves faster every time you hit it.
- Orange ball scores 1 point but does not accelerate at all.
- Use mouse to control red paddle, and keyboard left and right arrow keys to control blue paddle.

            ##GAME OVER CONDITION##

- Game is over if the brown ball falls outside the canvas. If the orange ball falls out of the canvas, the game will not be over.
  #Section 5 - Known Bugs

The orange ball does not get destroyed when it falls below the red paddle
