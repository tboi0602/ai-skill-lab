import type { CalculatorState } from '../types/calculator';
import { calculateResult } from './calculateResult';

export const handleComputeResult = (state: CalculatorState): CalculatorState => {
  if (!state.operator || state.previousValue === null) {
    return state;
  }

  const left = parseFloat(state.previousValue);
  const right = parseFloat(state.displayValue);
  const outcome = calculateResult(left, right, state.operator);

  return {
    displayValue: Number.isNaN(outcome) ? 'Error' : String(outcome),
    previousValue: null,
    operator: null,
    isWaitingForNextOperand: true,
  };
};
