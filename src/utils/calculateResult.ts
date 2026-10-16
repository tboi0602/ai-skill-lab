import type { Operator } from '../types/calculator';
import { computePower } from './computePower';

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
    case '^':
      return computePower(leftOperand, rightOperand);
  }
};
