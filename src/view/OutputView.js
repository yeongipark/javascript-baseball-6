import { Console } from '@woowacourse/mission-utils';
import { message } from '../constant.js';

export default class OutputView {
  static printStartMessage() {
    Console.print(message.STRAT_MESSSAGE);
  }

  static printResultMessage(strike, ball) {
    if (!strike && !ball) {
      Console.print('낫싱');
      return;
    }
    if (!strike) {
      Console.print(`${ball}볼`);
      return;
    }
    if (!ball) {
      Console.print(`${strike}스트라이크`);
      return;
    }
    Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  static printCollectMessage() {
    Console.print(message.COLLECT_MESSAGE);
  }

  static printRestartMessage() {
    Console.print(message.RESTART_MESSAGE);
  }
}
