import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 12px',
  backgroundColor: '#121212',
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  color: 'white',
});
