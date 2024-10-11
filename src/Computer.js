import { MissionUtils } from '@woowacourse/mission-utils';

class Computer {
  #num;
  #size;

  constructor(size) {
    this.#size = size;
    this.#num = this.getRandomTargetNum(size);
  }

  get getNum() {
    return this.#num;
  }

  setNum() {
    this.#num = this.getRandomTargetNum();
  }

  getRandomTargetNum() {
    const set = new Set();
    while (set.size < this.#size) {
      set.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...set].join('');
  }
}

export default Computer;
