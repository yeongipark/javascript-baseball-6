import { Console } from '@woowacourse/mission-utils';
import { message } from '../constant.js';

export default class InputView {
  static async inputNumbers() {
    return await Console.readLineAsync(message.INPUT_MESSAGE);
  }

  static async inputRestartNumber() {
    return await Console.readLineAsync('');
  }
}
