import { MissionUtils } from '@woowacourse/mission-utils';
import {
  COLLECT_MESSAGE,
  INPUT_MESSAGE,
  RESART_MESSSAGE,
  resultMessage,
  STRAT_MESSSAGE,
} from './message.js';

class App {
  constructor() {
    // 컴퓨터 숫자 초기화
    this.computerNumber = this.generateAnswer();
  }

  async play() {
    MissionUtils.Console.print(STRAT_MESSSAGE);
    while (true) {
      const userInputNum =
        await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);
      this.checkValidateInput(userInputNum);
      const { message, collect } = this.checkStrikeBall(
        this.computerNumber,
        userInputNum,
      );

      MissionUtils.Console.print(message);

      if (collect) {
        MissionUtils.Console.print(COLLECT_MESSAGE);
        MissionUtils.Console.print(RESART_MESSSAGE);
        const restartNum = await MissionUtils.Console.readLineAsync('');
        this.checkVAlidateRestartNum(restartNum);
        if (restartNum === '1') {
          this.computerNumber = this.generateAnswer();
          continue;
        }
        MissionUtils.Console.print('게임 종료');
        return;
      }
    }
  }

  generateAnswer() {
    /*
    랜덤한 정답을 생성하는 함수
    객체가 생성될 때 뿐만 아니라 사용자가 게임을 다시 시작할때도 정답을 다시 만들어줘야한다.
    */
    const answer = [];
    while (answer.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(randomNum)) answer.push(randomNum); //중복 검사
    }

    return [...answer];
  }

  checkStrikeBall(computer, user) {
    if (String(computer) === String(user)) return COLLECT_MESSAGE;

    let strikeCount = 0;
    let ballCount = 0;

    // 각 숫자를 비교하여 strike와 ball을 계산
    computer.forEach((computerNum, computerIndex) => {
      [...user].forEach((userNum, userIndex) => {
        if (computerNum == userNum && computerIndex === userIndex) {
          strikeCount++;
        } else if (computerNum == userNum) {
          ballCount++;
        }
      });
    });

    return {
      message: resultMessage({ strikeCount, ballCount }),
      collect: strikeCount === 3 ? true : false,
    };
  }

  checkValidateInput(num) {
    if (num.length !== 3) throw new Error('[ERROR]');

    if (!Number(num)) throw new Error('[ERROR]');

    if (new Set(num).size !== 3) throw new Error('[ERROR]');
  }

  checkVAlidateRestartNum(num) {
    if (num === '1' || num === '2') return;
    throw new Error('[ERROR]');
  }
}

const app = new App();
app.play();

export default App;
