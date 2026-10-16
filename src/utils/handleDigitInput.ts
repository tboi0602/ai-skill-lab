import type { CalculatorState } from '../types/calculator';

export const handleDigitInput = (
  state: CalculatorState,
  digit: string
): CalculatorState => {
  if (state.isWaitingForNextOperand || state.displayValue === '0') {
    return {
      ...state,
      displayValue: digit,
      isWaitingForNextOperand: false,
    };
  }

  return {
    ...state,
    displayValue: `${state.displayValue}${digit}`,
  };
};
