import GameController from './controller/GameController.js';

class App {
  async play() {
    const gameController = new GameController();
    await gameController.playGame();
  }
}

export default App;
