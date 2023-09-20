'use strict';

function testConsole() {
  console.log('aic-vue-utils console...!');
}
var testBabel = function testBabel() {
  var _info$cli;
  var info = {
    cli: 'vue'
  };
  var o = (_info$cli = info === null || info === void 0 ? void 0 : info.cli) !== null && _info$cli !== void 0 ? _info$cli : '--';
  console.log(o);
};

exports.testBabel = testBabel;
exports.testConsole = testConsole;
