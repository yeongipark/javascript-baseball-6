import GameController from './controller/GameController.js';

class App {
  async play() {
    const gameController = new GameController();
    gameController.playGame();
  }
}

export default App;
