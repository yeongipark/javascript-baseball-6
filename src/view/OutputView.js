import { Console } from '@woowacourse/mission-utils';
import { message } from '../constant.js';

export default class OutputView {
  static printStartMessage() {
    Console.print(message.STRAT_MESSSAGE);
  }

  static printResultMessage(strike, ball) {
    Console.print(
      `${ball ? `${ball}볼` : ''} ${strike ? `${strike}스트라이크` : ''}`,
    );
  }

  static printCollectMessage() {
    Console.print(message.COLLECT_MESSAGE);
  }

  static printRestartMessage() {
    Console.print(message.RESTART_MESSAGE);
  }
}
