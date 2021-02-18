class serverError extends Error {
  constructor() {
    super('Internal Error');
    this.name = 'serverError';
  }
}

module.exports = serverError;
