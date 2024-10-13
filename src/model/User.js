import { Random } from '@woowacourse/mission-utils';

export default class User {
  #number;
  #size;

  constructor(size) {
    this.#size = size;
    this.#number = this.#getRandomNumbers(this.#size);
  }

  get getNumber() {
    return this.#number;
  }

  setNumber() {
    this.#number = this.#getRandomNumbers(this.#size);
  }

  #getRandomNumbers(size) {
    let numbers = new Set();
    while (numbers.size < size) {
      numbers.add(Random.pickNumberInRange(1, 9));
    }
    return [...numbers].join('');
  }
}
