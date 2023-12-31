# tic-tac-toe

## Min-Requirements
- Display an empty tic-tac-toe board when the page is initially displayed.
- A player can click on the nine cells to make a move.
- Every click will alternate between marking an X and O.
- Once occupied with an X or O, the cell cannot be played again.
- Provide a Reset Game button that will clear the contents of the board.

## Getting Started / Hints
 - Follow the approach as described in the Guide on How to Build a Browser Game.
 - Create an index.html page.
 - Create and include in your index.html page, main.css and main.js files.
 - Start by writing the HTML and CSS that displays a 3x3 grid and the reset game button.
 - Using id and/or class attributes will help you target elements for styling and wiring up your click event listeners.
 - Programs, including games, are frequently focused on manipulating data and displaying that data to a user. Decide on the data structures, held in variables, that   will maintain the state (data / status) of the game.
 - Note that the values you use to represent the state of your game, doesn’t necessarily have to match what you want to display. For example, just because you want to display X and Os doesn’t mean that you have to use those letters in your data structure. You might choose to use 1 to represent player X and -1 to represent player O for example. Then, in your render function you would have the logic to translate data to what you want to display.
 - Wire up your click event listener(s). Using a single listener with event bubbling is recommended but not required.
 - Lots of little functions!

 ### Bonuses
- Display whose turn it is (“X” or “O”).
- Provide win logic and display a winning message.
- Provide logic for a cat’s game (tie), also displaying a message.
- Add your personal touch with unique styling.