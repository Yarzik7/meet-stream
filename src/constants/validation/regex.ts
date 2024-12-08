const nameValidationRegex = /^[A-Za-z\u0080-\uFFFF\- ']+$/;
const usernameValidationRegex = /^[a-zA-Z0-9_-]{2,10}$/;
const passwordValidationRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailValidationRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

export { nameValidationRegex, passwordValidationRegex, emailValidationRegex, usernameValidationRegex };
