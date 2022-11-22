const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../utils/Constant');
const Exception = require('../utils/Exception');
const Validator = require('../utils/Validator');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (length) => {
      if (Exception.isThrow(Validator.bridgeSize, length)) {
        this.readBridgeSize(callback);
        return;
      }
      callback(length);
    });
  },

  readMoving(callback) {
    Console.readLine(INPUT_MESSAGE.MOVE, (direction) => {
      if (Exception.isThrow(Validator.direction, direction)) {
        this.readMoving(callback);
        return;
      }
      callback(direction);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(INPUT_MESSAGE.FINAL, (command) => {
      if (Exception.isThrow(Validator.finalGame, command)) {
        this.readGameCommand(callback);
        return;
      }
      callback(command);
    });
  },
};

module.exports = InputView;
