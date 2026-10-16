import React from 'react';
import { useCalculator } from '../hooks/useCalculator';
import { CalculatorDisplay } from './CalculatorDisplay';
import { CalculatorKeypad } from './CalculatorKeypad';

export type MiniCalculatorProps = {
  title?: string;
};

export const MiniCalculator: React.FC<MiniCalculatorProps> = ({ title = 'Mini Calculator' }) => {
  const { state, inputDigit, inputDecimal, chooseOperator, compute, clear } = useCalculator();

  return (
    <div
      style={{
        width: '300px',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: '#1e272e',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
        fontFamily: 'sans-serif',
      }}
    >
      <h3 style={{ margin: '0 0 12px', color: '#f5f6fa', textAlign: 'center' }}>{title}</h3>
      <CalculatorDisplay
        displayValue={state.displayValue}
        previousValue={state.previousValue}
        operator={state.operator}
      />
      <CalculatorKeypad
        onInputDigit={inputDigit}
        onInputDecimal={inputDecimal}
        onChooseOperator={chooseOperator}
        onCompute={compute}
        onClear={clear}
      />
    </div>
  );
};
