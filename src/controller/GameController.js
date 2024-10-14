import BaseballGameModel from '../model/BaseballGameModel.js';
import { checkInputNumbers, checkReplyNumber } from '../validate.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

export default class GameController {
  #baseballGameModel;
  constructor() {
    this.#baseballGameModel = new BaseballGameModel(3);
  }

  // 전체적인 게임 흐름을 담당
  async playGame() {
    OutputView.printStartMessage();
    while (!this.#baseballGameModel.isOver) {
      const numbers = await InputView.inputNumbers(); // 사용자에게 입력받기
      checkInputNumbers(numbers); // 유효성 검사
      const { strike, ball } = this.#baseballGameModel.compareNumbers(numbers);
      OutputView.printResultMessage(strike, ball);
      if (strike === 3) {
        OutputView.printCollectMessage();
        OutputView.printRestartMessage();
        const restartNumber = await InputView.inputRestartNumber();
        checkReplyNumber(restartNumber);
        if (restartNumber === '2') {
          this.#baseballGameModel.over();
        } else {
          this.#baseballGameModel.restart();
        }
      }
    }
  }
}
