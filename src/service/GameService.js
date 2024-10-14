import BaseballGameModel from '../model/BaseballGameModel.js';

export default class GameService {
  #baseballGameModel;
  constructor() {
    this.#baseballGameModel = new BaseballGameModel(3);
  }

  isOver() {
    return this.#baseballGameModel.isOver;
  }

  restart(number) {
    if (number === '2') {
      this.#baseballGameModel.gameOver();
    } else {
      this.#baseballGameModel.restart();
    }
  }

  compareNumbers(numbers) {
    let strike = 0;
    let ball = 0;
    [...this.#baseballGameModel.computerNumbers].forEach(
      (computerNumber, computerIndex) => {
        [...numbers].forEach((number, index) => {
          if (computerNumber === number && index === computerIndex) {
            strike++;
          } else if (computerNumber === number) {
            ball++;
          }
        });
      },
    );

    return { strike, ball };
  }
}
