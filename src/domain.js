import { errorMessage } from './utils.js';
import { resultMessage } from './message.js';

export const checkValidateUserNum = (num) => {
  if (num.length !== 3) errorMessage('[ERROR] 3자리 숫자를 입력해주세요');

  if (!Number(num)) errorMessage('[ERROR] 3자리 숫자를 입력해주세요');

  if (new Set(num).size !== 3)
    errorMessage('[ERROR] 중복되지 않은 3자리 숫자를 입력해주세요');
};

export const checkValidateRestartNum = (num) => {
  if (num !== '1' && num !== '2')
    errorMessage('[ERROR] 1과 2중 하나의 숫자를 입력하세요');
};

export const getStrikeBallCount = (computer, user) => {
  let strikeCount = 0;
  let ballCount = 0;

  // 각 숫자를 비교하여 strike와 ball을 계산
  [...computer].forEach((computerNum, computerIndex) => {
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
};
