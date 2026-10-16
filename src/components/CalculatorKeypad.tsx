import React from 'react';
import { KEYPAD_BUTTONS } from '../constants';
import { CalculatorButton } from './CalculatorButton';
import type { KeypadCallbacks } from '../utils/resolveKeypadAction';
import { resolveKeypadAction } from '../utils/resolveKeypadAction';

export type CalculatorKeypadProps = KeypadCallbacks;

export const CalculatorKeypad: React.FC<CalculatorKeypadProps> = (callbacks) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '16px' }}>
      {KEYPAD_BUTTONS.map((btn) => (
        <CalculatorButton
          key={btn.label}
          label={btn.label}
          variant={btn.variant}
          span={btn.span}
          onClick={resolveKeypadAction(btn, callbacks)}
        />
      ))}
    </div>
  );
};
