import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

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
  padding: '10px 16px 0',
  backgroundColor: '#E3FEF3',
});
export const button = style({
  width: '100%',
  padding: '8px 0',
  border: '1px solid #46DDA1',
  borderRadius: '8px',
  color: '#46DDA1',
  backgroundColor: 'white',
  cursor: 'pointer',
  outline: 'none',
  transition: 'transform 0.1s ease-in-out',
  fontSize: '18px',
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
});
export const item = recipe({
  base: {
    width: '100%',
    padding: '8px 12px',
    color: '#000000',
    borderRadius: '4px',
    border: '1px solid transparent',
    cursor: 'pointer',
    listStyle: 'none',
    transition: 'background-color 0.1s ease-in-out',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    selectors: {
      '&:hover': {
        backgroundColor: '#D1F6E8',
      },
    },
  },
  variants: {
    active: {
      true: {
        border: '1px solid #3AA0FF',
        color: '#3AA0FF',
        '&:hover': {
          backgroundColor: 'unset',
        },
      },
    },
  },
});
