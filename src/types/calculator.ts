export type Operator = '+' | '-' | '*' | '/' | '^';

export type CalculatorState = {
  displayValue: string;
  previousValue: string | null;
  operator: Operator | null;
  isWaitingForNextOperand: boolean;
};

export type CalculatorAction =
  | { type: 'INPUT_DIGIT'; payload: string }
  | { type: 'INPUT_DECIMAL' }
  | { type: 'INPUT_PI' }
  | { type: 'CHOOSE_OPERATOR'; payload: Operator }
  | { type: 'COMPUTE' }
  | { type: 'CLEAR' };

export const INITIAL_CALCULATOR_STATE: CalculatorState = {
  displayValue: '0',
  previousValue: null,
  operator: null,
  isWaitingForNextOperand: false,
};
