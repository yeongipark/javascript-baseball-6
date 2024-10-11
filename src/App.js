import Computer from './Computer.js';
import User from './User.js';
import { checkValidateUserNum, getStrikeBallCount } from './domain.js';
import { COLLECT_MESSAGE, RESART_MESSSAGE, STRAT_MESSSAGE } from './message.js';
import { printMessage } from './utils.js';

class App {
  constructor() {
    this.computer = new Computer(3);
    this.user = new User();
  }

  async play() {
    printMessage(STRAT_MESSSAGE);
    while (this.user.getRestartNum === 1) {
      await this.user.input();
      checkValidateUserNum(this.user.getNum);
      const { message, collect } = getStrikeBallCount(
        this.computer.getNum,
        this.user.getNum,
      );
      printMessage(message);
      if (collect) {
        printMessage(COLLECT_MESSAGE);
        printMessage(RESART_MESSSAGE);
        await this.user.inputReStartNum();
        if (this.user.getRestartNum === 1) {
          this.computer.setNum();
        }
      }
    }
    printMessage('게임 종료');
  }
}

const app = new App();
app.play();

export default App;
