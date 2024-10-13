// 유효성 검사 테스트
import { checkInputNumbers, checkReplyNumber } from '../src/validate.js';

describe('숫자 야구 입력값 유효성 검사 테스트', () => {
  test('문자가 포함된 입력값', () => {
    expect(() => checkInputNumbers('a34')).toThrow('[ERROR]');
  });

  test('3자리 숫자가 아닌 입력값', () => {
    expect(() => checkInputNumbers('1234')).toThrow('[ERROR]');
  });

  test('중복된 숫자 입력', () => {
    expect(() => checkInputNumbers('113')).toThrow('[ERROR]');
  });

  test('올바른 3자리 숫자 입력', () => {
    expect(() => checkInputNumbers(`123`)).not.toThrow(`[ERROR]`);
  });
});

describe('재시작 번호 입력값 유효성 검사 테스트', () => {
  test('1과 2가 아닌 다른 숫자 입력', () => {
    expect(() => checkReplyNumber('3')).toThrow('[ERROR]');
  });

  test('1입력', () => {
    expect(() => checkReplyNumber('1')).not.toThrow();
  });
});
