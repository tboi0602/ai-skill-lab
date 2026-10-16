import type { CalculatorAction, CalculatorState } from '../types/calculator';
import { INITIAL_CALCULATOR_STATE } from '../types/calculator';
import { handleComputeResult } from './handleComputeResult';
import { handleDecimalInput } from './handleDecimalInput';
import { handleDigitInput } from './handleDigitInput';
import { handleOperatorSelect } from './handleOperatorSelect';
import { handlePiInput } from './handlePiInput';

export const calculatorReducer = (
  state: CalculatorState,
  action: CalculatorAction
): CalculatorState => {
  switch (action.type) {
    case 'INPUT_DIGIT':
      return handleDigitInput(state, action.payload);
    case 'INPUT_DECIMAL':
      return handleDecimalInput(state);
    case 'INPUT_PI':
      return handlePiInput(state);
    case 'CHOOSE_OPERATOR':
      return handleOperatorSelect(state, action.payload);
    case 'COMPUTE':
      return handleComputeResult(state);
    case 'CLEAR':
      return INITIAL_CALCULATOR_STATE;
  }
};
