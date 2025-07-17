import { style } from '@vanilla-extract/css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '10px 16px',
  backgroundColor: '#FDE9EA',
});
export const input = style({
  width: '100%',
  height: '48px',
  border: '1px solid #000000',
  borderRadius: '8px',
  padding: '0 16px',
  outline: 'none',
  fontSize: '18px',
});
export const textarea = style({
  width: '100%',
  height: '100%',
  border: '1px solid #000000',
  borderRadius: '8px',
  padding: '16px',
  outline: 'none',
  fontSize: '18px',
  resize: 'none',
});
export const buttonsContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '16px',
});

export const baseButton = style({
  width: '100%',
  padding: '12px 0',
  border: '1px solid #181818',
  borderRadius: '8px',
  backgroundColor: 'white',
  color: '#181818',
  cursor: 'pointer',
  outline: 'none',
  transition: 'transform 0.1s ease-in-out',
  selectors: {
    '&:active': {
      transform: 'scale(0.98)',
    },
  },
});
export const editButton = style([
  baseButton,
  {
    borderColor: '#46DDA1',
    color: '#46DDA1',
  },
]);
export const saveButton = style([
  baseButton,
  {
    borderColor: '#3FB4FF',
    color: '#3FB4FF',
  },
]);
export const deleteButton = style([
  baseButton,
  {
    borderColor: '#F64B53',
    color: '#F64B53',
  },
]);

export const disabledButton = style([
  baseButton,
  {
    cursor: 'default',
    transition: 'none',
    selectors: {
      '&:active': {
        transform: 'none',
      },
    },
  },
]);
