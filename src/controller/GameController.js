import User from '../model/User.js';
import UserService from '../service/UserService.js';
import { checkInputNumbers, checkReplyNumber } from '../validate.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

export default class GameController {
  #you;
  constructor() {
    this.#you = new User(3);
  }

  // 전체적인 게임 흐름을 담당
  async playGame() {
    let keepGoing = true;
    OutputView.printStartMessage();
    while (keepGoing) {
      const numbers = await InputView.inputNumbers(); // 사용자에게 입력받기
      checkInputNumbers(numbers); // 유효성 검사
      const { strike, ball } = UserService.getStrikeBallCount(
        numbers,
        this.#you.getNumber,
      );
      console.log(strike, ball);
      OutputView.printResultMessage(strike, ball);
      if (strike === 3) {
        OutputView.printCollectMessage();
        OutputView.printRestartMessage();
        const restartNumber = await InputView.inputRestartNumber();
        checkReplyNumber(restartNumber);
        if (restartNumber === '2') {
          keepGoing = false;
        } else {
          this.#you.setNumber();
        }
      }
    }
  }
}
