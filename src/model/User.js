import { Random } from '@woowacourse/mission-utils';

export default class User {
  #number;

  constructor(size) {
    this.#number = this.getRandomNumbers(size);
  }

  get getNumber() {
    return this.#number;
  }

  getRandomNumbers(size) {
    let numbers = new Set();
    while (numbers.size < size) {
      numbers.add(Random.pickNumberInRange(1, 9));
    }
    return numbers.join('');
  }
}
