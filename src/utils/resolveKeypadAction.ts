import type { KeypadButtonConfig } from '../constants';
import type { Operator } from '../types/calculator';

export type KeypadCallbacks = {
  onInputDigit: (digit: string) => void;
  onInputDecimal: () => void;
  onChooseOperator: (operator: Operator) => void;
  onCompute: () => void;
  onClear: () => void;
};

export const resolveKeypadAction = (
  btn: KeypadButtonConfig,
  callbacks: KeypadCallbacks
): (() => void) => {
  switch (btn.action) {
    case 'digit':
      return () => callbacks.onInputDigit(btn.value);
    case 'decimal':
      return callbacks.onInputDecimal;
    case 'operator':
      return () => callbacks.onChooseOperator(btn.value);
    case 'compute':
      return callbacks.onCompute;
    case 'clear':
      return callbacks.onClear;
  }
};
