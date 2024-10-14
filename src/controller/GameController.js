import GameService from '../service/GameService.js';
import { checkInputNumbers, checkReplyNumber } from '../validate.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

export default class GameController {
  #gameService;
  constructor() {
    this.#gameService = new GameService();
  }

  // 전체적인 게임 흐름을 담당하는 메서드
  async playGame() {
    OutputView.printStartMessage();
    while (!this.#gameService.isOver()) {
      const numbers = await InputView.inputNumbers();
      checkInputNumbers(numbers);
      const { strike, ball } = this.#gameService.compareNumbers(numbers);
      OutputView.printResultMessage(strike, ball);
      await this.#checkGameResult(strike);
    }
  }

  // 3스트라이크인지 확인하는 메서드
  async #checkGameResult(strike) {
    if (strike === 3) {
      const restartNumber = await this.#askForRestart();
      checkReplyNumber(restartNumber);
      this.#gameService.restart(restartNumber);
    }
  }

  // 3스트라이크 인 경우 게임 재시작 할 지 입력받는 메서드
  async #askForRestart() {
    OutputView.printCollectMessage();
    OutputView.printRestartMessage();
    const restartNumber = await InputView.inputRestartNumber();
    return restartNumber;
  }
}
