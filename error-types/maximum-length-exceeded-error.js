const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
  constructor(message, ...params) {
    super(...params);

    this.name = 'MaximumLengthExceededError';
    this.message = message?`Maximum length exceeded by ${message}`: `Maximum length exceeded`
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
