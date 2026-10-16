import type { Operator } from '../types/calculator';

export const calculateResult = (
  leftOperand: number,
  rightOperand: number,
  operator: Operator
): number => {
  switch (operator) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
    case '/':
      return rightOperand === 0 ? NaN : leftOperand / rightOperand;
  }
};
