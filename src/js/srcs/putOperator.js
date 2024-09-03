import { DISPLAY } from '../utils/DOM.js';

const isAbleAddOperator = () => {
  const displayValue = DISPLAY.innerText;
  if (DISPLAY.innerText === '0') {
    return false;
  }
  return !Number.isNaN(Number(displayValue[displayValue.length - 1]));
};

export const putOperator = ({ target }) => {
  if (target.innerText === '=') {
    return;
  }

  if (!isAbleAddOperator()) {
    alert('Проверьте правильность выполнения операции');
    return;
  }
  DISPLAY.innerText += target.innerText;
};
