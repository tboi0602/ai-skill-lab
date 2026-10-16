import React from 'react';

export type CalculatorButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'number' | 'operator' | 'action';
  span?: number;
};

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  label,
  onClick,
  variant = 'number',
  span = 1,
}) => {
  const bg = '#e74c3c';

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        gridColumn: `span ${span}`,
        padding: '16px',
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: bg,
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
};
