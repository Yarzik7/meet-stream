import { RegisterOptions, FieldValues } from 'react-hook-form';
import { nameValidationRegex, usernameValidationRegex, emailValidationRegex } from '@/constants/validation/regex';

const createNameRegisterOptions = <T extends FieldValues>(): RegisterOptions<T> => ({
  required: { value: true, message: 'Name is required' },
  minLength: { value: 2, message: 'Requires 6 to 64 characters' },
  maxLength: { value: 64, message: 'Requires 6 to 64 characters' },
  pattern: { value: nameValidationRegex, message: 'Invalid name' },
});

const createUsernameRegisterOptions = <T extends FieldValues>(): RegisterOptions<T> => ({
  required: { value: true, message: 'Username is required' },
  minLength: { value: 2, message: 'Requires 6 to 10 characters' },
  maxLength: { value: 10, message: 'Requires 6 to 10 characters' },
  pattern: { value: usernameValidationRegex, message: 'Invalid username' },
});

const createEmailRegisterOptions = <T extends FieldValues>(): RegisterOptions<T> => ({
  required: { value: true, message: 'Email is required' },
  pattern: { value: emailValidationRegex, message: 'Invalid email address' },
});

const createPasswordRegisterOptions = <T extends FieldValues>(): RegisterOptions<T> => ({
  required: { value: true, message: 'Password is required' },
  minLength: { value: 6, message: 'Requires 6 to 20 characters' },
  maxLength: { value: 20, message: 'Requires 6 to 20 characters' },
});

export {
  createNameRegisterOptions,
  createUsernameRegisterOptions,
  createEmailRegisterOptions,
  createPasswordRegisterOptions,
};
