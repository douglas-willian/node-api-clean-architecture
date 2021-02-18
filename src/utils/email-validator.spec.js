const validator = require('validator');
const EmailValidator = require('./email-validator');

const makeSut = () => new EmailValidator();

describe('Email Validator', () => {
  test('should return true if validator returns true', () => {
    const sut = makeSut();
    const isEmailValid = sut.isValid('valid_email@email.com');
    expect(isEmailValid).toBe(true);
  });

  test('should return false if validator returns false', () => {
    validator.isEmailValid = false;
    const sut = makeSut();
    const isValidEmail = sut.isValid('invalid_email@email.com');
    expect(isValidEmail).toBe(false);
  });

  test('should call validator with correct email', () => {
    const sut = makeSut();
    sut.isValid('any_email@email.com');
    expect(validator.email).toBe('any_email@email.com');
  });
});
