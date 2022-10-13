const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
   let rezult = '';
    for (let i = 1; i <= (options.repeatTimes || 1); i++) {
      rezult +=str;
        if (options.addition !== undefined) {
          for (let j = 1; j <= (options.additionRepeatTimes || 1); j++) {
             rezult += options.addition;
               if (j !== (options.additionRepeatTimes || 1)) {
                 rezult += (options.additionSeparator || '');
               };
          };
        };
      if (i !== (options.repeatTimes || 1)) {
        rezult += (options.separator || '+');
      };
    };
    return rezult;
}

module.exports = {
  repeater
};
