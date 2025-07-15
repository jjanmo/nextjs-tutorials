import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('body', {
  maxWidth: '1200px',
  margin: '0 auto',
});

globalStyle('main', {
  width: '100%',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
});
