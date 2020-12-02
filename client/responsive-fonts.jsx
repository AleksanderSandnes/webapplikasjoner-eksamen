import makeResponsiveComponent from './make-responsive-component';

export default makeResponsiveComponent([
  {
    constraint: 'min',
    width: '0px',
    rules: `
        font-size: 14px;
        color: rebeccapurple;
      `,
  },
  {
    constraint: 'min',
    width: '320px',
    rules: `
        font-size: 28px;
        color: cyan;
      `,
  },
  {
    constraint: 'min',
    width: '640px',
    rules: `
        font-size: 42px;
        color: green;
      `,
  },
  {
    constraint: 'min',
    width: '960px',
    rules: `
        font-size: 56px;
        color: red;
      `,
  },
]);
