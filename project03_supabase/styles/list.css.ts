import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '300px',
  height: 'calc(100vh - 64px)',
  backgroundColor: '#E3FEF3',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});
export const buttonWrapper = style({
  position: 'sticky',
  top: '0',
  width: '100%',
  padding: '10px 16px',
  backgroundColor: '#E3FEF3',
});
export const button = style({
  width: '100%',
  height: '48px',
  border: '2px solid #46DDA1',
  borderRadius: '8px',
  fontSize: '32px',
  color: '#46DDA1',
  backgroundColor: 'white',
  cursor: 'pointer',
  outline: 'none',
  transition: 'transform 0.1s ease-in-out',
  selectors: {
    '&:active': {
      transform: 'scale(0.98)',
    },
  },
});
export const list = style({
  width: '100%',
  padding: '0 16px',
  margin: '16px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});
export const item = style({
  width: '100%',
  padding: '8px 16px',
  color: '#000000',
  borderRadius: '4px',
  cursor: 'pointer',
  listStyle: 'none',
  transition: 'background-color 0.1s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: '#D1F6E8',
    },
  },
});
