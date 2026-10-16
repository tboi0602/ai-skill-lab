import type { CalculatorState } from '../types/calculator';

export const handlePiInput = (state: CalculatorState): CalculatorState => {
  const piString = String(Math.PI);

  return {
    ...state,
    displayValue: piString,
    isWaitingForNextOperand: false,
  };
};
