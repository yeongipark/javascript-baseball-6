import { MissionUtils } from '@woowacourse/mission-utils';

export function printMessage(msg) {
  MissionUtils.Console.print(msg);
}

export function errorMessage(msg) {
  throw new Error(msg);
}
