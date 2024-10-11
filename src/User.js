import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './message.js';
import { checkValidateRestartNum } from './domain.js';

class User {
  #num;
  #restartNum;

  constructor() {
    this.#num = '';
    this.#restartNum = 1;
  }

  get getNum() {
    return this.#num;
  }

  get getRestartNum() {
    return this.#restartNum;
  }

  async inputReStartNum() {
    const restartNum = await MissionUtils.Console.readLineAsync('');
    checkValidateRestartNum(restartNum);
    this.#restartNum = Number(restartNum);
  }

  async input() {
    this.#num = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);
  }
}

export default User;
