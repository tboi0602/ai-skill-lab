import type { Operator } from './types/calculator';

export type KeypadButtonConfig =
  | { label: string; action: 'digit'; value: string; variant: 'number'; span?: number }
  | { label: string; action: 'operator'; value: Operator; variant: 'operator'; span?: number }
  | { label: string; action: 'decimal'; variant: 'number'; span?: number }
  | { label: string; action: 'clear'; variant: 'action'; span?: number }
  | { label: string; action: 'compute'; variant: 'operator'; span?: number };

export const KEYPAD_BUTTONS: KeypadButtonConfig[] = [
  { label: 'C', action: 'clear', variant: 'action', span: 2 },
  { label: '/', action: 'operator', value: '/', variant: 'operator' },
  { label: '*', action: 'operator', value: '*', variant: 'operator' },
  { label: '7', action: 'digit', value: '7', variant: 'number' },
  { label: '8', action: 'digit', value: '8', variant: 'number' },
  { label: '9', action: 'digit', value: '9', variant: 'number' },
  { label: '-', action: 'operator', value: '-', variant: 'operator' },
  { label: '4', action: 'digit', value: '4', variant: 'number' },
  { label: '5', action: 'digit', value: '5', variant: 'number' },
  { label: '6', action: 'digit', value: '6', variant: 'number' },
  { label: '+', action: 'operator', value: '+', variant: 'operator' },
  { label: '1', action: 'digit', value: '1', variant: 'number' },
  { label: '2', action: 'digit', value: '2', variant: 'number' },
  { label: '3', action: 'digit', value: '3', variant: 'number' },
  { label: '=', action: 'compute', variant: 'operator' },
  { label: '0', action: 'digit', value: '0', variant: 'number', span: 2 },
  { label: '.', action: 'decimal', variant: 'number' },
];
