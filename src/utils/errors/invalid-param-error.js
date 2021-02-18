module.exports = class InvalidParamError extends Error {
  constructor(param) {
    super(`Invalid param: ${param}`);
    this.name = 'InvalidParamError';
  }
};
