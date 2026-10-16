import type { CalculatorState, Operator } from '../types/calculator';
import { handleComputeResult } from './handleComputeResult';

export const handleOperatorSelect = (
  state: CalculatorState,
  operator: Operator
): CalculatorState => {
  if (state.operator && !state.isWaitingForNextOperand) {
    const intermediate = handleComputeResult(state);
    return {
      ...intermediate,
      previousValue: intermediate.displayValue,
      operator,
      isWaitingForNextOperand: true,
    };
  }

  return {
    ...state,
    previousValue: state.displayValue,
    operator,
    isWaitingForNextOperand: true,
  };
};
