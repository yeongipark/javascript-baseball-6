import { errorMessage } from './constant.js';

// @param number : string
export function checkInputNumbers(number) {
  isNumber(number);
  isLength3(number);
  isDuplicated(number);
}

// @param number : string
function isNumber(number) {
  if (!Number(number)) {
    throw new Error(errorMessage.NO_NUMBER);
  }
}

// @param number : string
function isLength3(number) {
  if (number.length !== 3) {
    throw new Error(errorMessage.NO_LENGTH3);
  }
}

// @param number : string
function isDuplicated(number) {
  if (new Set(number).size !== 3) {
    throw new Error(errorMessage.DUPLICATE);
  }
}

// @param number : string
export function checkReplyNumber(number) {
  if (number !== `1` && number !== `2`) {
    throw new Error(errorMessage.NO_ONETWO);
  }
}
