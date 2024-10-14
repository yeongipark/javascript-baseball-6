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

  restart() {
    this.#computerNumbers = this.#getRandomNumbers();
  }

  over() {
    this.#isOver = true;
  }

  compareNumbers(numbers) {
    let strike = 0;
    let ball = 0;
    [...this.#computerNumbers].forEach((computerNumber, computerIndex) => {
      [...numbers].forEach((number, index) => {
        [strike, ball] = this.#checkStrikeOrBall({
          computerNumber,
          computerIndex,
          number,
          index,
          strike,
          ball,
        });
      });
    });

    return { strike, ball };
  }

  #checkStrikeOrBall({
    computerNumber,
    computerIndex,
    number,
    index,
    strike,
    ball,
  }) {
    if (computerNumber === number && computerIndex === index) {
      return [strike + 1, ball];
    } else if (computerNumber === number) {
      return [strike, ball + 1];
    } else {
      return [strike, ball];
    }
  }

  #getRandomNumbers() {
    let numbers = new Set();
    while (numbers.size < this.#size) {
      numbers.add(Random.pickNumberInRange(1, 9));
    }
    return [...numbers].join('');
  }
}
