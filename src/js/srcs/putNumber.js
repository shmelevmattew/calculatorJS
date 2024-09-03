import { DISPLAY } from '../utils/DOM.js';
import { OPERATORS, MAXIMUM_DIGITS_LENGTH } from '../utils/constant.js';

const isValidLength = () => {
  const displayValue = DISPLAY.innerText;
  const operator = displayValue.split('').find((v) => OPERATORS.includes(v));

  if (!operator) {
    return displayValue.length < MAXIMUM_DIGITS_LENGTH;
  }
  return displayValue.split(operator)[1].length < MAXIMUM_DIGITS_LENGTH;
};

export const putNumber = ({ target }) => {
  if (!isValidLength()) {
    return alert('Проверьте длину введеного выражения! Максимум трехзначное число для выполнения операций');
  }
  if (DISPLAY.innerText === '0') {
    return (DISPLAY.innerText = target.innerText);
  }
  return (DISPLAY.innerText += target.innerText);
};
