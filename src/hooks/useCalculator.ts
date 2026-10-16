import { useReducer } from 'react';
import type { Operator } from '../types/calculator';
import { INITIAL_CALCULATOR_STATE } from '../types/calculator';
import { calculatorReducer } from '../utils/calculatorReducer';

export const useCalculator = () => {
  const [state, dispatch] = useReducer(calculatorReducer, INITIAL_CALCULATOR_STATE);

  const inputDigit = (digit: string) => dispatch({ type: 'INPUT_DIGIT', payload: digit });
  const inputDecimal = () => dispatch({ type: 'INPUT_DECIMAL' });
  const inputPi = () => dispatch({ type: 'INPUT_PI' });
  const chooseOperator = (operator: Operator) => dispatch({ type: 'CHOOSE_OPERATOR', payload: operator });
  const compute = () => dispatch({ type: 'COMPUTE' });
  const clear = () => dispatch({ type: 'CLEAR' });

  return {
    state,
    inputDigit,
    inputDecimal,
    inputPi,
    chooseOperator,
    compute,
    clear,
  };
};
