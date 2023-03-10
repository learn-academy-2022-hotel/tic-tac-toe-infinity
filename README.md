# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page.
  - branch name: grid
  - functional component template
  - box already provided
  - grid styling added to Square.js
```javascript
    <div className="grid">
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
      <div className="square"></div>
    </div>
```
    - https://www.w3schools.com/css/css_grid.asp
  - Refactor with square variable on App.js
```javascript
      <div className="grid">
        {squares.map((value, index) => 
          <div key={index}>
            <Square />
          </div>
        )}
      </div>
```  

- As a user, I can click on a square to mark it.
  - create function to update value at current index to "X"
  - pass index, value, custom function as props to Square.js
  - onClick attribute to perform function call to display "X" on grid
  
- As a user, my partner can click on a square after me and see their mark.
  - modify function to update value at current index to "O"

- As a user, I can't click on a square that has already been marked.
  - modify function with a conditional to only allow entries in null spaces

- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
  - create a function with a variable that stores different winning combinations and updates the winner variable

- As a user, I can't continue playing the game after the game has been won.
  - ternary that does not have onclick on grid if winner present

- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.

- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
