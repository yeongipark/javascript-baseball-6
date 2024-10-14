import { Random } from '@woowacourse/mission-utils';

export default class BaseballGameModel {
  #computerNumbers;
  #isOver;
  #size;

  constructor(size) {
    this.#isOver = false;
    this.#size = size;
    this.#computerNumbers = this.#getRandomNumbers();
  }

  get isOver() {
    return this.#isOver;
  }

  get computerNumbers() {
    return this.#computerNumbers;
  }

  restart() {
    this.#computerNumbers = this.#getRandomNumbers();
    this.#isOver = false;
  }

  gameOver() {
    this.#isOver = true;
  }

  #getRandomNumbers() {
    let numbers = new Set();
    while (numbers.size < this.#size) {
      numbers.add(Random.pickNumberInRange(1, 9));
    }
    return [...numbers].join('');
  }
}
