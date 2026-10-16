import type { CalculatorState } from '../types/calculator';

export const handleDecimalInput = (state: CalculatorState): CalculatorState => {
  if (state.isWaitingForNextOperand) {
    return {
      ...state,
      displayValue: '0.',
      isWaitingForNextOperand: false,
    };
  }

  if (state.displayValue.includes('.')) {
    return state;
  }

  return {
    ...state,
    displayValue: `${state.displayValue}.`,
  };
};
