import React from 'react';
import { formatDisplayNumber } from '../utils/formatDisplayNumber';

export type CalculatorDisplayProps = {
  displayValue: string;
  previousValue: string | null;
  operator: string | null;
};

export const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  displayValue,
  previousValue,
  operator,
}) => {
  const formatted = formatDisplayNumber(displayValue);
  const expression = previousValue && operator ? `${previousValue} ${operator}` : '';

  return (
    <div style={{ background: '#222', color: '#fff', padding: '16px', borderRadius: '8px', textAlign: 'right' }}>
      <div style={{ fontSize: '14px', color: '#888', minHeight: '20px' }}>{expression}</div>
      <div style={{ fontSize: '32px', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {formatted}
      </div>
    </div>
  );
};
