export const STRAT_MESSSAGE = '숫자 야구 게임을 시작합니다.';
export const INPUT_MESSAGE = '숫자를 입력해주세요 : ';
export const COLLECT_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
export const RESART_MESSSAGE =
  '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';
export const resultMessage = ({ strikeCount, ballCount }) => {
  if (!strikeCount && !ballCount) {
    return '낫싱';
  }

  if (!strikeCount) {
    return `${ballCount}볼`;
  }

  if (!ballCount) {
    return `${strikeCount}스트라이크`;
  }

  return `${ballCount}볼 ${strikeCount}스트라이크`;
};
