import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '360px',
  height: '100vh',
  backgroundColor: '#E3FEF3',
  padding: '0 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const button = style({
  width: '100%',
  height: '48px',
  margin: '10px 0',
  borderRadius: '8px',
  fontSize: '32px',
  cursor: 'pointer',
  outline: 'none',
  color: '#46DDA1',
  backgroundColor: 'white',
  border: '2px solid #46DDA1',
});

export const item = style({
  width: '100%',
  height: '48px',
  margin: '10px 0',
  borderRadius: '8px',
  color: '#000000',
  cursor: 'pointer',
  listStyle: 'none',
  selectors: {
    '& + &': {
      marginTop: '10px',
    },
  },
});
