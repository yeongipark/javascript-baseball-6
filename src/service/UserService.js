export default class UserService {
  // @param me : string
  // you : string
  static getStrikeBallCount(me, you) {
    let strike = 0;
    let ball = 0;
    [...me].forEach((meNumber, meIndex) => {
      [...you].forEach((youNumber, youIndex) => {
        if (meNumber === youNumber && meIndex === youIndex) {
          strike++;
        } else if (meNumber === youNumber) {
          ball++;
        }
      });
    });

    return { strike, ball };
  }
}
